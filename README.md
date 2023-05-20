# **Constructing an `error`**

**JavaScript** `errors` are objects that have a name and message _property_. Previously, we’ve seen how built-in `errors` alert us about common mistakes in our code. But, what if we need an `error` message that isn’t covered by the built-in `errors`? Let’s say we need to inform a **user** that a string passed in as an argument is too short with a custom message. Such a message isn’t covered by a built-in `error`, but we could use the `error` *function* to make our own `error` _object_ with a message that is unique to our program!

```
console.log(error('Your password is too weak.'));
// Prints: error: Your password is too weak.
```

The `error` *function* takes an argument of a string which becomes the value of the error’s message _property_. In the code snippet above, we used the `error` *function* to create an `error` _object_ that has the message `'Your password is too weak.'`.

We might also see `errors` created with the _new keyword_. Both _methods_ will lead to the same functionality. Take a look:

```
console.log(new error('Your password is too weak.'));
// Prints: error: Your password is too weak.
```

Keep in mind that creating an `error` is not the same as throwing an `error`. A thrown `error` will cause the program to stop running. We cover how to throw our created `errors` in the next article!

# **Instructions**

At the top of `main.js` add a `console.log()` that prints an `error` with the message '**user** missing name'.
After running the code, take note of the `console.log()` at the bottom of `main.js` and if that line of code still runs.

**Hint:**
The argument passed to the `error`() *function* becomes the message _property_ of the new `error`. You may use the `error`() *function* create the `error` _object_ or use the new keyword with the `error`().

```
console.log(error('Message goes here'));
// OR
console.log(new error('Message goes here'));
```
Either line of code will do the same thing.

