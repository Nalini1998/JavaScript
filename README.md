# **Project: Number Guesser Game**

## **Overview**
This project is slightly different from others I have encountered thus far. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project I’ll be building. There are many possible ways to correctly fulfill all of these requirements, and I should expect to use my documents, the internet, and other resources when I encounter a problem that I cannot easily solve. In order to complete this project, I should have have JavaScript Functions knowledges.

## **Project Goals**
In this project, I’ll write JavaScript functions to power a small guessing game. My code will run in the browser instead of the terminal, and I can use my browser's **console** to help me test my functions and view any **syntax errors**.

## **Project Requirements**
In this project, I’ll write four functions in **script.js**. The provided code in **game.js** that will call my functions based on user interactions. 

As I complete this project, I need to make sure that all of my functions are named exactly as specified within these tasks so that they can be called correctly when the game is played. In this project, my JavaScript functions are incorporated into a website that also uses HTML/CSS. 

## **Setup Instructions**
I'll need to open and work in **script.js** in a text editor, and open **index.html** in a browser to test my code. 

# **Tasks**

#### **1. Create a generateTarget() function.**
This function should return a random integer between 0 and 9.

The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.

**Hint:**
`Math.floor()` and `Math.random()` should help to generate this number.

<br>

#### **2. Create a `compareGuesses()` function.**
This function:

- Has **three parameters** representing the **human guess**, a **computer guess**, and the **secret target** number to be guessed.

- Determines which player _(human or computer)_ wins based on which guess is closest to the target. If both players are tied, the human user should win.

- Return `true` if the human player wins, and `false` if the computer player wins.

- The purpose of this function is to be called each round to determine which guess is closest to the target number.

**Hint:**
> I’ll want to compare the absolute value of the difference between the target and each guess, because each guess could be greater or less than the target, and the only thing that matters is the distance between the two.

> The `Math.abs()` method can help to find absolute values _(or we can write own own absolute value function!)_.

<br>

#### **3. Create an `updateScore()` function.**
This function:

- Has a single parameter. This parameter will be a string value representing the winner.
- Increases the score variable _(humanScore or computerScore)_ by **1** depending on the winner passed in to `updateScore`. The string passed in will be either _'human'_ or _'computer'_.
- Does not need to return any value.
- The purpose of this function is to be used to correctly increase the winner's score after each round.

**Hint:**
> This function can utilize an `if…else` statement.

<br>

#### **4. Create an `advanceRound()` function.**
- This function should increase the value of `currentRoundNumber` by **1**.

- The purpose of this function is to be used to update the round number after each round.

- After completing `advanceRound()`, my Number Guesser game should be fully operational. I should be able to make guesses, see my or the computer score increase correctly, move to the next round, and see the correct round displayed.


**Hint:**
This function adds 1 to the value of `currentRoundNumber()`.

<br>

#### **5. Test that my code is working properly by invoking my newly written functions within script.js with sample inputs.** 
I can delete this code once I'am convinced that everything is working as it should.

**Hint:**
> Use the `console.log()` method to see the output of my `advanceRound()` and `updateScore()` functions in my browser's inspector `console`. 
> To open the inspector `console`, I can either press ctrl or **cmd + shift + I** or right-click inside of my browser window, then click **“Inspect”** or **“Inspect Element”**. Click the **tab** that says **“console”**.

My browser `console` will print outputs that might not be relevant to me here. To only see logs from my Number Guesser program I'll need to filter the `console` output. That filter may be called something different depending on which browser I am using:

In **Chrome**, I'll click the filter called **“info”**.
In **Safari** and **Firefox**, I’ll click the filter called **“Logs”**.
Each time I run my program, it will refresh, resetting the values of my score and `currentRoundNumber` variables, so I’ll want to call my functions multiple times to see their value increase by more than one.

<br>

#### **6. Extra Task**
I probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate `getAbsoluteDistance()` function that takes two numbers and returns the distance, and then use that inside my `compareGuesses()` function.

**Add** functionality to check whether the user guess is between 0 and 9 and `alert()` the user that their number is out of range. It's not possible to set a number outside this range with the **+** and **=** buttons, but users can do so by typing directly in the input field.

**Hint:**
> For the `getAbsoluteDistance()` function `Math.abs()` will be utilized again.

> For checking a range, one possible check is `if ((x >= xmin) && (x <= xmax))`.

### ***This Project was wrote by [Nalini Vo](https://github.com/Nalini1998)***