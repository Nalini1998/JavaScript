let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Create a generateTarget() function
const generateTarget = () => {
// return a random integer between 0 and 9
  return Math.floor(Math.random() * 10);
}

// Create a compareGuesses() function
const compareGuesses = (humanGuess, computerGuess, target) => {
//
  if (humanGuess < 0 || humanGuess > 9) { 
    alert('Please guess from 0 to 9 only!'); 
  } else {
      const humanDeviation = getAbsoluteDistance(humanGuess, target);
      const computerDeviation = getAbsoluteDistance(computerGuess, target);
      return (humanDeviation <= computerDeviation);
  }
//
  const humanDifferent = Math.abs(target - humanGuess);
  const computerDifferent = Math.abs(target - computerGuess);
  if (humanDifferent <= computerDifferent) {
    return true;
  } else {
    return false;
  }
}

// Create an updateScore() function
const updateScore = winner => {
  if (winner === "human") {
    return humanScore++;
  } else if (winner === "computer") {
    return computerScore++;
//    else
    }
  }
// Create an advanceRound() function
const advanceRound = () => {
  currentRoundNumber++;
}
