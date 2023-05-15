Inheritance III
We’ve abstracted the shared properties and methods of our Cat and Dog classes into a parent class called Animal (See below).

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
Now that we have these shared properties and methods in the parent Animal class, we can extend them to the subclass, Cat.

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
In the example above, we create a new class named Cat that extends the Animal class. Let’s pay special attention to our new keywords: extends and super.

The extends keyword makes the methods of the animal class available inside the cat class.
The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.
The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.
_usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.
Notice, we call super on the first line of our constructor(), then set the usesLitter property on the second line. In a constructor(), you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors.

Below, we create a new Cat instance and call its name with the same syntax as we did with the Dog class:

const bryceCat = new Cat('Bryce', false); 
console.log(bryceCat._name); // output: Bryce
In the example above, we create a new instance the Cat class, named bryceCat. We pass it 'Bryce' and false for our name and usesLitter arguments. When we call console.log(bryceCat._name) our program prints, Bryce.

In the example above, we abandoned best practices by calling our _name property directly. In the next exercise, we’ll address this by calling an inherited getter method for our name property.

Instructions
1.
In this exercise, you will begin to create the Nurse class as a child of the HospitalEmployee class. Remember the Nurse class has the following properties and methods:

Nurse
Properties: _name, _remainingVacationDays (set to 20 inside constructor()), _certifications
Methods: .takeVacationDays(), .addCertification()
Under HospitalEmployee, create an empty class named Nurse that extends HospitalEmployee.

Checkpoint 2 Passed

Hint
Use the class and extends keywords to create the Nurse class from the HospitalEmployee class.

2.
Inside the Nurse class, create a constructor() that accepts two arguments. Use the list of properties above to name these arguments.

Check the Hint if you need help.

Checkpoint 3 Passed

Hint
You should name the two arguments name and certifications.

3.
In the Nurse constructor, call the parent’s constructor method and pass the appropriate value(s).

Checkpoint 4 Passed

Hint
Use the super keyword to call the parent’s constructor(). Pass in the name argument.

4.
Inside of the Nurse constructor, and under super, set _certifications.

Checkpoint 5 Passed
5.
Under the Nurse class, create a new instance of Nurse and save it to a constant variable named nurseOlynyk. Pass in the following values for each property:

name: 'Olynyk'
certifications: ['Trauma', 'Pediatrics']
