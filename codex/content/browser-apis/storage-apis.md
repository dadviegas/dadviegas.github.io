# Storage APIs

Browsers provide several storage mechanisms, each with different capacity, persistence, synchrony, and access scope. Choosing the wrong one leads to data loss on private browsing, exceeded quotas, or synchronous main-thread blocking.

## The storage landscape

| API | Capacity | Sync? | Scope | Survives private mode? |
|-----|----------|-------|-------|----------------------|
| `localStorage` | ~5MB | Sync | Origin | No |
| `sessionStorage` | ~5MB | Sync | Tab | No |
| IndexedDB | Quota-based (~60%+ of disk) | Async | Origin | No |
| Cache API | Quota-based | Async | Origin | No |
| Cookies | ~4KB/cookie | Sync read | Domain | No |
| OPFS (Origin Private FS) | Quota-based | Sync in Worker | Origin | No |

## localStorage — fast but synchronous

`localStorage` reads/writes are synchronous and block the main thread. Avoid large values or frequent writes:

```ts
// ❌ Synchronous large parse on every render — blocks main thread
const settings = JSON.parse(localStorage.getItem('settings') ?? '{}');

// ✅ Parse once, cache in memory, persist on change
let cachedSettings: Settings | null = null;

function loadSettings(): Settings {
  if (cachedSettings) return cachedSettings;
  try {
    cachedSettings = JSON.parse(localStorage.getItem('settings') ?? '{}');
  } catch {
    cachedSettings = {};
  }
  return cachedSettings;
}

function saveSettings(next: Settings) {
  cachedSettings = next;
  localStorage.setItem('settings', JSON.stringify(next)); // sync — keep values small
}
```

## IndexedDB — the right choice for structured data

IDB is the only browser storage that's async, transactional, and supports large values:

```ts
async function openDB(name: string, version: number): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(name, version);
    req.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('docs')) {
        db.createObjectStore('docs', { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveDoc(db: IDBDatabase, doc: Doc): Promise<void> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('docs', 'readwrite');
    const store = tx.objectStore('docs');
    const req = doc.id ? store.put(doc) : store.add(doc);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}
```

Use `idb` or `dexie` for a nicer API over the raw IDB:

```ts
import { openDB } from 'idb';

const db = await openDB('myapp', 1, {
  upgrade(db) {
    db.createObjectStore('settings');
  },
});

await db.put('settings', JSON.stringify(value), key);
const raw = await db.get('settings', key);
```

## Cache API — for request/response pairs

The Cache API is designed for service workers to cache network responses:

```ts
// In a service worker
const CACHE = 'v1';

self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached ?? fetch(event.request).then((response) => {
        const cloned = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, cloned));
        return response;
      });
    })
  );
});
```

## Storage quota

Browsers limit total storage per origin. Estimate usage and quota:

```ts
const estimate = await navigator.storage.estimate();
console.log(`Used: ${estimate.usage} / ${estimate.quota} bytes`);
console.log(`${((estimate.usage! / estimate.quota!) * 100).toFixed(1)}% full`);
```

Request persistent storage (prompts user) to prevent eviction under memory pressure:

```ts
const persisted = await navigator.storage.persist();
console.log(persisted ? 'Storage is persistent' : 'Storage may be evicted');
```

## Related

- See also: [Browser APIs → Intersection Observer](#/codex/browser-apis-intersection-observer) for scroll-triggered data loading.
- See also: [State → Data Fetching as State](#/codex/state-data-fetching-as-state) for caching fetched data.
- See also: [Auth → Cookie Security](#/codex/auth-cookie-security) for cookie scope and flags.

## Sources

- [MDN — Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN — IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [MDN — Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache)
- [web.dev — Storage for the web](https://web.dev/articles/storage-for-the-web)
