# Refs & Imperative Handles

`useRef` stores a mutable value that persists across renders without triggering re-renders. It serves two distinct purposes that share the same hook: holding a reference to a DOM element, and holding an instance variable that escapes React's rendering model.

## DOM refs — when React's declarative model isn't enough

```tsx
function AutoFocusInput({ label }: { label: string }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Can't do this declaratively — we need to call .focus() imperatively
    inputRef.current?.focus();
  }, []);

  return (
    <label>
      {label}
      <input ref={inputRef} type="text" />
    </label>
  );
}
```

Common valid uses for DOM refs:
- Focus management (modals, search bars, auto-focus on mount)
- Triggering animations not driven by React state
- Reading layout measurements (`getBoundingClientRect()`) before paint (use `useLayoutEffect` for this)
- Integrating with third-party imperative libraries (canvas, video, map instances)

## Instance variables — escaping React's render cycle

A ref's `.current` is a mutable object that persists for the lifetime of the component instance. Unlike state, mutating it doesn't schedule a re-render:

```tsx
function VideoPlayer({ src }: { src: string }) {
  const playerRef = useRef<HTMLVideoElement>(null);
  const playCountRef = useRef(0);  // instance variable — not state

  function handlePlay() {
    playCountRef.current += 1;  // no re-render triggered
    console.log(`Played ${playCountRef.current} times`);
    playerRef.current?.play();
  }

  return <video ref={playerRef} src={src} onClick={handlePlay} />;
}
```

When to use a ref as an instance variable instead of state:
- Values that don't affect rendering (play counts, previous values for comparison, abort controller references, timer IDs)
- Values that need to be read inside a callback but shouldn't trigger re-renders when mutated

## `useImperativeHandle` — exposing an API from a child component

By default, `ref` on a custom component doesn't do anything — refs attach to DOM elements, not React components. `useImperativeHandle` lets you explicitly define what a parent can do via a ref:

```tsx
import { useRef, useImperativeHandle, forwardRef } from 'react';

interface DrawingCanvasHandle {
  clear(): void;
  export(): string;  // returns data URL
}

interface DrawingCanvasProps {
  width: number;
  height: number;
}

const DrawingCanvas = forwardRef<DrawingCanvasHandle, DrawingCanvasProps>(
  function DrawingCanvas({ width, height }, ref) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useImperativeHandle(ref, () => ({
      clear() {
        const ctx = canvasRef.current?.getContext('2d');
        ctx?.clearRect(0, 0, width, height);
      },
      export() {
        return canvasRef.current?.toDataURL('image/png') ?? '';
      },
    }), [width, height]);

    return <canvas ref={canvasRef} width={width} height={height} />;
  }
);

// Usage in a parent
function AnnotationEditor() {
  const canvasRef = useRef<DrawingCanvasHandle>(null);

  return (
    <>
      <DrawingCanvas ref={canvasRef} width={800} height={600} />
      <button onClick={() => canvasRef.current?.clear()}>Clear</button>
      <button onClick={() => {
        const dataUrl = canvasRef.current?.export();
        if (dataUrl) downloadImage(dataUrl);
      }}>
        Export
      </button>
    </>
  );
}
```

`useImperativeHandle` exists for escaping the declarative model when you truly need imperative control. It's the right tool for media players, canvas drawing, focus traps, and third-party library wrappers.

## The forwarded ref pattern

`forwardRef` passes a ref from a parent through to a DOM element inside a child:

```tsx
const FancyInput = forwardRef<HTMLInputElement, { placeholder?: string }>(
  function FancyInput({ placeholder }, ref) {
    return (
      <div className="fancy-wrapper">
        <input ref={ref} placeholder={placeholder} />
      </div>
    );
  }
);

// Parent can attach a ref to FancyInput's internal <input>
const inputRef = useRef<HTMLInputElement>(null);
<FancyInput ref={inputRef} placeholder="Type here" />
// inputRef.current → the actual <input> DOM node
```

## Common anti-patterns

**Using a ref when state is the right tool.** If the value affects what renders, it's state — not a ref.

```tsx
// ❌ Refs don't trigger re-renders — the UI will never show the new count
function ClickCounter() {
  const countRef = useRef(0);
  return <button onClick={() => { countRef.current += 1; }}>{countRef.current}</button>;
}

// ✅
function ClickCounter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
```

**Reading a ref inside render.** Refs are mutable and their value doesn't participate in React's rendering cycle — reading them during render can produce inconsistent output.

## Related

- See also: [React → useEffect vs useLayoutEffect](#/codex/react-useeffect-vs-uselayouteffect) for when to read DOM measurements from a ref.
- See also: [React → Hooks: Rules & Mental Model](#/codex/react-hooks-rules-and-mental-model) for the mental model around render cycles.
