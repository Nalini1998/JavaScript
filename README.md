# **Build a Library with Nalini**

So happy, I’ve become head librarian at my  local `Books-'N-Stuff`, which is in dire need of my help. They’re still using index cards to organize their content! Yikes!

But no matter, I know some JavaScript, so let's get to work modernizing my new digs.

`Books-'N-Stuff` carries three different types of media: `books`, `CDs`, and `movies`. In this project I will create a parent class named `Media` with three subclasses: `Book`, `Movie`, and `CD`. These three subclasses have the following **Properties** and **Methods**:

## **Book**
**Properties**: `Author` _(string)_, `Title` _(string)_, `pages` _(number)_, `isCheckedOut` _(boolean, initially false)_, and `ratings` _(array, initially empty)_.
**Getters**: all **Properties** have a getter
**Methods**: `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

## **Movie**

**Properties**: `Director` _(string)_, `Title` _(string)_, `Runtime` _(number)_, `isCheckedOut` _(boolean, initially false)_, and `ratings` _(array, initially empty)_
**Getters**: all **Properties** have a getter
**Methods**: `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

## **CD**

**Properties**: `artist` _(string)_, `Title _(string)_, `isCheckedOut` _(boolean, initially false)_, and `ratings` _(array, initially empty)_, `songs` _(array of strings)_
**Getters**: all **Properties** have a getter
**Methods**: `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

# **Tasks**

## **Library Classes**

<br>

#### **1. Let’s start by making a parent class for my Book, CD, and Movie classes.**

> Create an empty class called `Media`.

> **Hint:**
Use the following syntax to create an empty class:
```
class emptyClass {
 
}
```
<br>

#### **2. Inside the Media class, create an empty constructor() method that takes one parameter.**

> This argument will set the one property that is in all three subclasses of `Media`, and does not have a default value.

<br>

#### **3. Inside the constructor, set the values for Media Properties that Book, CD, and Movie share. Prepend all of the property names with an underscore (`_`).**

<br>

#### **4. Create Getters for the Title, isCheckedOut, and ratings Properties. Each getter should return the value saved to the matching property.**

> **Hint:**
Use the following syntax to create Getters:

```
class emptyClass {
  constructor(keyOne) {
    ...
  } 
 
  get keyTwo() {
    return this._keyTwo;
  }
}
```
<br>

#### **5. Create a setter for the isCheckedOut property.**

> **Hint:**
Use the following syntax to create setters:

```
class emptyClass {
  constructor(keyOne) {
    ...
  }
 
  set keyTwo(newKeyTwo) {
    this._keyTwo = newKeyTwo;
  }
} 
```
<br>

#### **6. Under your **Getters**, create a method named toggleCheckOutStatus that changes the value saved to the _isCheckedOut property.**

> If the value is `true`, then change it to `false`. If the value is `false`, then change it to `true`.

> **Hint:**
We can use the following syntax to negate the value saved to a boolean.

```
methodName() {
  this._booleanProperty = !this._booleanProperty;
}
```
<br>

#### **7. Under .toggleCheckOutStatus(), create a method named getAverageRating. Return the average value of the ratings array.**

> Use the `reduce` method to find the sum of the `ratings` array. Divide this sum by the `length` of the `ratings` array, and return the `result`.

> **Hint:**
The code below calculates the sum of the numbers saved to the ratings array.

`let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);`

> I can access the `length` of an array using `.length` _(see below)_.

`const lengthOfArray = myArray.length;`

<br>

#### **8. Let’s add a method named addRating that accepts one argument and uses .push() to add it to the end of the ratings array.**

> **Hint:**
Use the following syntax to add a value to the end of an array.

```
newValue(inputValue) {
  this.values.push(inputValue);
}
```
<br>

#### **9. Next, I’ll build a Book class that extends Media.**
<br>

# **Book**

> **Properties**: `Author` _(string)_, `Title` _(string)_, `pages` _(number)_,  `isCheckedOut` _(boolean, initially false)_, and `ratings` _(array, initially empty)_.

> **Getters**: all **Properties** have a getter

> **Methods**: `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

> Create an empty `Book` class that `extends Media`.

> **Hint:**
Use the following syntax to extend a class:

```
class ChildClass extends ParentClass {
 
}
```
<br>

#### **10. Inside the Book class, create a constructor that accepts three arguments.**

> These arguments are used to set Properties that do not have default values.

> **Hint:**
The `constructor` method must accept arguments for `Author`, `Title`, and `pages`.

<br>

#### **11. Call super on the first line of the Books‘s constructor method. Pass it any arguments that the parent constructor uses.**

> **Hint:**
Pass `Title` to the **parent** `constructor`. The **parent** `constructor` uses `Title` to set the `_title` property.

<br>

#### **12. Use the remaining arguments to set the **Author** and pages **Properties** in Book.**

> **Hint:**
Use `this._propertyName` to set property values.

<br>

#### **13. Add two new Getters to the Book class. Each getter should return the value saved to its matching property.**

> Since our `Book` class inherits `Media`'s Properties and Getters, we only need to create two new Getters in the `Book` class.

> Add two new Getters to the `Book` class. Each getter should return the value saved to its matching property.

> **Hint:**
Use the following syntax to add Getters for the `Author` and `pages` Properties.

```
get myProperty() {
  return this._myProperty;
}
```
<br>

#### **14. I can create an entire Movie class using only the property, getter, and method specifications below**
<br>

# **Movie**

> **Properties**: `Director` _(string)_, `Title` _(string)_, `Runtime` _(number)_, `isCheckedOut` _(boolean, initially false)_, and `ratings` _(array, initially empty)_

> **Getters**: all **Properties** have a getter

> **Methods**: `.getAverageRating()`, `.toggleCheckOutStatus()`, and `.addRating()`

> **Hint:**
Follow these steps to create a `Movie` class that `extends Media`:

- Create an empty `Movie` class that `extends Media`.

- Create a `constructor` that accepts arguments for `Director`, `Title`, and `Runtime`.
- On the first line of the `constructor`, call `super` and pass it `Title`.
- On the next two lines, set my `_director` and `_runTime` Properties.
- Under the `constructor`, create Getters for `Director and `Runtime`. Each getter should return the value saved to that property.

<br>

#### **15. Create a Book instance with the following Properties:**

> **Author**: `'Bill Bryson'`

> **Title**: `'A Short History of Nearly Everything'`

> **pages**: `544`

> Save the instance to a constant variable named `historyOfEverything`.

> **Hint:**
Use the following syntax to create a new instance:

`const myInstance = new myClass(arg1, arg2, arg3);`

<br>

#### **16. Call .toggleCheckOutStatus() on the historyOfEverything instance.**

<br>

#### **17. Log the value saved to the isCheckedOut property in the historyOfEverything instance.**

<br>

#### **18. Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.**

<br>

#### **19. Call .getAverageRating() on historyOfEverything. Log the result to the console.**

<br>

#### **20. Create a Movie instance with the following Properties:**

> **Director**: `'Jan de Bont'`
> **Title**: `'Speed'`
> **Runtime**: `116`

> Save the instance to a constant variable named `speed`.

> **Hint:**
Use the following syntax to create a new instance:

`const myInstance = new myClass(arg1, arg2, arg3);`

<br>

#### **21. Call .toggleCheckOutStatus() on the speed instance.**

<br>

#### **22. Log the value saved to the isCheckedOut property in the speed instance.**

<br>

#### **23. Call .addRating() three times on speed with inputs of 1, 1, and 5.**

<br>

#### **24. Call .getAverageRating() on speed. Log the result to the console.**

<br>

#### **25. Nice work! I've made it this far, I clearly have a strong understanding of class syntax and inheritance.**

**Additional Task:**

> Add more Properties to each class _(movieCast, songTitles, etc.)_

> Create a CD class that extends Media.

> In .addRating(), make sure input is between 1 and 5.

> Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.

> Create class called Catalog that holds all of the Media items in our library.

<br>

[Origin:Nalini Vo](https://github.com/Nalini1998)