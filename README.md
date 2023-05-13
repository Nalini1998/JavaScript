# **Constructor**

In the last _**Project**_, I created a _class_ called `Dog`, and used it to _produce_ a `Dog` object.

Although I may see similarities between _class_ and _object_ syntax, there is one important method that sets them apart. It’s called the `constructor` method. **JavaScript** calls the `constructor()` method every time it creates a `new instance` of a `class`.
```
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```
`Dog` is the `name` of our _class_. By convention, we capitalize and PascalCase _class_ names.
**JavaScript** will invoke the `constructor()` method every time we create a new instance of our `Dog` class.
This `constructor()` method accepts one argument - `name`.

Inside of the `constructor()` method, we use the `this` keyword. In the context of a _class_, `this` refers to an _instance_ of that _class_. In the `Dog` class, we use this to `set` the `value` of the `Dog` instance’s `name` property to the `name` argument.

Under `this.name`, we create a `property` called behavior, which will keep track of the number of times a `dog` misbehaves. The behavior property is always initialized to **zero**.

# **Instructions**

### **1. Create an empty class named Surgeon**

**Hint:** Use the class keyword and opening and closing curly braces.

### **2. Create a constructor() method**

**Hint:**
Inside the `Surgeon` class, create a `constructor()` method that accepts two parameters: `name` and `department`;
Use the `constructor()` keyword, with `name` and `department` parameters.

### **3. Create name and department properties**

**Hint:**
Inside the **Surgeon** `constructor()`, create `name` and `department` _properties_ and set them equal to my `input` parameters.
Use the following **syntax** to set my `properties` to `constructor()`:

```
constructor(inputOne, inputTwo) {
  this.inputOne = inputOne;
  this.inputTwo = inputTwo;
}
```