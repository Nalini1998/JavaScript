# **Methods**

At this point, I have a `Dog` class that spins up `objects` with `name` and `behavior` properties. Below, I will add `getters` and a method to bring my `class` to life.

`Class` method and `getter` syntax is the same as it is for `objects` except I can not include commas between methods.

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
```
In the example above, I added `getter` methods for `name` and `behavior`. Notice, I also prepended my `property` names with underscores *(_name and _behavior)*, which indicate these *properties* should not be accessed directly. Under the `getters`, I add a method named `.incrementBehavior()`. When I call `.incrementBehavior()` on a `Dog` instance, it adds 1 to the `_behavior` property. Between each of my methods, I did not include commas.

# **Instructions**
### **1.** In the Surgeon constructor, prepend the name and department properties with an underscore (_).

### **2.** Inside of the constructor(), add a property named _remainingVacationDays and set it equal to 20.

### **3.** Under the constructor(), create a getter called name that returns the value saved to _name.

### **4.** Under the name getter, create a getter called department that returns the value saved to _department.

### **5.** Under the department getter, create a getter called remainingVacationDays that returns the value saved to _remainingVacationDays.

**Hint:** Use the following syntax to create a getter:

```
get keyOne() {
  return this._keyOne;
}
```

### **6.** Under the remainingVacationDays getter, create a method called takeVacationDays that accepts one argument named daysOff.

**Hint:** Inside of the method, ***subtract*** `daysOff` from the number saved to `_remainingVacationDays`. Set `_remainingVacationDays` to the `result`.

**Hint:** Class methods are created with the following syntax:

``` 
methodOne(keyOne) {
  // Do something here
}
```
#### **Help:**
*If you need help, take a look at getter syntax in the Mozilla Developer Network.*