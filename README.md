### **BUILDING INTERACTIVE WEBSITES:**

# **Project: Kelvin Weather Focast**

<br>

Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

_With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit._

![Image](/4.%20Kelvin%20Weather%20Focast/Kelvin%20Thermometers.JPG)


<br>

## **Kelvin, Celsius, and Fahrenheit thermometers**
_For example, 283 K converts to 10 °C which converts to 50 °F._

## **Tasks**


#### **1. Create a kelvin variable and set it equal to 293**

The forecast today is `293` Kelvin. To start, create a variable named `kelvin`, and set it equal to `293`.

The value saved to `kelvin` will stay **constant**. Choose the variable type with this in mind.

> **Hint:**
Here’s how our code should look:
`const kelvin = 293;`

<br>


#### **2. Write a comment above that explains this line of code.**

> **Hint:**
Add single line comments with `//`.

<br>

#### **3. Convert Kelvin to Celsius**

Celsius is similar to Kelvin — the only difference is that Celsius is **273** degrees less than Kelvin.

Let’s convert Kelvin to Celsius by subtracting `273` from the `kelvin` variable. Store the result in another variable, named `celsius`.

> **Hint:**
Here’s how our code should look:\
`const celsius = kelvin - 273;`

<br>

#### **4. Write a comment above that explains this line of code.**


<br>

#### **5. Use the below equation to calculate Fahrenheit**
Use this equation to calculate **Fahrenheit**, then store the answer in a variable named `fahrenheit`.

`Fahrenheit = Celsius * (9/5) + 32`

In the next step we will round the number saved to `fahrenheit`. Choose the variable type that allows us to change its value.

> **Hint:**
Use the provided formula to assign the correct value to `fahrenheit`, like so:\
`let fahrenheit = celsius * (9 / 5) + 32;`

#### **6. Write a comment above that explains this line of code.**

<br>

#### **7. Round down the Fahrenheit temperature**

> When we convert from **Celsius** to **Fahrenheit**, we often get a decimal number.

Use the `.floor()` method from the built-in Math object to round down the Fahrenheit temperature. **Save** the result to the `fahrenheit` variable.

> **Hint:**
Here’s how our code should look:\
`fahrenheit = Math.floor(fahrenheit);`

<br>

#### **8. Write a comment above that explains this line of code.**

<br>

#### **9. Use console.log and string interpolation to log the temperature in fahrenheit to the console as follows:**

`The temperature is TEMPERATURE degrees Fahrenheit.`

Use string interpolation to replace `TEMPERATURE` with the value saved to `fahrenheit`.

> **Hint:**
To interpolate the string correctly, our code should look like:
```
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
```
<br>

#### **10. Run our program to see the results!**

> **Hint:**
293 Kelvin is about 68 degrees Fahrenheit.

<br>

#### **11. Change the value of kelvin and run the program again**
By using variables, our program should work for any Kelvin temperature - just change the value of `kelvin` and run the program again.

***What’s 0 Kelvin in Fahrenheit?***

> **Hint:**
We’ll need to go back to the top of our program and set kelvin to 0.
`const kelvin = 0;`\
***0 Kelvin is equivalent to -460 degrees Fahrenheit!***

<br>

#### **12. Extra practice**

_Great work! Kelvin can now publish his forecasts in Celsius and Fahrenheit._
_If we’d like Extra practice, try this:_

**Convert celsius to the Newton scale using the equation below**

> `Newton = Celsius * (33/100)`

Round down the Newton temperature using the `.floor()` method\
Use `console.log` and string interpolation to `log` the temperature in `newton` to the `console`

> **Hint:**
```
// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);
```

<br>

### ***This Project was wrote by [Nalini Vo](https://github.com/Nalini1998)***