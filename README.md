# **Inheritance IV**

Now that we know how to create an _object_ that inherits _properties_ from a _parent_ _class_ let’s turn our attention to _methods_.
When we call `extends` in a _class_ declaration, all of the _parent_ _methods_ are available to the _child class_.
Below, we `extend` our `Animal` _class_ to a `Cat` subclass.
```
class Animal {
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
 
 
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

const bryceCat = new Cat('Bryce', false);
 ```

In the example above, our `Cat` _class_ `extends` `Animal`. As a result, the `Cat` _class_ has access to the `Animal` getters and the `.incrementBehavior()` method.

Also in the code above, we create a `Cat` _instance_ named `bryceCat`. Because `bryceCat` has access to the `name` getter, the code below logs `'Bryce'` to the _console_.

`console.log(bryceCat.name);`

Since the `extends` keyword brings all of the `parent`’s getters and _methods_ into the _child class_, `bryceCat.name` accesses the `name` getter and returns the value saved to the `name` _property_.

Now consider a more involved example and try to answer the following question: What will the code below log to the console?
```
bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior
```
The correct answer is 1. But why?

The `Cat` _class_ inherits the `behavior` _property_, `behavior` _getter_, and the `.incrementBehavior()` _method_ from the `Animal` _class_.
When we created the `bryceCat` _instance_, the `Animal` `constructor` `set` the `_behavior` _property_ to zero.
The first line of code calls the inherited `.incrementBehavior()` method, which increases the `bryceCat` `_behavior` value from zero to one.
The second line of code calls the `behavior` _getter_ and logs the value saved to `_behavior (1)`.

# **Instructions**

#### ***1. Call .takeVacationDays() with an input of 5 on your nurseOlynyk instance***

#### ***2. Under the method call, log the value saved to the remainingVacationDays property in nurseOlynyk***

