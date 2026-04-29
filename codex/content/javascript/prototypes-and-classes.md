# Prototypes & Classes

JavaScript's class syntax is syntactic sugar over prototypal inheritance. Understanding the underlying prototype chain explains behaviour that class syntax obscures — particularly around method sharing, instance properties, and the cost of subclassing.

## The prototype chain

Every object has an internal `[[Prototype]]` link. When you access a property, the engine walks the chain until it finds the property or reaches `null`:

```ts
const animal = {
  breathe() { return 'breathing'; },
};

const dog = Object.create(animal);
dog.bark = function () { return 'woof'; };

dog.breathe(); // 'breathing' — found on animal via [[Prototype]]
dog.bark();    // 'woof' — found on dog directly
```

`dog.__proto__ === animal` — the prototype is a regular object, not a class or type. All instances sharing a prototype share the same method function objects (not copies).

## Class fields vs methods on the prototype

```ts
class EventEmitter {
  // ❌ Each instance gets its own copy of this function
  handleClick = () => {
    this.emit('click');
  };

  // ✅ One function on the prototype, shared by all instances
  handleFocus() {
    this.emit('focus');
  }
}
```

Class fields (`handleClick = () => {}`) are initialized in the constructor — each instance gets a new function object. Methods defined normally go on `EventEmitter.prototype` and are shared. The trade-off: arrow class fields bind `this` correctly without `.bind(this)`, which is useful for event listener callbacks that need `this`. But they cost memory proportional to instance count.

## Private fields with `#`

Private fields are enforced at the engine level, not just by convention:

```ts
class TokenStore {
  #token: string | null = null;

  setToken(token: string) {
    this.#token = token;
  }

  getAuthHeader(): string {
    if (!this.#token) throw new Error('No token set');
    return `Bearer ${this.#token}`;
  }
}

const store = new TokenStore();
store.#token; // SyntaxError — not just convention, hard language boundary
```

Private fields are not accessible via prototype chain traversal, reflection, or `Object.keys()`. They do not appear in subclasses unless explicitly exposed.

## `static` fields and the inheritance footgun

Static fields are on the class constructor, not on instances. They are inherited via the prototype chain of constructors:

```ts
class BaseModel {
  static tableName = 'base';

  static findById(id: string) {
    return db.query(`SELECT * FROM ${this.tableName} WHERE id = ?`, [id]);
  }
}

class User extends BaseModel {
  static tableName = 'users'; // shadows BaseModel.tableName
}

User.findById('abc'); // queries 'users' table — works correctly because 'this' is User
BaseModel.findById('abc'); // queries 'base' table
```

`this` in a static method refers to the class (constructor function) that the method was called on, not the class that defined it. This makes `tableName` effectively polymorphic.

## The `instanceof` trap with serialization

`instanceof` checks the prototype chain at runtime. After `JSON.parse()`, you get plain objects:

```ts
class SessionData {
  constructor(public userId: string, public expiresAt: number) {}
  isExpired() { return Date.now() > this.expiresAt; }
}

const raw = JSON.parse(storedJson); // plain object, not SessionData instance
raw instanceof SessionData;         // false
raw.isExpired();                    // TypeError — method doesn't exist on plain object
```

The fix is to use factory/hydration functions that reconstruct class instances from plain objects, or to avoid `instanceof` entirely in favour of structural type checks (`'isExpired' in raw`).

## Related

- See also: [JavaScript → this Binding](#/codex/javascript-this-binding) for how `this` resolves in methods and callbacks.
- See also: [TypeScript → Narrowing & Control Flow](#/codex/typescript-narrowing-and-control-flow) for type-safe alternatives to `instanceof`.

## Sources

- [MDN — Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN — Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [V8 blog — JavaScript class fields](https://v8.dev/features/class-fields)
