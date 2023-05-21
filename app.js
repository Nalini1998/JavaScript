const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write a function, handleSuccess()
const handleSuccess = (value) => {
  console.log(value);
}

// Write a function, handleFailure()
const handleFailure = (value) => {
  console.log(value);
}

checkInventory(order).then(handleSuccess, handleFailure);
