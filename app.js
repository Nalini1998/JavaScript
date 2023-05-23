const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Create 3 variables each assigned to a separate promise:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');

const checkPants = checkAvailability('pants', 'Favorite Supply Co.');

const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

// Promise.all(): checkSunglasses, checkPants, and checkBags.
const promiseArray = [checkSunglasses, checkPants, checkBags];
 
// Chain a .then() to the promise pass in onFulfill to serve
Promise.all(promiseArray)
  .then(onFulfill)
  .catch(onReject);
// Add a .catch() to the chain  pass in onReject to serve


