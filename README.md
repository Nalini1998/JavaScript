# **Review**

Awesome job! `Promises` are a difficult concept even for experienced developers, so pat ourself on the back. We’ve learned a ton about **asynchronous JavaScript** and `Promises`. 

***Let’s review:***

> `Promises` are JavaScript objects that represent the eventual result of an asynchronous operation.

> `Promises` can be in one of three states: pending, resolved, or rejected.
A `Promise` is settled if it is either resolved or rejected.

> We construct a `Promise` by using the new keyword and passing an executor function to the `Promise` constructor method.

> `setTimeout()` is a `Node` function which delays the execution of a callback function using the _event-loop_.

> We use `.then()` with a **success** handler callback containing the logic for what should happen if a `Promise` resolves.

> We use `.catch()` with a **failure** handler callback containing the logic for what should happen if a `Promise` rejects.

> `Promise` composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple `.then()`'s and `.catch()`'s.

> To use `Promise` composition correctly, we have to remember to return `Promises` constructed within a `.then()`.

> We should chain multiple `Promises` rather than nesting them.

> To take advantage of **concurrency**, we can use `Promise.all()`.
