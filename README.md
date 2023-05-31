### **BUILDING INTERACTIVE WEBSITES**
# **Project: Sleep Debt Calculator**

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if we're getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far we are from our weekly sleep goal.

<br>

# **Tasks**

#### **1. Create a getSleepHours function with day parameter.**
The first problem to solve is determining how many hours of sleep we got each night of the week.

We can create a function that returns any given night’s number of hours of rest. Instead of writing seven different functions _(one for each day of the week)_, let’s write one function with a parameter for the day.

Create a function named `getSleepHours` with a single parameter named `day`.

<br>

#### **2. Use an if/else or switch statement to implement.**
The function should accept a `day` as an argument and return the number of hours we slept that night.

For instance, if we got 8 hours of sleep on Monday night, calling `getSleepHours('monday')` should return 8.

_Use an `if/else` or `switch` statement to implement this._

<br>

#### **3. Test the function**
Test the function by calling it multiple times and printing the results to the `console`.

<br>

#### **4. Create getActualSleepHours function with no parameters**
Now that we’ve written a function to get the sleep hours for each night, we need to do three things:

- Get the total sleep hours that we actually slept;
- Get the ideal sleep hours that we prefer;
- Calculate the sleep debt, _if any_.

To get the total sleep hours that we actually slept, create a new function named `getActualSleepHours` that takes no parameters.

<br>

#### **5. Call the getSleepHours() for each weekday and return the sum**
Inside the `getActualSleepHours()` function, call the `getSleepHours()` function for each day of the week. Add the results together and return the sum using an implicit return.

<br>

#### **6. Declare idealHours variable named and set its value to our ideal hours per night.**
To get the ideal sleep hours that we prefer, create a function named `getIdealSleepHours` with no parameters.

Inside the function, declare a variable named `idealHours` and set its value to your ideal hours per night. Then return the `idealHours` multiplied by **7**.

> We’ll want to multiply by 7 to get the total hours we prefer per week.

<br>

#### **7. Test the function**
Test the function by calling it multiple times and printing the results to the `console`.

<br>

#### **8. Create a function named calculateSleepDebt with no parameters.**
_Now that we can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt._

Create a function named `calculateSleepDebt` with no parameters.

Inside of its block, create a variable named `actualSleepHours` set equal to the `getActualSleepHours()` function call.

Then, create another variable named `idealSleepHours`, set equal to the `getIdealSleepHours()` function call.

<br>

#### **9. Write a few if/else statements to output the result**
Now that we have `actualSleepHours` and `idealSleepHours`, we can write a few `if/else` statements to output the result to the `console`. The function should fulfill this logic:

> If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.

> If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.

> If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.

<br>

#### **10. To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().**

<br>

#### **11. On the last line of the program, start the program by calling the calculateSleepDebt() function.**

<br>

#### **12. For extra practice, try these:**

`getActualSleepHours()` could be implemented without calling `getSleepHours()`. Use literal numbers and the `+` operator to rewrite `getActualSleepHours()`. It should still `return` the total actual hours slept in the week.

Some people need to sleep longer than others. Rewrite `getIdealSleepHours()` so that we can pass it an argument, like `getIdealSleepHours(8)` where 8 is the ideal hours per night. Update the call to `getIdealSleepHours()` in `calculateSleepDebt()` too.


### ***This Project was wrote by [Nalini Vo](https://github.com/Nalini1998)***