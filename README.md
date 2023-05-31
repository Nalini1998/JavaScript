### **BUILDING INTERACTIVE WEBSITES**
# **Project: **Training Days****

As a seasoned athlete, one of my favorite activities is running marathons. I use a service called **Training Days** that sends me a message for the event I signed up for and the days I have left to train.

Since I also code, **Training Days** has asked me to help them solve a problem: The program currently uses the wrong scope for its variables. They know this can be troublesome as their service evolves. 

In this Project, I will make **Training Days** more maintainable and less error-prone by fixing variable scopes.

<br>

# **Tasks**

#### **1. Let's take a look across my program**
Let’s begin by running the `trainingDays.js` file. In the `console` we can see that the program is broken!

Ideally, the `getRandEvent()` function selects an event at random. The `getTrainingDays()` function returns the number of days to train based on the event selected. The `logEvent()` and `logTime()` functions print the athlete `name`, `event`, and number of `days` to the `console`.

But poorly scoped variables are causing `errors`.

<br>

## **Expand days scope**

<br>

#### **2. To avoid the ReferenceError, declare days within the getTrainingDays function, before the if statement.**

<br>

#### **3. Delete the three let's within the if/else if statements.**
**Run** the program again: no error, but days is `undefined!` New `days` variables are being defined in the scope of each `if/else` `if` statement.

**Delete** the three let's within the `if/else` `if` statements.

#### **4. Run the program again**.
**Run** the program again: `fixed!` Now the `if/else` `if` statements are changing the original days rather than defining a new one.

<br>

## **Make name global**

<br>

#### **5. Let’s avoid this repetition by adding name as the first parameter for each function.**
The log functions - `logEvent()` and `logTime()` - use the same name variable. There seems to be a problem with the scoping; We can tell by the amount of duplicate code here! In addition to variables scoped too broadly, duplicate code can indicate that a variable may be scoped too tightly.

Let’s avoid this repetition by adding `name` as the first parameter for each function.

<br>

#### **6. Move the name variable to global scope.**

<br>

#### **7. Pass name as the first argument to `logEvent()` and `logTime()`.**

<br>

#### **8. Check that the program still works! Run it and check the output.**

<br>

## **Make random local**

<br>

#### **9. Try the functions for another competitor.**

```
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
```

<br>

#### **10. Run the program. The events are assigned randomly, but Nala and Warren are running the same events!**

<br>

#### **11. At the top of the file, move the random variable from the global scope to block scope within the getRandEvent function.**
We see that the `random` variable is defined in the global scope. Each time `getRandEvent()` is called, it uses the same value.

At the top of the file, **move** the `random` variable from the **global scope** to **block scope** within the `getRandEvent` function.

<br>

#### **12. Run the program a few times to make sure the results are randomized.**

Well done! **Training Days** is more maintainable and less error-prone. Run the program a few times to make sure the results are randomized.

### ***This Project was wrote by [Nalini Vo](https://github.com/Nalini1998)***