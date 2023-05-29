// create a function named getUserChoice
// toLowerCase() function to make the userInput all lowercase

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();  
// Inside getUserChoice(), write an if/else statement
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { 
    return userInput;
  } else {
    return("Error! Please type 'rock'; 'paper'; 'scissors' or 'bomb");
  }
}

// Create a new function named getComputerChoice
// return either 'rock', 'paper', or 'scissors'
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
      return 'rock'
      case 1:
      return 'paper'
      case 2:
      return 'scissors'
  }
};

// Create a function named determineWinner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
    }

// userChoice is 'rock' and computerChoice is 'paper'
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "That's a pity! The computer won!";
    } else {
      return 'Congrats! You won!';
    }
}

// userChoice is 'rock' and computerChoice is 'scissors' or 'rock'
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "That's a pity! The computer won!";
      } else {
      return 'Congrats! You won!';
    }
  }
// userChoice is 'scissors' and computerChoice is 'rock'
  if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
      return "That's a pity! The computer won!";
      } else {
      return 'Congrats! You won!';
    }
  }
}

// create a function named playGame
// create a variable named userChoice equal to the result of getUserChoice()
const playGame = () => {
  const userChoice = getUserChoice('paper');
// create another variable named computerChoice equal getComputerChoice()
  const computerChoice = getComputerChoice();
// print them to the console
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
// call the determineWinner() function pass userChoice and computerChoice
  console.log(determineWinner(userChoice, computerChoice));
};

// to start the game, call the playGame() function
playGame();