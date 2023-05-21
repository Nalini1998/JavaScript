# **Introduction to **asynchronous** **JavaScript****

### ****asynchronous** Code in Web Development**

_-_ **JavaScript** provides us with a seamless web browsing experience using **asynchronous** code. 

_-_ **Sites** often allow us to perform different interactions like scrolling through content, clicking to create a pop-up modal, typing out text, etc. 

_-_ When a site is set up to respond to different user actions at the same time, it’s likely that this site is using **asynchronous** **JavaScript** code. Such code takes into consideration how users might use the site without blocking them _(forcing the user to wait for code from one interaction to finish before moving on to the next)_.

_-_ It is our job as developers to think about how much time it takes to complete a task and how to plan around that wait. 

_-_ **Tasks** like contacting the back-end to retrieve information, querying our database for user information, or making a `request` to an _external server_, like a 3rd party **API**, take varying amounts of time. 

_-_ Since we aren’t sure when we’ll get this information back, we can use **asynchronous** code to **run** these tasks in the background. Let’s see how **JavaScript** handles **asynchronous** code.

### ****JavaScript** and **asynchronous** Code**

_-_ **JavaScript** is a single-threaded language. This means it has a single thread that can carry out one task at a time. 

_-_ However, **JavaScript** has what is known as the event `loop`, a specific design that allows it to perform **asynchronous** tasks even while only using a single thread _(more on this later!)_.

_Let’s examine some examples of **asynchronous** code in **JavaScript**!_

### ****asynchronous** Callbacks**

_-_ One common example of asynchronicity in **JavaScript** is the use of **asynchronous** callbacks. 

_-_ This is a type of callback function that executes after a specific condition is met and runs concurrently to any other code currently running. 

*Let’s look at an example*:
```
easterEgg.addEventListener('click', () => {
  console.log('Up, Up, Down, Down, Left, Right, Left, Right, B, A');
});
```
_-_ In the code above, the function passed as the second argument of `.addEventListener()` is an **asynchronous** callback — this function doesn’t execute until the `easterEgg` is clicked.

### **setTimeout**

_-_ In addition to **asynchronous** callbacks, **JavaScript** provides a handful of built-in functions that can perform tasks **asynchronously**. One function that is commonly used is the `setTimeout()` function.

_-_ With `setTimeout()` we can write code that tells our **JavaScript** program to wait a **minimum amount of time** before executing its **callback function**. 

*Take a look at this example:*

```
setTimeout(() => {
  console.log('Delay the printing of this string, please.');
}, 1000);
```

_-_ Notice that `setTimeout()` takes 2 arguments, a callback function and a number specifying how long to wait before executing the function. 

_In the example above, the function will print `'Delay the printing of this string, please.'` after 1000 milliseconds (or 1 second) have passed._

_-_ Since `setTimeout()` is non-blocking, we can be executing multiple lines of code at the same time! . Imagine if we had a program like this:

```
setTimeout(() => {
  console.log('Delay the printing of this string, please.');
}, 1000);
console.log('Doing important stuff.');
console.log('Still doing important stuff.'); 
```

**Which outputs:**
```
'Doing important stuff.'
'Still doing important stuff.' 
'Delay the printing of this string, please.'
```
_-_ If we take a closer look at the **output**, we’ll see that our `setTimeout()`‘s callback function didn’t execute until after our other very important `console.log()` statements were executed.

_-_ In web development, this means we can write code to wait for an event to trigger all while a user goes on interacting with our app. 

_-_ One such example could be if a user goes to a shopping site and gets notified that an item is up for sale and only for a limited time. 

_-_ Our **asynchronous** code could allow the user to interact with our site and when the sale timer expires, our code will remove the sale item.

### **`setInterval()`**

_-_ Another common built-in function is `setInterval()` which also takes a callback function and a number specifying how often the callback function should execute. 

**For example:**
```
setInterval(() => {
  alert('Are you paying attention???')
}, 300000)
```
_-_ The `setInterval()` would call the `alert()` function and show a pop-up message of `'Are you paying attention???'` every 300000 milliseconds _(or 5 minutes)_. 

**Note**: Please don’t actually do this in your apps, thank you.

_-_ While we wait for our `alert` to chime in every 5 minutes, our users could still use our `app`! 

**Note**: Again, please don’t do this.

_-_ With `setInterval()`, we can programmatically create an alarm, a countdown timer, set the frequency of an animation, and so much more!

### **Review**

_-_ **asynchronous** code can really benefit ***sites*** and ***apps*** that rely on actions that take time;

_-_ Even though **JavaScript** is a single-threaded language, it can still execute **asynchronous** code using the event _loop_;

_-_ We took a look at some of the main ways **JavaScript** accomplishes asynchronicity via callbacks, `setTimeout()`, and `setInterval()`. 

_With this new knowledge, let’s continue to implement asynchronicity into our programs!_