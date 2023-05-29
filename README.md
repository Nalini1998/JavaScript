### **BUILDING INTERACTIVE WEBSITES**

# **Project: Magic Eight Ball**

We’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

In this project we will build a **Magic Eight Ball** using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.

# **Tasks**

#### **1. Define a variable called userName**

In the first line of the program, define a variable called `userName` that is set to an empty string.

If the user wants, they can enter their name in between the quotation marks.

<br> 

#### **2. Create a ternary expression that decides what to do if the user enters a name or not**
Below this variable, create a ternary expression that decides what to do if the user enters a `name` or not. If the user enters a name — like `'Jane'` — use string interpolation to `log` `Hello, Jane!` to the `console.` Otherwise, simply `log` `Hello!`.

<br>

#### **3. Create a variable named userQuestion.**
The value of the variable should be a string that is the question the user wants to ask the **Magic Eight Ball**.

<br>

#### **4. Write a console.log() for the userQuestion**
Stating what was asked. We can include the user’s name in the `console.log()` statement, if we wish!

<br>

#### **5. Create another variable, and name it randomNumber.**
We need to generate a random number between 0 and 7.\
Create another variable, and name it `randomNumber`. \
Set it equal to this expression, which uses two methods 
`(Math.floor()` and `Math.random())` from the Math library.
```
Math.floor(Math.random() * 8);
```
<br>

#### **6. Create one more variable named eightBall**
Create one more variable named `eightBall`, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of `randomNumber`.

<br>

#### **7. We need to create a control flow that takes in the randomNumber**
We need to create a control flow that takes in the `randomNumber` we made in _step 5_, and then assigns `eightBall` to a reply that a **Magic Eight Ball** would return. Think about utilizing `if/else` or `switch` statements. 

_Here are **8 Magic Eight Ball** phrases that we’d like to save to the variable `eightBall`:_

`'It is certain'`\
`'It is decidedly so'`\
`'Reply hazy try again'`\
`'Cannot predict now'`\
`'Do not count on it'`\
`'My sources say no'`\
`'Outlook not so good'`\
`'Signs point to yes'`

If the `randomNumber` is **0**, then save an answer to the `eightBall` variable; if `randomNumber` is **1**, then save the _next answer, and so on_. If we’re feeling creative, make our own responses!

<br>

#### **8. Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.**

<br>

#### **9. Run our program a few times to see random results appear in the console!**

<br> 

### ***This Project was wrote by [Nalini Vo](https://github.com/Nalini1998)***