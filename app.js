console.log("This is the first line of code in app.js.");

// Create a function usingSTO() have no parameters
  const usingSTO = () => {
    console.log("This is the first line of synchronous code");
  }

// invoke the setTimeout() function
  setTimeout(usingSTO, 3000);

// Keep the line below as the last line of code:
  console.log("This is the last line of code in app.js.");