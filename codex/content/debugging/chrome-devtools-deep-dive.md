# Chrome DevTools Deep Dive

Chrome DevTools is the primary debugging environment for web developers. Mastering it beyond the basics — breakpoints, network inspection, the Performance panel — turns hours-long debugging sessions into minutes.

## Breakpoints beyond "add a breakpoint"

```ts
// ❌ console.log debugging — clutter, redeploy to add/remove
console.log('value:', x);

// ✅ Conditional breakpoints — right-click the gutter → "Add conditional breakpoint"
// Condition: x > 100 && user.role === 'admin'
// Only pauses when the condition is true
```

**Types of breakpoints in DevTools:**

| Type | How to set | Use for |
|------|-----------|---------|
| Line breakpoint | Click gutter | Pause at specific line |
| Conditional | Right-click gutter | Pause only when condition is true |
| Logpoint | Right-click gutter → Add logpoint | `console.log` without modifying code |
| DOM breakpoint | Elements panel → right-click node | Pause when node is modified/removed |
| XHR/Fetch breakpoint | Sources → XHR/Fetch Breakpoints | Pause on any fetch to a matching URL |
| Event listener | Sources → Event Listener Breakpoints | Pause on `click`, `keydown`, etc. |
| Exception | Sources → Pause on exceptions | Catch errors at the throw site |

## The Performance panel workflow

1. **Record:** Start recording → trigger the behaviour → stop.
2. **Identify long tasks:** Look for red triangles (>50ms tasks) in the Main track.
3. **Drill into the flame chart:** Click a task to see its call stack. The widest bar is the hottest function.
4. **Read timings:** In the Timings track, look for LCP, FID, CLS markers.
5. **Check "Bottom-Up" tab:** Sorts functions by total time — identifies the real culprit.

```
Flame chart reading:
- Width = time spent
- Nesting = call stack
- Yellow = scripting
- Purple = rendering (layout/style)
- Green = painting
- Gray = other
```

## Memory panel — find leaks

1. Take a heap snapshot before the suspected leak.
2. Perform the action (open/close a modal, navigate).
3. Take another snapshot.
4. Switch to "Comparison" view — shows what was created and retained.

Objects in **Detached** state (detached from DOM but not GC'd) are the primary leak indicator:

```
Detached HTMLDivElement → your event listener holds a reference → GC can't collect
```

## Network panel tips

```
Filter requests:
- Type: Fetch/XHR (API calls only)
- Domain filter: api.example.com
- Status: is:running (pending), is:error (failed)

Throttle to simulate real conditions:
- Fast 4G: 25Mb down, 10Mb up, 40ms RTT
- Slow 4G: 4Mb down, 3Mb up, 100ms RTT

Block specific resources:
- Right-click a request → Block request URL
- Tests how the app handles CDN failures

Copy as cURL:
- Right-click a request → Copy → Copy as cURL
- Reproduces the exact request in terminal
```

## Console tips

```ts
// Group related logs
console.group('Auth flow');
console.log('Token:', token.substring(0, 10) + '...');
console.log('Expiry:', new Date(payload.exp * 1000));
console.groupEnd();

// Table for arrays of objects
console.table(users, ['id', 'name', 'role']); // columns to show

// Timing
console.time('computation');
heavyComputation();
console.timeEnd('computation'); // "computation: 143ms"

// Assert — logs only when false
console.assert(user.id !== null, 'User ID must not be null', user);

// Last evaluated value in console — $_
// Run any expression, then: $_ gives you its value
```

## Elements panel — live CSS editing

- Double-click any style value in the Styles panel to edit it live.
- Force element state: right-click in Styles → "Force element state" → `:hover`, `:focus`, `:active`.
- `$0` in the console refers to the currently selected element.
- **Computed tab** shows the final computed value for every CSS property — use this to diagnose specificity issues.

## Related

- See also: [Debugging → Performance Debugging Runbook](#/codex/debugging-performance-debugging-runbook) for systematic Performance panel workflows.
- See also: [Debugging → Memory Leaks and Detached DOM](#/codex/debugging-memory-leaks-and-detached-dom) for heap snapshot analysis.
- See also: [Foundations → Browser Rendering Pipeline](#/codex/foundations-browser-rendering-pipeline) for understanding what the flame chart is showing.

## Sources

- [Chrome DevTools docs](https://developer.chrome.com/docs/devtools/)
- [Chrome DevTools — JavaScript debugging](https://developer.chrome.com/docs/devtools/javascript/)
- [Chrome DevTools — Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Chrome DevTools — Memory](https://developer.chrome.com/docs/devtools/memory-problems/)
