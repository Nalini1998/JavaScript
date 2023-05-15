# **Static Methods**

Sometimes we will want a _class_ to have _methods_ that aren’t available in individual _instances_, but that we can call directly from the _class_.

Take the `Date` _class_, for _example_ — you can both create `Date` _instances_ to represent whatever date you want, and call _static methods_, like `Date.now()` which returns the current date, directly from the _class_. The .`now()` _method_ is _static_, so you can call it directly from the _class_, but not from an _instance_ of the _class_.

Let’s see how to use the _static_ keyword to create a _static method_ called `generateName` method in our `Animal` class:
```
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 
```
In the example above, we create a _static method_ called .`generateName()` that returns a `random name` when it’s called. Because of the _static_ keyword, we can only access `.generateName()` by appending it to the `Animal` _class_.

We call the `.generateName()` _method_ with the following syntax:

`console.log(Animal.generateName()); // returns a name`
You cannot access the `.generateName()` _method_ from _instances_ of the `Animal` _class_ or _instances_ of its subclasses _(See below)_.
```
const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError
```
The example above will result in an `error`, because you cannot call _static methods_ `(.generateName())` on an _instance_ `(tyson)`.

# **Instructions**
1/. Inside of your HospitalEmployee class, create a static method called generatePassword. When it’s called, this method should return a random integer between zero and 10,000.

**Hint:**
The following code will compute a random integer between 0 and 10,000:
```
Math.floor(Math.random() * 10000)
```