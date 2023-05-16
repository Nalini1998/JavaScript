# **Inheritance V**

In addition to the inherited features, _child classes_ can contain their own _properties_, _getters_, _setters_, and _methods_.

Below, we will add a `usesLitter` _getter_. The syntax for creating _getters_, _setters_, and _methods_ is the same as it is in any other _class_.
```
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
}
```
In the example above, we create a `usesLitter` _getter_ in the `Cat` _class_ that returns the _value_ saved to `_usesLitter`.

Compare the `Cat` _class_ above to the one we created without inheritance:
```
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
```
We decreased the number of lines required to create the `Cat` _class_ by about half. Yes, it did require an _extra class (Animal)_, making the reduction in the size of our `Cat` _class_ seem moot. However, the benefits _(time saved, readability, efficiency)_ of inheritance grow as the number and size of my subclasses increase.

One benefit is that when I need to change a _method_ or _property_ that _multiple classes_ share, I can change the _parent class_, instead of _each subclass_.

Before move past inheritance, I took a moment to see how we would create an additional _subclass_, called `Dog`.
```
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}
```
This `Dog` _class_ has access to the same _properties_, _getters_, _setters_, and _methods_ as the `Dog` _class_ we made without inheritance, and is a quarter the size.

Now that we’ve abstracted `animal` `daycare` features, it’s easy to see how I can `extend` `Animal` to support other _classes_, like `Rabbit`, `Bird` or even `Snake`.

# **Instructions**

#### **1. Use the properties and methods below to help you complete the tasks that follow**


***+ Nurse***

***Properties***: `_name`,`_remainingVacationDays` _(set to 20 inside the `constructor()`)_, `_certifications`
***Methods***: `.takeVacationDays()`, `.addCertification()`
Under the `Nurse` `constructor()`, add a _getter_ that returns the _value_ saved to the `Nurse` instance’s `_certifications`.



#### **2. Add a method called addCertification under the certifications getter.**

The _method_ should accept one input `(newCertification)`. Inside the _method_, use the `push` _method_ to _add_ the `newCertification` _value_ to the `nurse`’s `certifications` _array_.

**Hint:**
`this._certifications.push(newCertification);`


#### **3. At the bottom of main.js call the .addCertification() method on nurseOlynyk with a parameter of 'Genetics'**

#### **4. Log the value saved to the certifications property of nurseOlynyk**
