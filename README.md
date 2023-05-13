# **Instance**

Now, I'am ready to create _class instances_. An _instance_ is an ***object that contains the property names and methods of a class***, but with ***unique*** property values. Let’s look at my `Dog` class example as below:

```
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}
 
const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```

Below our `Dog` class, we use the new _keyword_ to create an instance of our `Dog` class. Let’s consider the line of code "_step-by-step_".

I created a `new` variable named `halley` that will store an instance of our `Dog class`.
I used the `new` keyword to generate a _new instance_ of the `Dog` class. The new keyword calls the `constructor()`, runs the code inside of it, and then returns the `new` instance.

I pass the `'Halley'` string to the `Dog` `constructor`, which sets the `name` property to `'Halley'`.

Finally, I log the _`_value_ saved to the `name` key in my `halley` object, which logs `'Halley'` to the `console`.


# **Instructions**

### **1. Create an instance of the Surgeon; Set name to them**
_Create an instance of the `Surgeon` class — set the `name` to `'Francisco Romero'` and `department` to `'Cardiovascular'`.
_ ***Save*** the instance to a constant variable called `surgeonRomero`.

**Hint:**
_To ***create*** an instance of a class, use the syntax below:
```
const instance = new ClassName('arg1', 'arg2');
```
### **2. Create an instance of the Surgeon; Set name to them**
_Create an instance of the `Surgeon` class — set the `name` to `'Ruth Jackson'` and `department` to `'Orthopedics'`.
_ ***Save*** the instance to a constant variable called `surgeonRomero`.

### **3. Save the instance to const var called surgeonJackson**

**Hint:**
Here is an example of creating an instance of the `Surgeon class`.
```
const surgeonAlZahrawi = new Surgeon('Al-Zahrawi', 'Neurology');
```