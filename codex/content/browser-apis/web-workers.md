# Web Workers and Offscreen Canvas

Web Workers run JavaScript on a background thread, freeing the main thread for UI rendering and input handling. Any computation that takes more than 50ms risks becoming a "long task" that delays frames and makes the page feel janky — offload it to a Worker.

## Creating a Worker

```ts
// heavy-work.worker.ts
self.addEventListener('message', (event: MessageEvent<WorkerMessage>) => {
  const { type, payload } = event.data;

  if (type === 'PROCESS_DATA') {
    const result = processLargeDataset(payload.rows);
    self.postMessage({ type: 'RESULT', payload: result });
  }
});

function processLargeDataset(rows: DataRow[]): ProcessedResult {
  // This runs off the main thread — can take as long as needed
  return rows.reduce((acc, row) => {
    // expensive computation
    return acc;
  }, { totals: {}, anomalies: [] });
}
```

```ts
// main thread
const worker = new Worker(new URL('./heavy-work.worker.ts', import.meta.url), {
  type: 'module',
});

worker.postMessage({ type: 'PROCESS_DATA', payload: { rows: largeArray } });

worker.addEventListener('message', (event) => {
  const { type, payload } = event.data;
  if (type === 'RESULT') setProcessedData(payload);
});

worker.addEventListener('error', (err) => {
  console.error('Worker error:', err);
});

// Terminate when done
worker.terminate();
```

## Transferable objects — zero-copy messaging

By default, data passed to `postMessage` is copied (structured clone). For large binary data, use Transferable objects to move the buffer rather than copying it:

```ts
// ❌ Copies 10MB — slow
const buffer = new ArrayBuffer(10 * 1024 * 1024);
worker.postMessage({ buffer });

// ✅ Transfers ownership — no copy, buffer is detached on the main thread
worker.postMessage({ buffer }, [buffer]);
// buffer is now unusable in main thread — worker owns it

// Worker transfers back to main thread when done
self.postMessage({ result: processedBuffer }, [processedBuffer]);
```

## React hook for Worker communication

```ts
function useWorker<In, Out>(workerFactory: () => Worker) {
  const workerRef = useRef<Worker | null>(null);
  const [result, setResult] = useState<Out | null>(null);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const worker = workerFactory();
    workerRef.current = worker;
    worker.onmessage = (e: MessageEvent<Out>) => {
      setResult(e.data);
      setPending(false);
    };
    return () => worker.terminate();
  }, []);

  const send = useCallback((data: In) => {
    setPending(true);
    workerRef.current?.postMessage(data);
  }, []);

  return { send, result, pending };
}
```

## OffscreenCanvas — render without a DOM element

`OffscreenCanvas` lets a Worker perform canvas rendering off the main thread:

```ts
// Main thread — transfer canvas control to worker
const canvas = document.getElementById('chart') as HTMLCanvasElement;
const offscreen = canvas.transferControlToOffscreen();
worker.postMessage({ type: 'INIT', canvas: offscreen }, [offscreen]);

// Worker
let ctx: OffscreenCanvasRenderingContext2D | null = null;

self.addEventListener('message', (e) => {
  if (e.data.type === 'INIT') {
    ctx = e.data.canvas.getContext('2d');
  }
  if (e.data.type === 'DRAW' && ctx) {
    drawFrame(ctx, e.data.frameData);
    // Rendering happens off the main thread — never blocks UI
  }
});
```

## When NOT to use Workers

- When the computation is fast (<5ms) — the postMessage overhead isn't worth it.
- When you need DOM access — Workers have no DOM. Use `requestAnimationFrame` in the main thread instead.
- For simple data transformations — `Array.map`/`filter` on small arrays stays on the main thread.

## Related

- See also: [Foundations → Event Loop](#/codex/foundations-event-loop) for long task budgets and main thread.
- See also: [Performance → INP and Input Latency](#/codex/performance-inp-and-input-latency) for why offloading matters for responsiveness.
- See also: [Foundations → Browser Rendering Pipeline](#/codex/foundations-browser-rendering-pipeline) for the compositor thread.

## Sources

- [MDN — Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- [MDN — OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)
- [web.dev — Use web workers for long tasks](https://web.dev/articles/off-main-thread)
- [MDN — Transferable objects](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Transferable_objects)
