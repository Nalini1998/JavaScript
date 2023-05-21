const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // myExecutor function passes into the Promise constructor
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
  };
  
  // orderSunglasses function passes into the Promise constructor
  const orderSunglasses = () => {
    return new Promise(myExecutor);
  };
  
  // Create orderPromise variable to return the value of orderSunglasses function
  const orderPromise = orderSunglasses();
  
  // log orderPromise to the console
  console.log(orderPromise);
  
  // Type node app.js in the terminal and hit enter