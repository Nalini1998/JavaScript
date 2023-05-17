# **Implementing _modules_ using **ES6** Syntax**

Article on implementing **_modules_** in a browser’s **runtime** environment using **ES6** _modules_ syntax.

#### **What are _modules_?**
**_modules_** are reusable pieces of code in a _file_ that can be exported and then imported for use in another _file_. A modular program is one whose **components** can be separated, used individually, and recombined to create a _complex system_.

Consider the diagram below of an imaginary program written in a _file_ `my_app.js`:

diagram of a modular program. separate _modules_ are combined to create a complex program

`my_app.js = [math_function.js, database_logic.js, server_logic.js, date_formatting.js]`

**Note**: The words `“module”` and `“file”` are often used interchangably

Instead of having the entire program written within `my_app.js`, its `components` are broken up into separate `_modules_` that each handle a particular `task`. ***For example***, the `database_logic.js` _module_ may contain code for storing and retrieving data from a `database`. Meanwhile, the `date_formatting.js` _module_ may contain _functions_ designed to easily _convert_ `date` values from one _format_ to another _(a common headache among programmers!)_.

This modular strategy is sometimes called separation of concerns and is useful for a number of reasons. What do you think those reasons might be?

By isolating code into separate _files_, called _modules_, we can:
- find, fix, and debug code more easily;
- reuse and recycle defined logic in different parts of our application;
- keep infor private and protected from other _modules_;
- prevent pollution of the global namespace and potential naming collisions by cautiously selecting variables and behavior we load into a program.

Implementing `_modules_` in our program requires a small bit of management. In the remainder of this _article_, we will be covering:

- How to use the **ES6** `export` statement to `export` code from a _file_ - meaning its _functions_ and/or _data_ can be used by other _files/modules_.
- How to use the **ES6** `import` statement to `import` _functions_ and/or _data_ can be used by other _modules_.
- Implementations of _Modules_ in **JavaScript**: `Node.js` vs **ES6**
- Before we dive in, it should be noted that there are multiple ways of implementing _modules_ depending on the _runtime_ environment in which our code is executed. In ***JavaScript***, there are **two** _runtime_ environments and each has a preferred _module_ implementation:
- The `Node` _runtime_ environment and the `module.exports` and `require()` syntax.
- The browser’s _runtime_ environment and the **ES6** `import/export` syntax.

This ***article*** will focus on using the **ES6** `import/export` syntax in a browser’s _runtime_ environment. For more information, we can read the ***articles linked*** below.


[Implementing _modules_ In Node](https://www.codecademy.com/courses/learn-intermediate-javascript/articles/implementing-_modules_-in-node)

[Introduction to Runtime Environments](https://www.codecademy.com/article/introduction-to-javascript-runtime-environments)

# **A Brief History of JavaScript _modules_ in the _browser_**

In the early days of _web development_, ***JavaScript*** usage was fairly minimal. A `script` here to add some interactivity to a _page_ and a `script` there to _automate_ away some simple _task_. Nowadays, however, ***JavaScript*** dominates the _web_ and _scripts_ have ballooned into large and cumbersome behemoths. According to some studies, the average _size_ of a _website_, in terms of _kilobytes_ of ***JavaScript*** _data_ transferred, has grown over *5 times from 2010 to 2020*!

These stats aren’t meant to paint a dreary future of _web development_. _Web applications_ drive much of modern society and are far more capable than could have been imagined when the World Wide Web was created in 1989. Instead, it is to make clear the need for modularity as the capabilities, and size, of these `scripts` grow.

Though libraries for implementing _modules_ have existed for some time, syntax for natively implementing _modules_ was only introduced in 2015 with the release of **ECMAScript 6** (**ES6**). Since then, it has been adopted by most modern _browsers_ and is the de facto approach for implementing _modular applications_ in the _browser_.

# **Implementing modules in the browser**

Let’s take a look at implementing _modules_ in the _browser_ through an _example_. Suppose I wanted to build a simple _web application_ with some _hidden text_ that is revealed when a `button` is pressed.

A demo of a _simple website_. There is a `button` that says `"Press me... if you dare"`. Clicking on the `button` reveals a _hidden message_ that says `"_modules_ are fancy!"`

- To create this website, we could create two files, `secret-messages.html` and `secret-messages.js`, and store them together in a folder called `secret-messages`:
```
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
```
Let’s take a look at the **HTML** file first:
```
<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> _modules_ are fancy! </p>
    <script src="./secret-messages.js"> </script>
  </body>
</html>
```
- The `secret-messages.html` page `renders` a `button` _element_ and a _hidden paragraph element_.
- It then loads the `script` `secret-messages.js` using the **file path** `"./secret-messages.js"`. The `./ before` the _file name_ is how I indicate that the _file_ being referenced `(secret-messages.js)` is in the same _folder_ as the _file_ referencing it `(secret-messages.html)`.

Speaking of which, let’s take a look at the **JavaScript** _file_:
```
/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});
```
In `secret-messages.js`, `DOM` _objects_ are created to reference the `button` _element_ and _paragraph element_ using the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById). These _objects_ are stored in `buttonElement` and `pElement`, respectively.
The function `toggleHiddenElement()` is declared. It can accept either of these elements as an input called `domElement` and will either **show** or **hide** that _element_ depending on its current `style.display` value.
An `event listener` is added to `buttonElement` to listen for `'click'` events and respond by calling `toggleHiddenElement()` with `pElement` as the _argument_.
Now, suppose I wanted to create a second _webpage_ with _similar features_. There is still a `button`, but this time clicking it reveals an `image`. Using _similar logic_ as the `program` above, this can be achieved with the following _file structure_:
```
secret-image/
|-- secret-image.html
|-- secret-image.js
```
The ***HTML*** might look like this:
```
<!-- secret-image.html --> 
<html>
  <head>
    <title>Secret Image</title>
  </head>
  <body>
    <button id="secret-button"> Want to see something cool? </button>
    <img id="secret-img" src="imageURL.jpg" style="display: none">
    <script src="./secret-image.js"> </script>
  </body>
</html>
```
… and the ***JavaScript*** might look like this:
```
/* secret-image.js */
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
});
```

_-_ Given that much of the code in these two programs is similar, creating this second _website_ was fairly straightforward. In particular, notice that the `toggleHiddenElement()` _function_ is copied line for line from `secret-messages.js`.

_-_ Having two identical, but separate, copies of a _function_ can lead to maintenance _issues_ in the future. ***For example***, any _bugs_ that may exist within the _function_ would need to be _fixed_ in two places rather than one.

_-_ Instead, creating a single _copy_ of `toggleHiddenElement()` within a _module_ that `exports` it would allow these two _websites_ to `import` and use the exact same _function_. With this approach, ***update*** to the _function_ only need to occur within the _module_ that defines them, and all programs that `import` this _function_ will receive the same ***update***. Furthermore, additional functions could be `exported` by the _module_ and used by both programs, further reducing repetition.

# **ES6 Named Export Syntax**
A module must be entirely contained within a file. So, let’s first consider where a new module may be placed within the file system. Since it needs to be used by both of these projects, you may want to put it in a mutually accessible location. The entire file structure containing both projects and this new module, let’s call it dom-functions.js, could look like this:
```
secret-image/
|-- secret-image.html
|-- secret-image.js
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
_modules_/
|-- dom-functions.js    <-- new module file
]
```
Inside `dom-functions.js`, the _functions_ you wish to reuse can be exported using the named `export` syntax below:

`export { resourceToExportA, resourceToExportB, ...}`
Using this ***syntax***, the `name` of each exported resource is listed between _curly braces_ and separated by _commas_. Below, you can see how this is implemented in the _new module_ _file_ `dom-functions.js`:
```
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
export { toggleHiddenElement, changeToFunkyColor };
```
Let’s briefly break down how this _module_ works:

_-_ The _function_ `toggleHiddenElement()` is declared. It accepts a `domElement` as an _input_ and either _shows or hides_ that _element_ depending on its current _display style value_.
_-_ A _new function_ `changeToFunkyColor()` is declared. It accepts a `domElement` as an _input_ and then _sets_ its `background color` to a `random` `rgb()` `color` _value_.
The two _functions_ are exported using the **ES6** `export` _statement_.
These exported _functions_ are now available to be imported and used by other _files_!

If we want to try this out on our _own computer_, we will need to spin up a _local server_ or else you will run into [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues. Check out [this article](https://www.codecademy.com/article/spinning-up-a-local-server) on creating a local server with VSCode and the Live Server extension.

In addition to the syntax above, in which all named `exports` are listed together, individual values may be exported as named `exports` by simply placing the `export` _keyword_ in front of the variable’s declaration. Here is the same _example_ using this ***syntax***:
```
/* dom-functions.js */
export const toggleHiddenElement = (domElement) => {
  // logic omitted...
}
 
export const changeToFunkyColor = (domElement) => {
  // logic omitted...
}
```
## **ES6 Import Syntax**
The **ES6 syntax** for importing named resources from _modules_ is similar to the `export` **syntax**:
```
import { exportedResourceA, exportedResourceB } from '/path/to/module.js';
```
Let’s ***update*** the `secret-messages` `program` such that it now `imports` functionality from `dom-functions.js`. Doing so requires two important steps. First, ***update*** `secret-messages.js`:
```
/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from '../_modules_/dom-functions.js';
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```

Let’s break down these changes:

_-_ In `secret-messages.js`, the functions `toggleHiddenElement()` and `changeToFunkyColor()` are imported from the _module_ `../_modules_/dom-functions.js`. The `../` indicates that the _modules_/ _folder_ is in the same folder as the _parent folder_, `secret-messages/.`
_-_ When the `button` is clicked, the now imported `toggleHiddenElement()` _function_ is called with `pElement` as an _argument_.
In addition, `changeToFunkyColor()` is called with `buttonElement` as an _argument_, changing its `background color` to a `random` one!
Now, we must also ***update*** `secret-messages.html`:
```
<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> _modules_ are fancy! </p>
    <script type="module" src="./secret-messages.js"> </script>
  </body>
</html>
```
The change here is  subtle, can we spot it? In `secret-messages.html`, the only thing that changes is the addition of the `attribute type='module'` to the `<script>` _element_. Failure to do so can cause some _browsers_ to `throw` an `error`. ***For example***, in _Chrome_ we might see this `error`:

`Uncaught SyntaxError: Cannot use import statement outside a module`

And those are the basics of exporting and importing using the **ES6** `export` and `import` syntax! If we have been following along with these `code` _examples_, see if we can ***update*** the `secret-image` _project_ to use the exported _functions_ from the _module_ `dom-functions.js` before continuing on to the challenges below.

## **ES6 modules Challenge #1**

***Fill in the blank***
_-_ In this _module_ we will find two _functions_ which have been declared for us, `changeText()` and `changeToFunkyColor()` but currently, they aren’t being exported.

_-_ Using the named `export` syntax, `export` `changeText()` and `changeToFunkyColor()` from this _module_.
```
function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}
 
function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}
 
// export the functions here
    export { changeText, changeToFunkyColor }     
 ```

_-_ eject
_-_ { changeText, changeToFunkyColor }
_-_ export
_-_ import
_-_ module.exports =
_-_ changeText, changeToFunkyColor
_-_ Click or drag and drop to fill in the blank

## **ES6 modules Challenge #2**
**Coding question**: We are building a simple _webpage_ that makes use of the _module_ `module.js`. This _module_ declares and `exports` two _functions_ whose signatures are listed below:

- `changeText(domElement, newText)`: changes the text of the - provided `domElement` to the provided `newText`.
- `changeToFunkyColor(domElement)`: changes the `color` of the provided `domElement` to a `random color`.
- We will be editing the _file_ `main.js`. 

### ***Complete the tasks below:***

_-_ Import changeText and changeToFunkyColor from ./module.js using the named import syntax.
_-_ Call changeText() to change the text of the element stored in the header variable to "I did it!".
_-_ Within the callback passed to setInterval, call changeToFunkyColor() passing in the element stored in the header variable.
*) **Note**: *Upon completing this challenge, the text will change to `“I did it!”` and will be set to change color every `0.2` seconds.*

```
/* main.js */

// import the functions here, then uncomment the code below

const header = document.getElementById("header");

// call changeText here

setInterval(()=> {
  
  // call changeToFunkyColor() here

}, 200);
```
***Run your code to check our answer***

## **ES6 modules Challenge #3**

***Multiple choice***
The `<script>` _element_ below loads a **JavaScript** _file_ which makes use of **ES6** `import/export` syntax. Which of the following changes must be made in order to _properly_ load this _module_ and avoid _browser_ `errors`?
```
<script src="./my-module.js"> </script>
```
```
A. A type="**ES6**" attribute must be added to the opening <script> tag.

<script type="**ES6**" src="./my-module.js"> </script>
```
```
B. A <module> tag should be used instead of a <script> tag.

<module src="./my-module.js"> </module>
```
```
C. The file extension must be changed from .js to .jsm.

<script src="./my-module.jsm"> </script>
```
```
D. A type="module" attribute must be added to the opening <script> tag.

<script type="module" src="./my-module.js"> </script>
```

## **Renaming Imports to Avoid Naming Collisions**

Inevitably, I will run into a situation where the resources I wish to `import` share a `name` with some other _value_ that already exists in my `program` _(or from another imported module)_.

***For example***, suppose I had access to two _modules_, `greeterEspanol.js` and `greeterFrancais.js`. Each `exports` a _function_ called `greet()`:
```
/* inside greeterEspanol.js */
const greet = () => {
  console.log('hola');
}
export { greet };
 
/* inside greeterFrancais.js */
const greet = () => {
  console.log('bonjour');
}
export { greet };
```
Now, let’s say I wanted to use each of these _functions_ in a `program`, called `main.js`, that simulates a conversation between a `spanish-speaker` and a `french-speaker`.
```
import { greet } from 'greeterEspanol.js';
import { greet } from 'greeterFrancais.js';
```
The `code` above will `throw` an `error` on **line 2** due to the fact that the identifier greet has already been defined on **line 1**. Thankfully, **ES6** includes syntax for renaming imported resources by adding in the keyword as. It looks like this:
```
import { exportedResource as newlyNamedResource } from '/path/to/module'
```

#### **Let’s see how this could work within main.js**
```
/* main.js */
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';
 
greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour
```
Now, both of the imported _functions_ can be called within `main.js` using their new identifiers, `greetEspanol()` and `greetFrancais()`.

## **ES6 modules Challenge #4**
***Fill in the blank***
Consider the following _functions_ being exported from the _modules_ `square-area.js` and `circle-area.js`:
```
/* From square-area.js... */
export function area(side) {
  return side * side;
}
 
/* From circle-area.js... */
export function area(radius) {
  return Math.PI * radius * radius;
}
```
The file below, `area-calculator.js`, is programmed to `print` the area of a _square_ and a _circle_ to the `console` using these _functions_. However, because the exported values share the same _name_, they need to be renamed when they are imported! Fill in the `code` `blanks` below with the correct syntax for renaming these _functions_.
```
/* area-calculator.js */
 
import {  } from 'square-area.js';
import {  } from 'circle-area.js';
 
console.log('The area of a square with sides of length 5 is ' + squareArea(5));
console.log('The area of a circle with radius of length 5 is ' + circleArea(5));
    + circleArea
    + area as squareArea
    + squareArea
    + area as circleArea
```
***Click or drag and drop to fill in the blank***

# **Default Exports and Imports**

So far, ***the examples*** shown have used the named `export` syntax, in which a module’s resources are exported individually by `name`. Every _module_ also has the option to `export` a single _value_ to represent the entire _module_ called the `default export`. Often, though not always, the `default export` _value_ is an ***object*** containing the entire `set` of _functions_ and/or _data_ _values_ of a _module_.

The syntax for exporting a `default` _object_ looks like this:
```
const resources = { 
  valueA, 
  valueB 
}
export { resources as default };
```
With this **syntax**, the _object_ containing the module’s resources is first declared and then is exported on the next line. At first glance, it looks like the resources _object_ is being exported as a named `export`. However, the _clause_ as `default` renames the exported _object_ to `default`, a **reserved identifier** that can only be given to a single exported _value_.

We may also see this `shorthand syntax` where the _value_ follows `export default` is the `default` _value_ to be exported:
```
const resources = {
  valueA,
  valueB
}
export default resources;
```

# **Importing default values**
The **syntax** for importing `default exports` looks like this:
```
import importedResources from 'module.js';
```
Notice that the _curly braces_ are gone from the `import` _statement_. This **syntax** is actually `shorthand` for `import { default as importedResources } from 'module.js` and the imported `default` _value_ may be given any `name` the programmer chooses.

It should be noted that if the `default export` is an _object_, the values inside cannot be extracted until after the _object_ is imported, like so:
```
// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;
 
// This will not work...
import { valueA, valueB } from 'module.js'
```
Let’s `return` to the prior ***example***. The `dom-functions.js` _module_ from above could be rewritten to use `default exports` like so:
```
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}
export default resources;
```

This `default exports` _object_ can now be used within `secret-messages.js` like so:
```
import domFunctions from '../_modules_/dom-functions.js';
 
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```
Notice how `toggleHiddenElement()` and `changeToFunkyColor()` are now _methods_ of the imported _object_ called `domFunctions` and are extracted using **ES6** destructuring ***syntax***! It should be noted that the identifier `domFunctions` can be chosen as the programmer sees fit. If we ***recall***, the ***syntax*** used in the snippet above is `shorthand` for:
```
import { default as domFunctions } from '../_modules_/dom-functions.js';
```
Continue on to the ***challenges*** below before the final ***review*** at the end of the _article_.

## **ES6 modules Challenge #5**
***Coding question***
In this _module_ I will find **two** _functions_ which have been declared for me, `changeText()` and `changeToFunkyColor()`. The _website_ being rendered wants to make use of these _functions_ but currently, they aren’t being exported.

#### **Using the default export syntax, export an object representing the module and containing the changeText() and changeToFunkyColor() functions.**

**Note**: *Upon completing this challenge, the text will change to `"You did it"` and will be set to change color every 0.2 seconds.*
```
function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// use default export syntax below here
```

***Run code to check the answer***

## **ES6 modules Challenge #6**
***Multiple choice***
Consider the _module_ below which `exports` a few _values_ using the `default export` ***syntax***:
```
/* article-data.js */
const resources = {
  articleTitle: "Implementing _modules_ using **ES6** Syntax",
  numberOfChallenges: 6,
  minutesToComplete: 45
}
export default resources;
```
_-_ ***Which of the following is NOT a valid statement for importing this data?***
```
import { default as articleData } from './article-data.js'

import { articleTitle, numberOfChallenges, minutesToComplete } from './article-data.js'

import articleData from './article-data.js'

import resources from './article-data.js'
```
## ***Review***
In this _article_, we have learned the following:

_-_ The benefits of implementing **modular programs**;

_-_ How to use the **ES6 export statement** to `export` code from a _file_ - meaning its _functions and/or data_ can be used by other _files/modules_;

_-_ How to use the **ES6 import statement** to `import` _functions and/or data_ from another _module_;

_-_ How to ***rename*** imported resources using the as `keyword`.
_-_ How to `export` and `import` a `default` _value_;

_-_ Though this _article_ covers the basics of using ***ES6 syntax** to `import` and `export` _modules_, [**MDN** has an excellent _article_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) that provides an _in-depth_ look at some _additional features_ that **ES6** has to offer.

