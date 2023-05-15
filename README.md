 directly from the class, but not from an instance of the class.

Let’s see how to use the static keyword to create a static method called generateName method in our Animal class:

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
In the example above, we create a static method called .generateName() that returns a random name when it’s called. Because of the static keyword, we can only access .generateName() by appending it to the Animal class.

We call the .generateName() method with the following syntax:

console.log(Animal.generateName()); // returns a name
You cannot access the .generateName() method from instances of the Animal class or instances of its subclasses (See below).

const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError
The example above will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).

Instructions
1.
Inside of your HospitalEmployee class, create a static method called generatePassword. When it’s called, this method should return a random integer between zero and 10,000.


Hint
The following code will compute a random integer between 0 and 10,000:

Math.floor(Math.random() * 10000)