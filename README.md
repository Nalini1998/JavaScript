# **Review**

We can now build stateful function components using the `useState` **`React`** **`Hook`**!

With **`React`**, we feed  `static` and `dynamic data` models to `JSX` to `render` a _view to the screen_.
**Hooks** are used to `"hook into"` the internal component `state` for managing `dynamic data` in function components.
We employ the **_State Hook_** using the `code` below. 

The `currentState` references the _current value_ of the `state` and `initialState` `initializes` the `value` of the `state` for the component’s `first render`.
```
const [currentState, stateSetter] = useState( initialState );
```
`State setters` can be called in `event` handlers.
We can define simple `event` handlers inline in our `JSX`and complex `event` handlers outside of our `JSX`.
We use a `state setter` callback function when our _next value_ depends on our _previous value_.

We use `arrays` and `objects` to organize and manage related _data_ that tend to change together.
Use the spread _**syntax**_ on collections of dynamic data to _copy_ the _**previous state**_ into the _**next state**_ like so: `setArrayState((prev) => [ ...prev ]) and setObjectState((prev) => ({ ...prev }))`.

It’s best practice to have multiple, simpler `states` instead of having one complex _state object_.

Take a look at this `task list` program from the beginning of this lesson. Read through `AppFunction.js` again and see how much we can understand!

