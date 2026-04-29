# this Binding

`this` in JavaScript is determined at call time, not at definition time — with one exception (arrow functions). Understanding the four call-site rules eliminates an entire category of runtime errors.

## The four rules (in priority order)

**1. `new` binding** — when a function is called with `new`, `this` is the newly created object.

**2. Explicit binding** — `.call(ctx, ...)`, `.apply(ctx, [...])`, or `.bind(ctx)` set `this` explicitly. `.bind` returns a new function with `this` permanently fixed.

**3. Implicit binding** — when a function is called as a method (`obj.method()`), `this` is `obj`.

**4. Default binding** — when none of the above apply, `this` is `undefined` in strict mode (or `globalThis` in sloppy mode).

```ts
function logUser(this: { name: string }) {
  return this.name;
}

const alice = { name: 'Alice', log: logUser };

alice.log();                    // 'Alice' — implicit binding
logUser.call({ name: 'Bob' }); // 'Bob' — explicit binding
logUser();                      // TypeError in strict mode — 'this' is undefined
```

## The implicit binding loss

The most common `this` bug: extracting a method from an object loses implicit binding.

```ts
class AudioPlayer {
  private currentTrack = 'track-1';

  play() {
    console.log(`Playing: ${this.currentTrack}`);
  }
}

const player = new AudioPlayer();
player.play();               // 'Playing: track-1' — implicit binding

const play = player.play;
play();                      // TypeError — 'this' is undefined, method lost its receiver
document.addEventListener('keydown', player.play); // same problem

// Fix: bind at assignment
const boundPlay = player.play.bind(player);
document.addEventListener('keydown', boundPlay);
```

## Arrow functions — lexical `this`

Arrow functions capture `this` from their *definition* context. They have no own `this`:

```ts
class SearchComponent {
  private query = '';

  // ✅ Arrow function captures 'this' from the class body (constructor context)
  private handleInput = (e: InputEvent) => {
    this.query = (e.target as HTMLInputElement).value;
    this.search(); // 'this' is the SearchComponent instance
  };

  mount(input: HTMLInputElement) {
    input.addEventListener('input', this.handleInput); // no .bind needed
  }

  unmount(input: HTMLInputElement) {
    input.removeEventListener('input', this.handleInput); // same reference — removes correctly
  }
}
```

Arrow functions as class fields (see Prototypes & Classes) are the standard pattern for callbacks that need `this`. The trade-off is that they're instance properties — each instance gets a new function.

## `this` in React class components (now historical)

```tsx
// ❌ Classic bug — 'this' is undefined when handler is called
class Toggle extends React.Component {
  state = { on: false };

  handleClick() {
    this.setState({ on: !this.state.on }); // TypeError
  }

  render() {
    return <button onClick={this.handleClick}>Toggle</button>;
  }
}

// ✅ Bind in constructor or use class field arrow
class Toggle extends React.Component {
  state = { on: false };
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };
}
```

This specific footgun is one of the reasons React hooks (which use closures instead of `this`) were so broadly adopted.

## `this` in callbacks and Promise chains

```ts
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // ❌ 'this' is lost inside the then callback if using a regular function
  fetchUser(id: string) {
    return fetch(`${this.baseUrl}/users/${id}`)
      .then(function (response) {
        return response.json(); // 'this' is undefined here
      });
  }

  // ✅ Arrow function preserves 'this'
  fetchUser(id: string) {
    return fetch(`${this.baseUrl}/users/${id}`)
      .then((response) => response.json()); // arrow — 'this' is ApiClient
  }
}
```

## Related

- See also: [JavaScript → Prototypes & Classes](#/codex/javascript-prototypes-and-classes) for class field arrow functions and their memory cost.
- See also: [JavaScript → Promises & async/await](#/codex/javascript-promises-and-async-await) for cleaner alternatives to method chaining.
