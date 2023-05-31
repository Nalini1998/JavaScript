// create a function named getSleepHours with the day parameter
const getSleepHours = day => {
  // return the number of hours you slept by using switch statement
    switch (day) {
      case 'monday':
      return 6;
     case 'tuesday':
      return 5;
     case 'wednesday':
      return 8;
     case 'thursday':
      return 2;
     case 'friday':
      return 4;
     case 'saturday':
      return 4;
     case 'sunday':
      return 6;
    }
  };
  
  // test the function works by printing the results to the console.
  // console.log(getSleepHours('monday'));
  
  // create a new getActualSleepHours function
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  // create a new getIdealSleepHours function
  const getIdealSleepHours = () => {
  // create a new idealHours function
  // return the idealHours multiplied by 7
    const idealHours = 8 
      return idealHours*7;
    } 
  
  // console.log(getActualSleepHours()); 
  // console.log(getIdealSleepHours()); 
  
  // create a function named calculateSleepDebt
  const calculateSleepDebt = () => {
  // create actualSleepHours equal to the getActualSleepHours() function 
    const actualSleepHours = getActualSleepHours();
  
  // create idealSleepHours equal to the getIdealSleepHours() function 
    const idealSleepHours = getIdealSleepHours();
  
  // write a few if/else statements 
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You got  ${(actualSleepHours - idealSleepHours)}  hour(s) more sleep than you needed this week`);
    } else {
      console.log(`You got  ${(idealSleepHours - actualSleepHours)}  hour(s) less sleep than you needed this week. You should get some rest`);
    }
  }
  
  // start the program by calling the calculateSleepDebt()
  calculateSleepDebt();