# **The throw Keyword**

_-_ Creating an `error` doesn’t cause our program to **stop** — remember, an `error` must be thrown for it to halt the program.

_-_ To `throw` an `error` in JavaScript, we use the `throw` keyword like so:

```
throw error('Something wrong happened');
// error: Something wrong happened
```

_-_ When we use the `throw` keyword, the `error` is thrown and code after the `throw` statement will not execute. Take for example:
```
throw error('Something wrong happened');
// error: Something wrong happened
 
console.log('This will never run');
```
_-_ After `throw `error`('Something wrong happened');` is executed and the ``error`` _object_ is thrown, the `console.log()` statement will not run _(just like when a built-in **JavaScript error** was thrown!)_.

_-_ In the next article we will cover how to handle an ``error`` so that the rest of our code can run!

# **Instructions**

#### **Use the `throw` keyword to `throw` an `error` with the message 'Username or password does not match'**

After we clear this checkpoint, should try adding some code after our `throw` statement. Also, try to `throw` a new `error` and other data types to see what happens!

**Hint:**
To use the `throw` keyword, use the following syntax:

```
throw error('Helpful message to pinpoint what went wrong!');
```
Or
```
throw new error('Helpful message to pinpoint what went wrong!');
```