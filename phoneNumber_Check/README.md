# THE STATE HOOK: 
### Use State Setter Outside of JSX

Let’s see an example of managing the changing value of a string as a user types into `a` `text` `input` field:
```
import React, { useState } from 'react';
 
export default function EmailTextInput() {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    const updatedEmail = event.target.value;
    setEmail(updatedEmail);
  }
 
  return (
    <input value={email} onChange={handleChange} />
  );
}
```
Here’s a breakdown of how the above code works:

- We use array destructuring to `create` our `local` `state` variable `email` and our `local` `setter` function `setEmail()`.
- The local variable `email` is assigned the `current state value` at `index 0` from the `array` returned by `useState()`.
The local variable `setEmail()` is assigned a reference to the state `setter` function at `index 1` from the `array` returned by `useState()`.
It’s a convention to `name` the `setter` variable using the `current state` variable (in this example, `email`) with `“set”` prepended.
The `JSX` input tag has an `event` `listener` called `onChange`. This event listener calls an `event handler` each time the user types something in this element. In the example above, our event handler is defined inside of the definition for our function component, but outside of our `JSX`. Earlier, we wrote our event handlers right in our `JSX`. Those inline event handlers work perfectly fine, but when we want to do something more interesting than just calling the state `setter` with a `static` `value`, it’s a good practice to `separate` that `logic` from our `JSX`. This separation of concerns makes our code easier to **read**, **test**, and **modify**.

It’s common in `React` code to simplify this:
```
const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}
```
to this:
```
const handleChange = (event) => setEmail(event.target.value);
or, using object restructuring, this:

const handleChange = ({target}) => setEmail(target.value);
```

All three code `snippets` above behave the same way, so there really isn’t a right and wrong between these different code snippets. We’ll use the last, most concise version moving forward.

# Instructions

1/ Let’s use the `State Hook` to make our program only accept numeric input since we want a `phone number` from the `user`.

First, make sure we can use the `State Hook` by importing `useState` from the `React library`.

**Hint:**
We can import the `State Hook` from the `React library` using the destructuring **syntax** like so:

`import React, {useState} from 'react';`

2. Declare and assign values for our `current state` and `state setter` with `useState()`. Use `phone` as the `name` of our `current state` variable.

Make sure to give the `phone state` variable an initial `value` of an `empty` string!

**Hint:**
A convention used to help other developers understand our code is to give a descriptive variable name for the `current state` and then `prefix` that variable `name` with the word `"set"` for our `state setter`. This convention makes it crystal clear which functions are responsible for updating which values!

Be sure to:

`Name` our `current state` variable: `phone`.
`Name` our `state setter` function: `setPhone()`.
Use `array` destructuring to assign these `variables` the _values returned_ by calling `useState()`.
`Initialize state` with the `value` of an empty string like so: `useState('')`.

3. Let’s specify the value of our `JSX` input tag by adding a value attribute and setting it to the `value` of our `phone state` variable.

We also want to detect any changes to the input tag while the user types so add an `onChange` event listener and assign it the `handleChange` function.

**Hint:**
We want to give our `input` tag the following attributes:
```
<input value={currentState} onChange={eventHandler} id='phone-input' />
In the above code:
```
Our `currentState` is `phone`.
Our `event handler` is `handleChange` (not our state setter, setPhone).

4. Lastly, complete the `handleChange()` function. This function checks for the validity of the `input` value the `user` is `typing`. If the input is `numeric`, it should `update` the `state` variable through the `setter` function.

In the `if-statement` of the `handleChange()` function, update the state using the state setter function `setPhone()` and set it to the new value `newPhone`.

**Hint:**
We want our event handler to follow this format:
```
const handleChange = ({ target })=> {
  const newPhone = target.value;
  const isValid = validPhoneNumber.test(newPhone);
  if (isValid) {
    stateSetter(nextValueToUseForState);
  }
  // just ignore the event, when new value is invalid
};
```
In the above code:

Our `state setter` is `setPhone()`.
Our next `value` to use for the `state` is stored by our `newPhone` variable.