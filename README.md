# **Using promise.all()**

When done correctly, `promise` composition is a great way to handle situations where _asynchronous_ operations depend on each other or execution order matters. 

_What if we’re dealing with ***multiple promises***, but we don’t need to care about the order? Let’s think in terms of cleaning again._

> For us to consider our house clean, we need our clothes to dry, our trash bins emptied, and the dishwasher to run. We need all of these tasks to complete but not in any particular order. Furthermore, since they’re all getting done asynchronously, they should really all be happening at the same time!

To maximize efficiency we should use `concurrency`, **multiple asynchronous** operations happening together. With `promises`, we can do this with the function `promise.all()`.

`promise.all()` accepts an array of `promises` as its argument and returns a single `promise`. That single `promise` will settle in one of two ways:

If every `promise` in the argument array `resolves, the single `promise` returned from `promise`.all() will `resolve` with an array containing the `resolve` value from each `promise` in the argument array.

If any `promise` from the argument array `rejects`, the single `promise` returned from `promise.all()` will immediately `reject` with the reason that `promise` rejected. This behavior is sometimes referred to as failing fast.

***Let’s look at a code example:***

```
let myPromises = `promise`.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
 
myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
```

***Let’s break down what’s happening:***

- We declare `myPromises` assigned to invoking `promise.all()`;

- We invoke `promise.all()` with an array of three `promises` - the returned values from functions;

- We invoke `.then()` with a _success handler_ which will print the array of resolved values if each `promise` `resolves` successfully;

- We invoke `.catch()` with a _failure handler_ which will print the first rejection message if any `promise` rejects.

# **Instructions**

#### **1. We require in one function: checkAvailability().**

Our business is doing so well that we’re running low on inventory. We want to reach out to some distributors to see if they have the items we need. We only want to make one restocking order, so we’ll only want to place the order if all of the items are available.

We require in one function: `checkAvailability()`.

> `checkAvailability()` expects two string arguments: an `item` and a `distributor`. 

> It returns a `promise`. The function simulates checking that the given `distributor` has a given `item`. 80% of the time it will `resolve` the `promise` with the `item`, and 20% of the time it will `reject` the `promise` with an **error message** stating that the `item` isn’t available.

We provided two functions which will serve as success and failure handlers.

_You can also look at the `library.js` file to see how these functions work._ 


#### **2. Create three variables each assigned to a separate promise:**


> `checkSunglasses` should be assigned the value returned from invoking `checkAvailability()` with `'sunglasses'` as its first argument and `'Favorite Supply Co.'` as its second argument.

> `checkPants` should be assigned the value returned from invoking `checkAvailability()` with `'pants'` as its first argument and `'Favorite Supply Co.'` as its second argument.

> `checkBags` should be assigned the value returned from invoking `checkAvailability()` with `'bags'` as its first argument and `'Favorite Supply Co.'` as its second argument.


#### **3. Invoke promise.all() with an array containing checkSunglasses, checkPants, and checkBags.**


> **Hint:**
It can sometimes be helpful to break things into additional steps. If we want, we could create a variable to hold our array of `promises`, and then pass that into `promise.all()`:


```
const firstPromise = returnsPromOne();
const secondPromise =  returnsPromTwo();
const thirdPromise =  returnsPromThree();
 
const promiseArray = [firstPromise, secondPromise, thirdPromise];
 
`promise`.all(promiseArray);
```

#### **4. Chain a .then() to the `promise` returned from `promise`.all().** 
We should pass in onFulfill to serve as the success handler.

> **Hint:**
Since `promise.all()` returns a single `promise`, we’ll chain this `.then()` directly onto it similarly to this:
```
promise.all([firstPromise, secondPromise, thirdPromise])
.then((resolvedValue) => {console.log(resolvedValue)})
```

#### **5. Add a .catch() to the chain. We should pass in onReject to serve as the failure handler.**


#### **6. Type node app.js in the terminal and hit enter to execute our program.**
