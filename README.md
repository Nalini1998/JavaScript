# **The Node `setTimeout()` Function**    

Knowing ***how to construct a `promise`*** is useful, but most of the time, knowing how to consume, or use, `promises` will be key. Rather than constructing `promises`, you’ll be handling `promise` objects returned to we as the result of an asynchronous operation. These `promises` will start off pending but settle eventually.

Moving forward, we’ll be simulating this by providing we with functions that return `promises` which settle after some time. 
<details>
<summary>
To accomplish this, we’ll be using `setTimeout()`. `setTimeout()` is a `Node API` _(a comparable API is provided by web browsers)_ that uses callback functions to schedule tasks to be performed after a delay. `setTimeout()` has two parameters: a callback function and a delay in ***milliseconds***. </summary>

```
const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};
 
setTimeout(delayedHello, 2000);
```
</details>


Here, we invoke `setTimeout()` with the callback function `delayedHello()` and 2000. In at least two seconds `delayedHello()` will be invoked. But why is it “at least” two seconds and not exactly two seconds?

This delay is performed asynchronously—the rest of our program won’t stop executing during the delay. Asynchronous JavaScript uses something called the *event-loop*. 

After two seconds, `delayedHello()` is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. 

Next, any code in front of it in the line will run. This means it might be more than two seconds before `delayedHello()` is actually executed.
<details>
<summary>
Let’s look at how we’ll be using `setTimeout()` to construct asynchronous `promises`:
</summary>

```
const returnPromiseFunction = () => {
  return new `promise`((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};
 
const prom = returnPromiseFunction();
```
</details>

In the example code, we invoked `returnPromiseFunction()` which returned a `promise`. We assigned that `promise` to the variable `prom`. Similar to the _asynchronous_ `promises` we may encounter in production, prom will initially have a status of pending.


# **Instructions**
<details>
 
**<summary> 1. Create a function, usingSTO() have no parameters**

Inside the function body, it should print a string to the `console`. This can be any string we want _(as long as it’s not either `"This is the first line of synchronous code."` or `"This is the last line of synchronous code."`)._ </summary>

**Hint:**
We can print any string we want!

```
const ourFunction = () => {
  console.log('Yay! Coding is so fun!!');
};
```
</details>

<details>

**<summary>2. Now, let’s invoke the setTimeout() function** 

Remember, `setTimeout()` has two parameters. Invoke `setTimeout()` with our `usingSTO()` function as the first argument and a number between 0 and 3000 as the second argument.
</summary>

**Hint:**
We should pass in `usingSTO()` without invoking it.
`setTimeout(myCallbackFunction, 2000)`

</details>

<details>

**<summary>3. Type node app.js in the terminal and hit enter**

Type `node app.js` in the **terminal** and hit **enter**
</summary>
_-_ See if the program’s output in the **terminal** lines up with what we expected.

</details>