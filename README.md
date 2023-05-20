# **The **try...catch** Statement**

_-_ Up to this point, thrown `errors` have caused our program to stop running. But, we have the ability to anticipate and handle these `errors` by writing code to address the `error` and allow our program to continue running.

_-_ In **JavaScript**, we use **try...catch** statement to anticipate and handle `errors`. Take a look at example below:

```
try {
  throw error('This error will get caught');
} catch (e) {
  console.log(e);
}
// Prints: This error will get caught
 
console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'
```

*Now, let’s break down what happened in the **try...catch** statement above:*


_-_ We have code that follows `try` inside curly braces `{}` known as the `try` block.

_-_ Inside the `try` block we **insert** code that we anticipate might `throw` an `error`.

_-_ Since we want to see what happens if an `error` is thrown in the `try` block, we `throw` an `error` with the message `'This error will get caught'`.

_-_ Following the `try` block is the `catch` statement which accepts the thrown `error` from the `try` block . The `e` represents the thrown `error`.

_-_ The curly braces that follow `catch(e)` is known as the `catch` block and contains code that executes to handle the `error`.

_-_ Since the `error` is caught, our `console.log()` after the **try...catch** statement prints 'The thrown `error` that was caught in the **try...catch** statement!'.

_-_ Generally speaking, in a **try...catch** statement, we evaluate code in the `try` block and if the code `throws` an `error`, the code inside the `catch` block will handle the `error` for us. The provided example just showcases how a **try...catch** statement works because we know an `error` is being thrown. Let’s first practice writing our own **try...catch** statement and afterwards we will go over a more practical usage of **try...catch**.

# **Instructions**

#### **1. Create a try...catch statement that doesn’t have any code in the try block or the catch block. The catch statement will have accept e for the Error Object**

**Hint:**
The syntax for a **try...catch** statement:
```
try {
  // try block code
} catch (e) {
  // catch block code
}
```

**2. In the try block, throw an error using the error() function and pass into error() a string containing a message of our choice!**

**Hint:**

_-_ To `throw` an `error`, use the throw keyword and the `error` function:

```
throw `error`('`error` message goes here');
```

_-_ Make sure we’re adding the code within the `try` block:

```
try {
  throw `error`('`error` message goes here');
} catch (e) {
  // catch block code
}
```

#### **3. Inside the catch block, log the error to the console**

**Hint:**

_-_ To `log` the `error` to the `console`, inside our `catch` block add a `console.log()` statement.

```
try {
  throw `error`('`error` message goes here');
} catch (e) {
  console.log(e);
}
```
