### **BUILDING INTERACTIVE WEBSITES**
# **Race Day**

ABC’s annual race is just around the corner! This year, we have a lot of participants. I have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this: `registration-timeline`

Here’s how our registration works. There are **adult** runners _(over 18 years of age)_ and **youth** runners _(under 18 years of age)_. They can register **early** or **late**. Runners are assigned a race number and start time based on their **age** and **registration**.

### **Race number:**

- Early adults receive a race number at or above 1000.
- All others receive a number below 1000.

### **Start time:**

- Adult registrants run at 9:30 am or 11:00 am.
- Early adults run at 9:30 am.
- Late adults run at 11:00 am.
- Youth registrants run at 12:30 pm _(regardless of registration)._

_But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project._

<br>

# **Tasks**

#### **1. Race numbers are assigned randomly. We’ve provided the necessary code at the top of the file.**

<br>

#### **2. Create a variable that indicates whether a runner registered early or not.**

> Set it equal to a Boolean value. We'll change this later as we test different runner conditions.

<br>

#### **3. Create a variable for the runner’s age and set it equal to a number.**

> Set it equal to a Boolean value. We'll change this later as we test different runner conditions.

<br>

#### **4. Create a control flow statement that checks whether the runner is an adult AND registered early.**

> Add 1000 to their `raceNumber` if this is `true`.

<br>

#### **5. Create a separate control flow statement below the first (starting with if again).**

> This statement will check age and registration time to determine race time.

> For runners over 18 who registered early, log a statement to the console telling them that they will race at 9:30 am. Include their `raceNumber`.

<br>

#### **6. Write the corresponding else if statement to return "Late adults run at 11:00 am"**

> Since we already checked for early adults we can write a statement like this: `else if` runner is over 18 AND did not register early they will race at 11:00am.

> Within that, log a string to the `console` telling them that they will race at 11:00 am. Include their `raceNumber`.

<br>

#### **7. Log a statement to the console telling them that they will race at 12:30 pm**
> `"Youth registrants run at 12:30 pm (regardless of registration)"`

> For people who are under 18, log a statement to the console telling them that they will race at 12:30 pm. Include their `raceNumber`.

<br>

#### **8. Verify that the correct statements are printing to the console!**
> Enter different combinations of values for the two variables you created and run your code several times. Verify that the correct statements are printing to the `console`!

<br>

#### **9. Logs a statement to the console for the runners (exactly 18 years old)**
> Add an else statement that logs a statement to the console telling the runners (exactly 18 years old) to see the registration desk.

<br>

### ***This Project was wrote by [Nalini Vo](https://github.com/Nalini1998)***