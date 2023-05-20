# **Runtime `Errors`**

`Errors` contain useful messages that tell us why our program isn’t working or why the `Error` was thrown. When an `Error` is thrown, our program stops running and the console displays the `Error` `message` in **red** text like so:


When we execute code and a line of code `throws` an `Error`, that `Error` is referred to as a `runtime Error`. In **JavaScript**, there are built-in `Error` _objects_ that have a `name` and `message` property which tell us what went wrong. Examples of built-in `runtime Errors` include:

``ReferenceError``: when a variable or function cannot be found.
`TypeError`: when a value is not a valid type, see the example below:
```
const reminder = 'Reduce, Reuse, Recycle';
reminder = 'Save the world';
// TypeError: Assignment to constant variable.
console.log('This will never be printed!');
```
In the example above, when we `try` to reassign a constant variable reminder, the `TypeError` is thrown. Code that is written after a thrown `runtime Error` will not be evaluated, so the ``console.log()`` statement will not be evaluated.

Let’s see for ourselves what happens when a `runtime Error` is thrown.

# **Instructions**

**1.** In `main.js`, we have a function `throwError()` that will `throw` a `ReferenceError`. There are also two `console.log()` statements, one at the top of the file and one at the bottom.

Call `throwError()` below the `comment` that indicates to call it. Observe what code runs and what code doesn’t.

_*_ **Hint:**
Make sure we call `throwError()` before the second `console.log()` statement. If done correctly, the first `console.log()` statement will print while the second `console.log()` statement won’t.