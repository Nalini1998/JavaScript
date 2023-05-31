const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // Expand days scope
  const getTrainingDays = event => {
  // declare days within the getTrainingDays function, before the if statement
  // delete the three let‘s within the if/else if statements
    let days;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
  
  // Make name global
  // move the name variable to global scope
  const name = 'Nala';
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  // pass name as the first argument to logEvent() and logTime()
  logEvent(name, event);
  logTime(name, days);
  
  // Make random local
  // Try the functions for another competitor
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Warren';

  logEvent(name2, event2);
  logTime(name2, days2);
  