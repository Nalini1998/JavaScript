### **BUILDING INTERACTIVE WEBSITES**
# **Rock; Paper or Scissors**
**Rock;  Paper or Scissors** is a classic two player game. Each player chooses either **Rock;  Paper or Scissors**. The items are compared, and whichever player chooses the more powerful item wins.

<br>

**The possible outcomes are:**

- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there’s a tie, then the game ends in a draw.

**Our code will break the game into four parts:**

- Get the user’s choice.
- Get the computer’s choice.
- Compare the two choices and determine a winner.
- Start the program and display the results.

<br>

# **Tasks**

<br>

#### **1. Create a function named getUserChoice that takes a single parameter userInput**

The user should be able to choose **'rock', 'paper'**, or **'scissors'** when the game starts.

Using `const` and arrow function syntax, create a function named `getUserChoice` that takes a single parameter `userInput`.

<br>

#### **2. Make the userInput all lowercase**
Since a user can pass in a parameter, such as `'Rock'` or `'rock'` with different capitalizations, begin by utilizing JavaScript’s `toLowerCase()` function to make the `userInput` all lowercase.

We can use code like this:

`userInput = userInput.toLowerCase();`

<br>

#### **3. Inside getUserChoice(), write an if/else statement**

When getting the user's choice, we should also check to make sure that the user typed a valid choice: **'rock', 'paper'**, or **'scissors'**.

Inside `getUserChoice()`, write an `if/else` statement that makes sure the `userInput` is either **'rock', 'paper'**, or **'scissors'**. If it does, then return the userInput. If not, use console.log to print an error message to the console.

<br>

#### **4. Test the getUserChoice function**

Test the function by calling it with valid and invalid input, and printing the results to the `console`.
> We can delete this when you know your function works.

<br>

#### **5. Create a new function named getComputerChoice** 
Now we need to have the **computer make a choice**.

Create a new function named `getComputerChoice` with no parameters. Inside its block, utilize `Math.random()` and `Math.floor()` to get a whole number between **0** and **2**. Then, depending on the number, return either **'rock', 'paper'**, or **'scissors'**.

<br>

#### **6. Test the getUserChoice function**
Test the function by calling it with valid and invalid input, and printing the results to the `console`.
> We can delete this when you know your function works.

<br>

#### **7. Create a function named determineWinner**
_Now it’s time to **determine a winner**._

Create a function named `determineWinner` that takes two parameters named `userChoice` and `computerChoice`. This function will compare the two choices played and then return if the human player won, lost, or tied.

Let’s deal with the tie condition first. Within the `determineWinner()` function, write an `if` statement that checks `if` the `userChoice` parameter equals the `computerChoice` parameter. If so, return a string that the game was a tie.

<br>

#### **8. Checks if the userChoice is 'rock'**
_If the game is not a tie, we'll need to determine a winner._

Begin by writing an `if` statement that checks if the `userChoice` is `'rock'`. Inside the `if` statement’s block, write another `if/else` statement. 

The inner `if/else` should check if the `computerChoice` is `'paper'`. If so, return a message that the computer won. If not, return a message that the user won.

<br>

#### **9. Another statement in case the userChoice is 'paper'**

Inside this `if` statement, the `computerChoice` must be either `'scissors'` or `'rock'`. Write logic that will return a winner.

<br>

#### **10. Another one in case the userChoice is 'scissors'.**

Inside of this `if` statement, the `computerChoice` must either be `'rock'` or `'paper'`. Write logic that will return a winner.

<br>

#### **11. Don’t forget to test our function!**

<br>

#### **12. Create a function named playGame**
Everything is set up. Now we need to start the game and `log` the results.

Create a function named `playGame`.

Inside the `playGame()` function, create a variable named `userChoice` set equal to the result of calling `getUserChoice()`, passing in either `'rock'`, `'paper'`, or `'scissors'` as an argument.

Create another variable named `computerChoice`, and set it equal to the result of calling `getComputerChoice()`.

Under both of these variables, use `console.log` to print them to the `console`.

<br>

#### **13. Finally, let’s determine who won.**

Inside the `playGame()` function, call the `determineWinner()` function. Pass in the `userChoice` and `computerChoice` variables as its parameters. Make sure to put this function call inside of a `console.log()` statement so we can see the result.

Then, to start the game, call the `playGame()` function on the last line of our program.

<br>

#### **14. Review our Code** 