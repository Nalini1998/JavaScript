# THE STATE HOOK
### Set From Previous State

In the previous exercise, we learned to update the `state` by passing it a `new value` like this:
`setState(newStateValue);`

However, `React` `state` updates are `asynchronous`. This means that there are some scenarios where portions of my code will run before the state is finished updating.

This is a good and a bad thing! Grouping the `state` updates together can improve performance in my `application`, but it can result in outdated `state` values. Consequently, it is best practice to `update` a `state` with a **callback function**, preventing accidental outdated values.

Let’s take a look at the following `code` to see how it’s done:
```
import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  const increment = () => setCount(prevCount => prevCount + 1);
 
  return (
    <div>
      <p>Wow, I've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}
```

When the `button` is pressed, the `increment()` event handler is called. Inside this function, we use our `setCount()` `state` `setter` with a `callback` function.

Because the `next value` of `count` depends on the `previous` value of `count`, we pass a `callback` function as the _argument_ for `setCount()` instead of a `value` _(as we’ve done in previous exercises)_.
`setCount(prevCount => prevCount + 1)`

When our `state` setter calls the `callback` function, this `state setter` callback function takes our `previous` `count`as an argument. The `value` returned by this `state` `setter` `callback` function is used as the `next value` of `count` _(in this case, prevCount + 1)_.

We can also just call `setCount(count +1)` and it would work the same in this _example_, but for reasons that are out of `scope` for this lesson, it is safer to use the `callback` method.

# Instructions

#### **1**. Let’s get some practice by creating a navigation bar for a quiz. The navigation bar will let us go back or go to the _next question_ in a **quiz**.

First, define a `goBack()` event handler function. It should allow us to navigate to the `previous` **quiz question**. Because our `next value` of `state` depends on the `previous state` value, this function should call the `state` setter with a `callback` function. Our `state` setter `callback` function needs to compute the `next` value of `questionIndex` using an argument named `prevQuestionIndex`.

**Hint:**

To _**update**_ the `state` with a `callback` function, see the example:
```
const increment = () => setCount(prevCount => prevCount + 1);
```

#### **2**. Next, add an `event` listener to the `"Go Back"` `button` that will `call` our newly defined `event` handler.

**Hint:**

To _**add**_ an `event` listener when a `button` is clicked, add an `onClick` `event` listener with the `event` handler function:
```
<button onClick={increment}>Click here!</button>
```

#### **3**. If we can go back to a `previous` _question_, we should also be able to go to the `next` _question_.

Define a `goToNext()` `event` handler. Because our next value of `state` depends on the `previous` `state` value, this function should call the `state` setter with a `callback` function. Our `state` setter `callback` function needs to compute the next value of `questionIndex` using an argument named `prevQuestionIndex`.

**Hint:**

To update the state with a callback function, see the example:
```
  const increment = () => setCount(prevCount => prevCount + 1);
```

#### **4**. Add an event listener to the “Next Question” button that will call our newly defined event handler.

**Hint:**

To add an `event` listener when a `button` is clicked, _**add**_ an `onClick` event listener with the event handler function:
```
<button onClick={increment}>Click here!</button>
```

#### 5. Lastly, add an onFirstQuestion variable with a boolean value, then use that value to toggle the disabled attribute of the “Go Back” button on and off.

**Hint:**
JavaScript `arrays` use `zero-based` indexing, so we can determine whether `onFirstQuestion` has a `value` of `true` or `false` by checking if `questionIndex` currently has a `value` of `0`!

To use this `boolean` value, _**add**_ the following attribute to the **"Go Back"** `button`:

 `disabled={onFirstQuestion}`