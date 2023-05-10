# **THE STATE HOOK**
## **Objects in State**

We can also use `state` with `objects`. When we work with a `set` of related variables, it can be very helpful to _group_ them into an _object_. Let’s look at an example of this in action.
```
export default function Login() {
  const [formState, setFormState] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };
 
  return (
    <form>
      <input
        value={formState.firstName}
        onChange={handleChange}
        name="firstName"
        type="text"
      />
      <input
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
    </form>
  );
}
```
### **A few things to notice:**

We use a `state` `setter` callback function to _update_ a `state` based on the `previous` value.
The spread _**syntax**_ is the same for `objects` as for `arrays`: `{ ...oldObject, newKey: newValue }.`

We reuse our `event` handler across `multiple` inputs by using the input tag’s `name` attribute to `identify` which input the change `event` came from.
Once again, when updating the `state` with `setFormState()` inside a function component, we do not `modify` the same `object`. We must copy over the values from the `previous` `object` when setting the `next` value of a `state`. Thankfully, the spread _**syntax**_ makes this super easy to do!

Anytime one of the `input` values is updated, the `handleChange()` function will be called. Inside this `event` handler, we use `object` destructuring to _unpack_ the `target` property from our `event` `object`, then we use `object` destructuring again to _unpack_ the `name` and `value` properties from the `target` `object`.

Inside our `state` `setter` callback function, we wrap our _curly brackets_ in parentheses like so:

```setFormState((prev) => ({ ...prev }))```

This tells `JavaScript` that our _curly brackets_ refer to a `new object` to be returned. We use `...`, the spread operator, to fill in the corresponding `fields` from our `previous state`. Finally, we overwrite the appropriate `key` with its `updated value`.

I noticed the _square brackets_ around the `name`? This `Computed Property Name` allows us to use the string value `stored` by the name variable as a `property key`.

# **Instructions**

#### **1/ We’ll use objects with states to build an input form.**

The `local state` variable `profile` and `state setter` function `setProfile` are responsible for keeping track of the `input` values from our `users`. In our `JSX`, we are looking up properties `stored` in the `profile` `object`. This throws an `error` at our `first` `render` because we are _attempting to get the value of a property from an object that has not been defined yet._
To fix this, initialize `profile` as an _empty_ `object`.

**Hint:**
To initialize a `state`, we call the `useState()` function with the _value_ that we want `React` to use as the `state` during the `first render`.
Pass `{}` as an argument to our `useState()` function call.

#### **2/ Add the onChange event listener to our JSX tags**

We should now see the `form`rendered, but nothing will happen when we type in the `input` boxes. Our form does not `re-render` to show the `keystrokes` yet.

To fix this, _**add**_ the `onChange` `event` listener to our `JSX` tags to call `handleChange()` whenever a `user` types in an `input` field. This way, we can determine what happens when the user changes the `input` by typing in the `form`.

**Hint:**
Make sure to _**add**_ the `onChange` `event` listener as an attribute of each of our `<input>` tags. Use each of these `event` listeners to call the same `event` handler, `handleChange()`.

#### **3/ Use object destructuring to initialize name and value in a more concise way**

Let’s make our `handleChange()` function a bit easier to read. Use `object` destructuring to initialize `name` and `value` in a more concise way.

**Hint:**
_**Replace**_ the `current name` and `value`declarations with the destructuring `syntax` like the following:
```
const {name, value} = target;
```
#### **4/ Use prevProfile as the argument for our state setter callback function**

Each time that we call `setProfile()` in our `event` handler, we give `profile` the `value` of a `new object` with the `name`and `value` of the `input` that most recently changed, but we lose the values that were `stored` for `inputs` with any other `name`.

Use the spread operator to fix this _bug_. We want to _**copy**_ over all of the `values` from our `previous` `profile` `object` whenever we call our `state` `setter` function. Use `prevProfile` as the argument for our `state` `setter` callback function.

**Hint:**
The `name` of the _first argument_of the callback function should be `prevProfile`.
Use the spread operator to _**copy**_ over the `values` from `prevProfile` into our `new` `state` `object` like the following:

```
setProfile((prevProfile) => ({
  // use the spread operator here
  [name]: value
}));
```
#### **5. Add an event listener to the 'form' tag to call our handleSubmit() function when the user submits the form**

**Hint:**
Much like how we use the `onChange` `event` listener to listen for changes in our `<input>` elements, we use `onSubmit` to listen for `submit` `events` in our `<form>` elements.