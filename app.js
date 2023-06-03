// Create the Menu Object

// create an menu object hold the meal and price
const menu = {
  // create a _meal property with a value of an empty string
    _menu: '',
  // add a _price property with a value of 0
    _price: 0,
  
  // Add Setter Methods
  
  // create a meal setter method with mealToCheck
  set meal(mealToCheck) {
  // checks if mealToCheck is a string
    if(typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
      }
    },
  // checks if priceToCheck is a number
  set price(priceToCheck) {
    if(typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
      }
    },
  
  // Add a Getter Method
  
  get todaysSpecial() {
  // check if _meal and _price values exist
    if (this._meal && this._price) {
      return `Today's Meal is ${this._meal} for $${this._price}!`
      } else {
        `Meal or Price was not set correctly!`
      }
    }
  };
  
  // Get Today's Special
  
  menu._meal = 'Pizza'
  menu._price = 8
  console.log(menu.todaysSpecial);
  
  
  
  