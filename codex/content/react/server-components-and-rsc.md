# Server Components & RSC

React Server Components (RSC) shift where a component renders from the client's browser to the server — but without the traditional tradeoffs of SSR (hydration overhead, "islands" complexity). Understanding the model is essential for Next.js 13+ App Router and any framework that adopts RSC.

## The rendering model distinction

**Client components** (the only kind before RSC):
- Render on the server (for SSR) and hydrate on the client
- Ship their JavaScript to the browser
- Can use hooks, event handlers, browser APIs

**Server components**:
- Render exclusively on the server
- Ship *zero* JavaScript to the browser
- Can be async — fetch data with `await` directly in the component body
- Cannot use hooks, event handlers, or browser APIs

```tsx
// Server component — no 'use client' directive, runs on server only
async function UserProfile({ userId }: { userId: string }) {
  // Direct database access or API call — no useEffect, no loading state
  const user = await db.user.findUnique({ where: { id: userId } });

  if (!user) return <NotFound />;

  return (
    <section>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      {/* Client component for interactive part */}
      <FollowButton userId={userId} />
    </section>
  );
}

// Client component — 'use client' marks the boundary
'use client';
function FollowButton({ userId }: { userId: string }) {
  const [following, setFollowing] = useState(false);

  return (
    <button onClick={async () => {
      await toggleFollow(userId);
      setFollowing((prev) => !prev);
    }}>
      {following ? 'Unfollow' : 'Follow'}
    </button>
  );
}
```

## The serialization boundary

Server components and client components communicate via props. The boundary matters: props crossing from server to client must be serializable — no functions, no class instances, no closures.

```tsx
// ❌ Cannot pass a function from a server component to a client component via props
async function ServerParent() {
  return <ClientChild onClick={() => console.log('click')} />;  // serialization error
}

// ✅ Server component provides data; client component owns interaction
async function ServerParent() {
  const data = await fetchData();
  return <ClientChild initialData={data} />;  // plain object — serializable
}
```

Server Actions (marked with `'use server'`) are the escape hatch — they allow a client component to call server-side code through a form action or direct function call without manual API route setup.

## The composition pattern — server wrapping client wrapping server

The key constraint people misunderstand: a client component *cannot import* a server component, but it *can receive* server components as `children`:

```tsx
// ❌ Client component importing a server component — breaks the model
'use client';
import { ServerFeed } from './ServerFeed';  // wrong — ServerFeed can't run client-side

function Layout() {
  return <ServerFeed />;  // this won't work as a server component anymore
}

// ✅ Server component passes server-rendered content as children to client component
async function PageLayout() {
  return (
    <InteractiveShell>  {/* client component */}
      <ServerFeed />    {/* server component passed as children prop */}
    </InteractiveShell>
  );
}

'use client';
function InteractiveShell({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <button onClick={() => setIsExpanded((p) => !p)}>Toggle</button>
      {isExpanded && children}  {/* server-rendered content as a prop */}
    </div>
  );
}
```

The server-rendered content travels as a serialized React tree, not as re-executed component code.

## When RSC helps (and when it doesn't)

**RSC helps:**
- Data-heavy pages where most content is read-only (product listings, dashboards)
- Eliminating waterfalls — each component fetches its own data in parallel on the server
- Reducing bundle size — components that don't need interactivity ship zero JS

**RSC does not help:**
- Highly interactive UIs (forms, real-time updates, animations)
- Apps already using a well-configured CDN + SWR/React Query pattern
- Incremental adoption in client-only apps (requires a framework that supports RSC — not achievable with Vite/Create React App alone)

## Streaming with Suspense

RSC integrates with React's Suspense model to stream HTML progressively:

```tsx
// App Router page — server component
export default async function DashboardPage() {
  return (
    <main>
      {/* This renders immediately */}
      <DashboardHeader />

      {/* This streams in when the slow query resolves */}
      <Suspense fallback={<MetricsSkeleton />}>
        <ExpensiveMetrics />  {/* server component with a slow DB query */}
      </Suspense>
    </main>
  );
}

async function ExpensiveMetrics() {
  const data = await slowAggregationQuery();  // blocks only this subtree
  return <MetricsGrid data={data} />;
}
```

The browser receives HTML for `DashboardHeader` immediately. `ExpensiveMetrics` HTML arrives in a later chunk when the server finishes the query.

## Practical adoption path

If you're on Next.js 13+ App Router, you're already in RSC territory. The shift in thinking:

1. Default to server components — add `'use client'` only when you need hooks or event handlers.
2. Push interactivity to the leaves of the tree.
3. Use Server Actions for form submissions and mutations instead of `/api` route handlers.
4. Keep async data fetching in server components; keep UI state in client components.

## Related

- See also: [React → Concurrent Rendering & Suspense](#/codex/react-concurrent-rendering-and-suspense) for how streaming and Suspense boundaries work together.
- See also: [Performance → Core Web Vitals](#/codex/performance-core-web-vitals) for how RSC affects LCP and INP metrics.
