# THE STATE HOOK: Initialize State

Like how I used the State Hook to manage a variable with string values, we can use the State Hook to manage the value of any primitive data type and even data collections like arrays and objects!

Have a look at the following function component. What data type does this state variable hold?
```
import React, { useState } from 'react';
 
function ToggleLoading() {
  const [isLoading, setIsLoading] = useState();
 
  return (
    <div>
      <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
      <button onClick={() => setIsLoading(true)}>
        Turn Loading On
      </button>
      <button onClick={() => setIsLoading(false)}>
        Turn Loading Off
      </button>
    </div>
  );
}
```
The `ToggleLoading()` function component above uses the simplest of all data types, a `boolean`. Booleans are frequently used in `React` applications to represent whether data has loaded or not. In the example above, we see that **true** and **false** values are passed to the state `setter`, `setIsLoading()`.

This code works just fine as is, but what if we want our component to start off with `isLoading` set to true?

To initialize our state with any value we want, we simply pass the initial value as an argument to the `useState()` function call.

`const [isLoading, setIsLoading] = useState(true);`

There are three ways in which this code affects our component:

- During the **first** render, the `initial state` argument is used.
When the `state` `setter` is called, `React` ignores the initial state argument and uses the `new` value.
When the component `re-renders` for any other reason, `React` continues to use the same value from the `prev` render.
If we don’t pass an initial value when calling `useState()`, the current value of the state during the first `render` will be `undefined`. Often, this is perfectly fine for the computers running the code, but it can be unclear to the humans reading our code. So, we prefer to explicitly initialize our state. If we don’t have the value needed during the first `render`, we can explicitly pass `null` instead of passively leaving the value as `undefined`.

**Instructions**
1. Now, our product owner wants the app to start off with the color `“Tomato”` when it _first_ shows up on the screen.

Modify our current `ColorPicker()` component to initialize the state so that `“Tomato”` is the selected color for our component’s `first` render.

**Hint:**
Pass the string `'Tomato'` as an argument to the `useState()` function to use this as the initial value of `color`:

`const [color, setColor] = useState(initialStateValue);`