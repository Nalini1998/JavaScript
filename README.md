# **Constructing a Promise Object**

Let’s construct a `promise`! To create a new `Promise` object, we use the new keyword and the `Promise` constructor method:

```
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```

The `Promise` constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an _asynchronous_ operation and dictates how the `promise` should be settled.

The executor function has two function parameters, usually referred to as the `resolve()` and `reject()` functions. The `resolve()` and `reject()` functions aren’t defined by the programmer. When the `Promise` constructor runs, JavaScript will pass its own `resolve()` and `reject()` functions into the executor function.

_-_ `resolve` is a function with one argument. Under the hood, if invoked, `resolve()` will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into `resolve()`.

_-_ `reject` is a function that takes a reason or `error` as an argument. Under the hood, if invoked, `reject()` will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into `reject()`.


_Let’s look at an example executor function in a `Promise` constructor:_

```
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```


_Let’s break down what’s happening above:_

- We declare a variable `myFirstPromise`;

- `myFirstPromise` is constructed using new `Promise()` which is the `Promise` constructor method;

+ `executorFunction()` is passed to the constructor and has two functions as parameters: `resolve` and `reject`. If someCondition evaluates to `true`, we invoke `resolve()` with the string `'I resolved!'`. If not, we invoke `reject()` with the string `'I rejected!'.`


In my example, `myFirstPromise` `resolves` or `rejects` based on a simple condition, but, in practice, `promises` settle based on the results of **asynchronous** operations. 

For example, a _database request_ may fulfill with the data from a `query` or `reject` with an `error` thrown. In this exercise, we’ll construct `promises` which `resolve` synchronously to more easily understand how they work.

# **Instructions**

**1. Create a promise representing ordering sunglasses from an online store**

We'll be writing your code in the code-editor, but we won’t be running it until the final step. To check our code for a step, we can press the `"Check Work"` button.

We’re going to create a `promise` representing ordering `sunglasses` from an online store. First, create the function, `myExecutor()`. Later on, we’ll pass this function into the `Promise` _constructor_.

`myExecutor()` should:

- Have two parameters: `resolve` and `reject`;

- Check if the `sunglasses` **property** on the `inventory` **object** has a value ***greater than zero***;

- If it does, `myExecutor()` should invoke `resolve()` with the string `'Sunglasses order processed.'`;

- If it does not, `myExecutor()` should invoke `reject()` with the string `'That item is sold out.'`;

**Hint:**
_-_ Here’s an example executor function expression:

```
const anExampleExecutor = (resolve, reject) => {
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!');
    }
}
```

**2. Create the orderSunglasses function**

-_- This function should have no parameters. It should `return` a `new promise` constructed by passing our `myExecutor()` function into the `Promise` constructor.

**Hint:**
_-_ We'll need to use the new keyword and the `Promise` constructor method to create a `new promise` object:
```
new Promise(anExecutorFunction);
```
_-_ Remember to pass the function in without invoking it and make sure our `orderSunglasses()` function returns the `promise`.

**3. Create a variable orderPromise assigned to the returned value of your orderSunglasses() function.**

**Hint:** Our code should look similar to this:

`const variableName = functionName();`

**4. At the bottom of your app.js file, log orderPromise to the console**

**5. Type node app.js in the terminal and hit enter (or return)**

_Let’s try it! Type `node app.js` in the terminal and hit `enter`_

If we’d like, we can see an alternate output by changing the `sunglasses` property in the `inventory` object to **0** and executing `app.js` from the **terminal** again.

**Hint:** 
_-_ If we type just `node` we’ll open the `Node.js REPL`:
```
$ node
>
```
_-_ We can `quit` out of this by typing in `.exit` and pressing `enter`.

**6. Output:**

```
$ node app.js
Promise { 'Sunglasses order processed.' }
```