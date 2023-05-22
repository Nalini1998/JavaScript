# **Chaining Multiple `promises`**

One common pattern we’ll see with **asynchronous** programming is multiple operations which depend on each other to execute or that must be executed in a certain `order`. We might make one request to a database and use the data returned to us to make another request and so on!

_Let’s illustrate this with another cleaning example, washing clothes:_

_-_ We take our dirty clothes and put them in the washing machine. If the clothes are cleaned, then we’ll want to put them in the dryer. After the dryer runs, if the clothes are dry, then we can fold them and put them away.

_-_ This process of chaining `promises` together is called composition. `promises` are designed with composition in mind! Here’s a simple `promise` chain in code:


```
firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```

***Let’s break down what’s happening in the example:***

- We invoke a function `firstPromiseFunction()` which returns a `promise`;

- We invoke `.then()` with an anonymous function as the _success handler_;

- Inside the _success handler_ we return a new `promise` - the result of invoking a second function, `secondPromiseFunction()` with the first promise’s resolved value;

- We invoke a second `.then()` to handle the logic for the second `promise` settling;

- Inside that `.then()`, we have a _success handler_ which will `log` the second promise’s resolved value to the `console`;

- In order for our chain to work properly, we had to return the `promise` `secondPromiseFunction(firstResolveVal)`. This ensured that the return value of the **first** `.then()` was our **second** `promise` rather than the default return of a new `promise` with the same settled value as the initial.


***Let’s write some promise chains!***


# **Instructions**

#### **1. We require in three functions: `checkInventory()`, `processPayment()`, `shipOrder()`. These functions each return a `promise`**

> `checkInventory()` expects an order argument and returns a `promise`. If there are enough items in stock to fill the `order`, the `promise` will `resolve` to an array. The first element in the resolved value array will be the same `order` and the second element will be the total cost of the `order` as a number.

> `processPayment()` expects an array argument with the `order` as the first element and the purchase total as the second. This function returns a `promise`. If there is a large enough balance on the giftcard associated with the `order`, it will `resolve` to an array. The first element in the resolved value array will be the same `order` and the second element will be a tracking number.

> `shipOrder()` expects an array argument with the `order` as the first element and a tracking number as the second. It returns a `promise` which resolves to a string confirming the order has shipped.


#### **2. Invoked `checkInventory()` with order & chained a `.then()` function to it**


> We set up a `promise` chain but it’s missing a couple important lines of code to make it function properly.

> We invoked `checkInventory()` with `order` and chained a `.then()` function to it. This `.then()` has an anonymous function as its _success handler_, but it’s missing a `return` statement.

> The _success handler_ should `return` a `processPayment()` `promise`.

> **Hint:**
The `processPayment()` function should be invoked with `resolvedValueArray`, the anonymous function’s parameter. This will return the expected `promise` to the next step in the chain.
If we had used a named function instead, here’s how it might look:

```
const myFirstSuccessHandler = (`resolvedValueArray`) => {
  return processPayment(`resolvedValueArray`);
};
```

#### **3. We have a second `.then()` function on the chain**

> This `.then()` also has an anonymous function as its _success handler_ and is missing a return statement.

> The _success handler_ should return a `shipOrder()` `promise`.

>**Hint:**
The `shipOrder()` function should be invoked with `resolvedValueArray`, the anonymous function’s parameter. 

>This will return the expected `promise` to the next step in the chain. 
If we had used a named function instead, here’s how it might look:

```
const mySecondSuccessHandler = (resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
};
```

#### **4. Type node app.js in the terminal and hit enter**