  // Race numbers are assigned randomly
let raceNumber = Math.floor(Math.random() * 1000);

// Create a variable that indicates whether a runner registered early or not.
let earlyRegistered = false;

// Create a variable for the runner’s age and set it equal to a number
let runnerAge = 18;

// Check age and registration time to determine race time
// Add 1000 to their raceNumber if this is true
if (runnerAge > 18 && earlyRegistered) {
    raceNumber += 1000;
    console.log(`${raceNumber}: Early adults run at 09:30 am`);

// Write the corresponding else if statement
} else if (runnerAge > 18 && !earlyRegistered) {
    console.log("Late adults run at 11:00 am");
// log a statement to the console telling them that they will race at 12:30

} else if (runnerAge < 18) {
    console.log("Youth registrants run at 12:30 pm (regardless of registration)");

} else {
    console.log('Runners who are 18 years old should see the registration desk.');
}
