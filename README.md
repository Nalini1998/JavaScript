# **Using catch() with Promises**

One way to write cleaner code is to follow a principle called separation of concerns. Separation of concerns means organizing code into distinct sections each handling a specific task. It enables us to quickly navigate our code and know where to look if something isn’t working.

Remember, `.then()` will `return` a `promise` with the same settled value as the `promise` it was called on if no appropriate _handler_ was provided. This implementation allows us to separate our _resolved logic_ from our _rejected logic_. 

Instead of passing both handlers into one `.then()`, we can chain a second `.then()` with a _failure handler_ to a first `.then()` with a _success handler_ and both cases will be handled.

```
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });
```

Since **JavaScript** doesn’t mind **whitespace**, we follow a common convention of putting each part of this chain on a new line to make it easier to read. To create even more readable code, we can use a different `promise` function: `.catch()`.

The `.catch()` function takes only one argument, `onRejected`. In the case of a rejected `promise`, this _failure handler_ will be invoked with the reason for rejection. Using `.catch()` accomplishes the same thing as using a `.then()` with only a _failure handler_.

_Let’s look at an example using .catch():_

```
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

_Let’s break down what’s happening in the example code:_

> `prom` is a `promise` which randomly either `resolves` with `'Yay!'` or `rejects` with `'Ohhh noooo!'`.

> We pass a _success handler_ to `.then()` and a _failure handler_ to `.catch()`.

> If the `promise` `resolves`, `.then()`'s _success handler_ will be invoked with `'Yay!'`.

> If the `promise` `rejects`, `.then()` will `return` a `promise` with the same rejection reason as the original `promise` and `.catch()`'s _failure handler_ will be invoked with that rejection reason.

_Let’s practice writing .catch() functions:_

# **Instructions**

#### **1. Invoke the checkInventory() function with the order**

> We’re going to refactor the functionality of the previous exercise but this time we’ll use .catch()! 

> First invoke the checkInventory() function with the order. Remember, this function will return a promise.


#### **2. Add .then() to the promise and pass in handleSuccess() handler**


> **Hint:**
Remember not to invoke the handleSuccess() when you pass it in as an argument to .then().


#### **3. Add .catch() to the promise and pass in handleFailure() handler**

>**Hint:**

> In the previous exercise, we passed `handleFailure()` as a second argument to `.then()`. 

>In this exercise we’ll chain a `catch()` function and pass `handleFailure()` in as an argument to `catch()`. Remember not to invoke the `handleFailure()` when we pass it in.

#### **4. Let’s make sure our code has the expected results**
> We set our `inventory` of `sunglasses` to **0**, so the order shouldn’t go through. 

> Type node `app.js` in the `terminal` and hit `enter`.
