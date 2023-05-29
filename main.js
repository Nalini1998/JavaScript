// define a variable called userName
const userName = 'Meow';

// create a ternary expression that decides what to do
console.log(userName !== ''? `Hello ${userName}` : 'Hello!'); 

// Create a variable named userQuestion
const userQuestion = 'Can I try this game?';

// Write a console.log() for the userQuestion
console.log(userName === ''? '' : `${userName}: ${userQuestion}`);

// Create randomNumber variable, and set it equal to this expression
const randomNumber = Math.floor(Math.random() * 8);

// Create one more variable named eightBall
const eightBall = '';

// Create a control flow that takes in the randomNumber
switch (randomNumber) {
  case 0: 
    console.log('It is certain');
    break;
  case 1: 
    console.log('It is decidedly so');
    break;
  case 2: 
    console.log('Reply hazy try again');
    break;
  case 3: 
    console.log('Cannot predict now');
    break;
  case 4: 
    console.log('Do not count on it');
    break;
  case 5: 
    console.log('My sources say no');
    break;
  case 6: 
    console.log('Outlook not so good');
    break;
  case 7: 
    console.log('Signs point to yes');
}


