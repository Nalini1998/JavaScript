# **Handling with `try...catch`**

_-_ In the previous article we caught an `error` that we threw, but we can also use a `try...catch` statement to handle built-in `errors` that are thrown by the **JavaScript** engine that is reading and evaluating our code.

```
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
// Prints: `TypeError`: Assignment to constant variable.
```

_-_ In the example above, we didn’t use the `throw` keyword to `throw` a custom `error`, rather we tried to re-assign a `const` variable and a `TypeError` was thrown. Then, in our `catch` block, we logged the `error` to the `console`.

_-_ Using a `try...catch` statement for built-in **JavaScript** `errors` is really beneficial when we need to use data from an **external source** that’s not written directly in our program.

_-_ Let’s say we expect to grab an *array* from a database but the information we get back is a string. In our program, we could have a *function* that only works on *arrays*. If that *function* was called with a string instead of an *array* we would get an `error` and our program would **stop running**!

_*_ *However, we can use a `try...catch` statement to handle the thrown `error` for us which allows our program to continue running and we receive a message knowing what went wrong! Let’s see how we can implement this in our code.*

# **Instructions**

#### ***1. In main.js there is a function capAllElements() that takes an array of elements and capitalizes each element.***


Currently, it’s written in a way the *function* will execute regardless of what argument is passed in but if the argument isn’t an *array*, an `error` is thrown and our program stops running. **Run** your code to see what `error` shows up in the `console`.

Let’s handle that `error`:

_-_ Put the existing `arr.forEach(...)` code in a `try` block.
_-_ Add a `catch` statement after the `try` block and inside the `catch` block `log` the `error` to the `console`.

**Hint:**

_-_ Inside the *function body* of `capAllElements()`, wrap the `arr.forEach(...)` in a `try...catch` statement:

```
function capAllElements(arr){
  try {
    arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
    }); 
  } catch (e) {
  }
}
```

_-_ Then add the `console.log()` statement inside the `catch` block:

```
function capAllElements(arr){
  try {
    arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
    }); 
  } catch (e) {
    console.log(e);
  }
}
```