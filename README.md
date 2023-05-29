### **BUILDING INTERACTIVE WEBSITES:**

# **Dog Years Calculation**

Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in `'dog years'` to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. 

***How old would we be if we were the dogs?***

***Here’s how we convert our age from `'human years'` to `'dog years'`:***

> The first two years of a dog's life count as **10.5** dog years each.\
> Each year following equates to **4** dog years.\
> Before we start doing the math in our head, let a computer take care of it! With our knowledge of math operators and variables, use JavaScript to convert our human age into dog years.

<br>

# **Tasks**


#### **1. Create the myAge variable, set it equal to our age.**

> Write a comment that explains this line of code.

<br>

#### **2. Create the earlyYears variable and save the value 2 to it. Note, the value saved to this variable will change.**

> Write a comment that explains this line of code.

<br>

#### **3. Multiply the value saved to earlyYears by 10.5 and reassign it.**

Use the multiplication assignment operator to multiply the value saved to `earlyYears` by **10.5** and reassign it to `earlyYears`.

<br>

#### **4. Set the result equal to a variable called laterYears**

Since we already accounted for the first two years, take the `myAge` variable, and subtract **2** from it.

Set the result equal to a variable called `laterYears`. We’ll be changing this value later.

> Write a comment that explains this line of code.

<br>

#### **5. Multiply the laterYears variable by 4.**

Multiply the `laterYears` variable by **4** to calculate the number of dog years accounted for by our later years. 

Use the multiplication assignment operator to multiply and assign in one step.

> Write a comment that explains this line of code.

<br>

#### **6. Print earlyYears and laterYears to the console**

If we’d like to check our work at this point, print `earlyYears` and `laterYears` to the `console`. Are the values what you expected?

<br>

#### **7. Add earlyYears and laterYears together**

Add `earlyYears` and `laterYears` together, and store that in a variable named `myAgeInDogYears`.

> Write a comment that explains this line of code.

<br>

#### **8. Store our name in myName variable**
_Let’s use a string method next._

Write our name as a string, call its built-in method `.toLowerCase()`, and store the result in a `myName` variable.

The `toLowerCase` method returns a string with all lowercase letters.

> Write a comment that explains this line of code.

<br>

#### **9. Displays our name and age in dog years**

Write a `console.log` statement that displays our name and age in dog years. Use string interpolation to display the value in the following sentence:
```
My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.
```
Replace `NAME` with `myName`, `HUMAN AGE` with `myAge`, and `DOG AGE` with `myAgeInDogYears` in the sentence above.

> Write a comment that explains this line of code.

<br>

#### **10. Review**

_Great work! We can convert any human age to dog years. Try changing `myAge` and see what happens._

**app.js**
```
// Create a variable named myAge
const myAge = 25;

// Create a variable named earlyYears
let earlyYears = 2;

// Multiply the value saved to earlyYears by 10.5
earlyYears *= 10.5;

// Set the result equal to a variable called laterYears
let laterYears = myAge - 2;

// Multiply the laterYears variable by 4
laterYears *= 4;

// Add earlyYears and laterYears together, and store that into myAgeInDogYears
let myAgeInDogYears = (earlyYears, laterYears);

// toLowerCase method returns a string with all lowercase letters
const myName = 'Nalini Vo'.toLowerCase();

console.log(earlyYears);
console.log(laterYears);

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
```

### ***This Project was wrote by [Nalini Vo](https://github.com/Nalini1998)***