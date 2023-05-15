# Method Calls

Finally, let’s use our new methods to access and manipulate data from `Dog` instances.
```
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
 
const halley = new Dog('Halley');
```
In the example above, we create the `Dog` class, then create an instance, and save it to a variable named `halley`.

The syntax for calling methods and getters on an instance is the same as calling them on an object — append the instance with a period, then the property or method name. For methods, we must also include opening and closing parentheses.

Let’s take a moment to create two `Dog` instances and call our `.incrementBehavior()` method on one of them.
```
let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console
```

In the example above, we create two new `Dog` instances, `nikko` and `bradford`. Because we increment the `behavior` of our `nikko` instance, but not `bradford`, accessing `nikko`.behavior returns `1` and accessing `bradford.behavior` returns `0`.

# **Instructions**

#### ***1. At the bottom of `main.js`, use `console.log()` to print the value saved to the `name` property of the `surgeonRomero` object.***


#### ***2. Call `.takeVacationDays()` on `surgeonRomero`, with an input of 3***.


#### ***3. After the call to `.takeVacationDays()`, use `console.log()` to print the value saved to the `remainingVacationDays` property of the `surgeonRomero` instance.***


**Hint:** We can access a `property` from an `object` by appending it with a period and the property’s `getter name`. See below:

```
// Print a value
console.log(myObject.myValue);
 ```
 ```
// Call a method
myObject.myMethod();
```