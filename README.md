# **Quiz Summary: Classes**

### **1/. Which of the following is a method of the RentalUnit class?**
```
class RentalUnit {
  constructor(address, cost) {
    this._address = address;
    this._cost = cost;
  }
 
  get address() {
    return this._address;
  }
 
  get cost() {
    return this._cost;
  }
 
  calculateMonthly() {
    return this.cost / 12; 
  }
}
```

A. `.calculateMonthly()`

B. `_address`

C. `RentalUnit`

D. `_cost`

---
***Answer:A. `.calculateMonthly()`***


---
### **2/. When you create a subclass using the extends keyword, what will the class inherit from its parent?**


A. The subclass inherits only the parent class getters and setters.

B. The subclass does not directly inherit anything. You must use the super keyword to set properties and inherit getters, setters, and methods.

C. The subclass inherits all parent properties.

D. The subclass inherits all of the parent’s getters, setters, and methods. You can also use the super keyword to set properties in the parent class.

---
***Answer: D. The subclass inherits all of the parent’s getters, setters, and methods. You can also use the super keyword to set properties in the parent class.*** _(👏Nice! Although the subclass automatically inherits the parent methods, you need to use the super keyword to set the parent properties)._


---

### **3/. What is the purpose of the constructor() method?   **


A. The `constructor()` method is only used in subclasses. The arguments are sent to the parent class where the properties are set.

B. Each property has a `constructor()` method. It is called whenever you try to `set` or `get` the property.

C. Subclasses inherit the `constructor()` from the parent class to `set` property values for the child class.

D. The `constructor()` is called when you create a new instance of a class. It sets the property values for each instance.

---
***Answer: D. The `constructor()` is called when you create a new instance of a class. It sets the property values for each instance.*** _(👏 Nice work! If the class inherits properties from a parent class, then it will call super to pass arguments to the parent’s constructor())._

---

### **4/. Which of the following keywords is required to create a new class?**

A. let

B. class

C. new

D. const

---
***Answer: B. Class***  _(👏Nice! The class keyword is followed by a CamelCased class name)._

---

### **5/. Which of the following will create an instance of the RentalUnit class, and save it to a variable called myRental?**
```
class RentalUnit {
  constructor(address, cost) {
    this._address = address;
    this._cost = cost;
  }
 
  get address() {
    return this._address;
  }
 
  get cost() {
    return this._cost;
  }
 
  calculateMonthly() {
    return this.cost / 12; 
  }
}
```

A. `const myRental = RentalUnit('111 33rd St NE', 19000);`

B. `const myRental = new RentalUnit('111 33rd St NE', 19000);`

C. `const myRental = RentalUnit;`

D. `const myRental = new RentalUnit;`

---
***Answer: B. `const myRental = new RentalUnit('111 33rd St NE', 19000);`*** _(👏 Nice work! You must include the new keyword and two arguments)._

---

### **6/. How would you call the .randomBorough() method in the example below?**
```
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }
 
  get address() {
    return this._address;
  }
 
  get costPerYear() {
    return this._costPerYear;
  }
 
  calculateMonthly() {
    return this.costPerYear / 12; 
  }
}
 
class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }
 
  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }
 
  static randomBorough() {
    const myBoroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'];
    return myBoroughs[Math.floor(Math.random() * 5)];
  }
}
 
const myApartment = new Apartment('1234 W 54th', 22000, 3);
```

A. `Apartment.randomBorough()`

B. `.randomBorough()`

C. `myApartment.randomBorough()`

D. `RentalUnit.randomBorough()`

---
***Answer: A. `Apartment.randomBorough()`*** _(👏Nice job! You must access static methods from the class. You cannot call them on an instance of the class)._

---

### **7/. Why will the code below throw an error?**
```
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }
 
  get address() {
    return this._address;
  }
 
  get costPerYear() {
    return this._costPerYear;
  }
 
  calculateMonthly() {
    return this._costPerYear / 12; 
  }
}
 
class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    this._numberOfBedrooms = numberOfBedrooms;
    super(address, costPerYear);
  }
 
  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }
}
 
const myApartment = new Apartment('1234 W 54th', 22000, 3);
```

A. `_numberOfBedrooms` should not have an underscore.

B. `super` should accept arguments for all three parameters: `address`, `costPerYear`, and `numberOfBedrooms`.

C. You must include a setter for `numberOfBedrooms`.

D. In `Apartment`‘s’ `constructor()`, the `super` keyword must be called before `this` is used.

---
***Answer: D. In `Apartment`‘s’ `constructor()`, the `super` keyword must be called before `this` is used***  _(👏You do not need to create a setter for every property. In fact, the lack of a setter indicates that you don’t want the numberOfBedrooms value to change once it is created)._

---

### **8/. Which of the following problems do classes alleviate**


A. Objects make it easy to create multiple classes that share properties and methods.

B. Classes inherit properties and methods from objects that make it easy to create objects with the same property values, but different property names.

C. Classes make it easy to create multiple objects that share property names, but not methods.

D. Classes make it easy to create multiple objects that share property names and methods.

---
***Answer: D. Classes make it easy to create multiple objects that share property names and methods*** _(👏 Each instance of a class has the same properties, getters, setters, and methods. Only the property values change)._


---

### **9/. Which of the following is the subclass in the example below?**
```
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }
 
  get address() {
    return this._address;
  }
 
  get costPerYear() {
    return this._costPerYear;
  }
 
  calculateMonthly() {
    return this.costPerYear / 12; 
  }
}
 
class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }
 
  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }
}
```

A. `address`

B. `Apartment`

C. `bedrooms`

D. `RentalUnit`

---
***Answer: B. `Apartment`***  _(👏Nice work! The Apartment class extends the methods and properties in the RentalUnit class)._

---

### **10/. What is the purpose of inheritance?**


A. To share data and methods between objects.

B. To create new functions that have the same data and methods as other functions.

C. To create functions that pass through the same parameters through a chain of functions.

---
***Answer: A. To share data and methods between objects*** 

---








