CLASSES
Inheritance II
In the last exercise, we created a parent class named Animal for two child classes named Cat and Dog.

The Animal class below contains the shared properties and methods of Cat and Dog.

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
The code below shows the Cat class that will inherit information from the Animal class.

class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
To the right, in main.js, you will put what you learned to practice by creating a parent class named HospitalEmployee.

Instructions
1.
In the next few exercises, you will create two subclasses (Doctor and Nurse) from a parent class named HospitalEmployee. Below, we have listed the properties and methods you will find in the Doctor and Nurse classes.

Doctor
Properties: _name, _remainingVacationDays (set to 20 inside the constructor()), _insurance
Methods: .takeVacationDays()
Nurse
Properties: _name, _remainingVacationDays (set to 20 inside constructor()), _certifications
Methods: .takeVacationDays(), .addCertification()
In main.js, create a parent class named HospitalEmployee. Add a constructor with name as an argument.

Checkpoint 2 Passed

Hint
The Doctor and Nurse classes share two properties: _name and _remainingVacationDays.

Since the _remainingVacationDays is always set to 20, name is the only input parameter. Add name between the opening and closing parentheses.

2.
Inside of the constructor(), set the instance’s _name to name and _remainingVacationDays to 20.

Checkpoint 3 Passed
3.
Under the constructor, create getters for your _name and _remainingVacationDays properties.

Inside the getter, return the property’s value.

Checkpoint 4 Passed
4.
Under the getters, add a method called takeVacationDays.

This method should accept one argument, called daysOff.

Inside the method, subtract daysOff from _remainingVacationDays. Save the result to _remainingVacationDays.

Checkpoint 5 Passed

Hint
Use the -= operator to subtract and set a property.

