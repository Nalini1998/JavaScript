### **BUILDING INTERACTIVE WEBSITES**
# **Project: Bouncing Balls**

_Circles are powerful and expressive shapes._

Imagine a sketch with only one gray circle, small and tucked away in the corner. What mood would this convey? Isolation or shyness, perhaps. Now picture a ginormous, yellow circle in the very center of the image. This would express happiness or maybe remind us of the sun. If we then add animation to both circles, our shape will more fully embody the emotion we want it to express. 

To better communicate shyness, we could have the small gray ball moving out of the canvas frame slowly, as if it were hiding. For the yellow circle, we can animate it to pulse quickly, so it looks like it’s alive!

Our single white-on-black bouncing ball from the Animation lesson was on the sad side. It was not taking up too much space, there was no color, and the pace remained the same. So let’s add some life to our bouncing ball! Together, we will give our circle some vitality and some friends of many colors and sizes! Using arrays and the p5.js animation techniques we just covered, we will change our bouncing ball’s personality from boring to dynamic!

<br>

# **Tasks**

<br>

## **Set Up Global Variables**

<br>

#### **1. First, let’s set up our global variable**
Take a look at the `p5.js` sketch to the right. Right now, most of the sketch is empty. In the `setup()` function, a canvas is created with the size of `windowWidth` and `windowHeight`. 

In the `draw()` function, the background color is set to be `background(0, 50)`, which means it will have a black background with an alpha value of 50 (out of 255). Other than these presets, our sketch is ready for us to fill with many bouncing balls!

First, let’s set up our global variables. Since we are creating multiple balls, we will need to determine how many balls we want to bounce around in our sketch. In order to do this, create a variable called ballCount and set it equal to 100.

**Hint:**
Remember that global variables should be defined before the `setup()` function.

<br>

#### **2. Create a variable called x and y**
Now, we need to initialize empty arrays for the x and y positions for our bouncing balls. Below our ballCount variable, create a variable for the x positions called `x` and a variable for the `y` positions called `y`. Then, set the `x` and `y` variables to be empty arrays.

**Hint:**

_We can create a variable and initialize it to an empty array like this:_

```
let nameOfArray = [];
```
<br>

#### **3. Create variables to hold arrays of the bouncing balls’ speed, size, and color**
Similar to the task above, we need to create variables to hold arrays of the bouncing balls’ speed, size, and color.

Create global variables called `xSpeed` for the array of horizontal speeds, `ySpeed` for the array of vertical speeds, size for the array of varying sizes of the bouncing balls. Also define variables `r`, `g`, `b` for each red, green, and blue color value of the bouncing balls' fill colors.

Now, set all these variables equal to an empty array. We set up all these variables as arrays because we will be iterating through many balls to change and animate their properties continuously.

**Hint:**
_We can create a variable and initialize it to an empty array like this:_

```
let nameOfArray = [];
```

Make sure that all six new variables are defined and initialized as global variables before the `setup()` function.

<br>

## **Set Up Initial Properties**

<br>

#### **4. Let's set the initial values for the properties for our balls**
Inside our `setup()` function and below our `createCanvas()` function, let's set the initial values for the properties for our balls. These initial values will be the starting values the balls are drawn at when the sketch runs.

Since we want to create balls with varying properties, we will need to use a `for` loop to initialize each array's values for every ball. Create a `for` loop using the iterator variable `i` to iterate over the value of the `ballCount` variable.

**Hint:**
_We can create a for loop that iterates maxValue number of times like this:_

```
for(let i = 0; i < maxValue; i++){
  // Code to iterate goes here
}
```
<br>


#### **5. Iterate through the elements in the x and y array**
Inside the for loop, iterate through the elements in the 'x' and 'y' array to set the 'x[i]' positions to be the canvas's horizontal center and the 'y[i]' positions to be the canvas's vertical center.

**Hint:**
_We can set the horizontal and vertical center of the canvas relative to width and height variables._

<br>

#### **6. Iterate through the elements in the xSpeed and ySpeed**
Still inside the `for` loop, iterate through the elements in the `xSpeed` and `ySpeed` arrays. Set the `xSpeed[i]` to a random value between -5 and 5 (but not including 5) and the `ySpeed[i]` to a random value between -5 and 5 (also not including 5).

**Hint:**
_We can generate a random value between two values using the following syntax:_

```
random(firstValue, secondValue);
```

When two numeric values are given as arguments for the `random()` function, the function returns a random value between the first and the second value (but not including the second value itself).

<br>

#### **7. Add some variety to our bouncing balls**
_It's time to add some variety to our bouncing balls!_

Let's set our **100** circles to be random sizes!

Inside the `for` loop and below the speed values, set the value of the `size[i]` variable to be a random value between 10 and 50 (but not including 50).

**Hint:**
_We can generate a random value between two values using the following syntax:_

```
random(firstValue, secondValue); 
```

Keep in mind that the randomly generated number excludes the secondValue number itself. For example, the code snippet below will generate random decimal numbers between 1 and 10 but not including 10, meaning that the largest number that could be generated is 9.999999…

`random(1, 10);`

<br>

#### **8. Make our bouncing balls to be as many colors as possible**
We want our bouncing balls to be as many colors as possible! We can do this by setting our `r[i]`, `g[i]`, `b[i]` variables to be equal to a random value between 0 and 255 (including 255). Doing this will give our bouncing balls any random color possible in the RGB color spectrum—how fun!

Make sure we both do this inside the `for` loop.

**Hint:**
_We can generate a random value between two values using the following syntax:_

**random (value)**:
When one numeric argument is given to the `random()` function, it returns a random value between 0 and (but not including) the number. For example, in order to generate a random number between 1 and 10, including 10, our code would look like this:

```random(1, 11);```

<br>

## **Animate Movements**
#### **9. Create  for loop that iterates number of times**
Inside the `draw()` function and underneath the `background()` function, similar to the for loop we created in the `setup()` function, create another for loop that iterates ballCount number of times. We will be using this `for` loop to animate our bouncing balls.

**Hint:**
  we can create a for loop that iterates maxValue number of times like this:
```
for(let i = 0; i < maxValue; i++){
  // Code to iterate goes here
}

```

Make sure that this `for` loop is inside the `draw()` function underneath the `background()` function call.

<br>

#### **10. Set the position to x[i] and y[i]**
Let’s draw an ellipse for each of our 100 balls! Use the `ellipse()` function to set the **x** position to `x[i]`, the **y** position to `y[i]`, and the width and height to `size[i]`.

After we draw the ellipses and run the code, we will see white ellipses gathered in the middle of our canvas. We will get to animating and coloring these in the next steps!

**Hint:**
_We can generate a random value between two values using the following syntax:_

```
ellipse(x, y, ellipseWidth, ellipseHeight);
```

#### **11. Now, let’s animate the positions of our balls!**

We will be using the values of x and y arrays to position our balls. To animate the horizontal movement, let’s increment the `x[i]` value by `xSpeed[i]` value. Run our code to see the white ellipses move horizontally!

Make sure to do this inside the `for` loop but above the `ellipse()` function.

**Hint:**
We can increment the value of a variable by another variable by writing:

```
valueToBeIncremented += incrementValue;
```

The code above is the same as writing:

```
valueToBeIncremented = valueToBeIncremented + incrementValue;
```

<br>

#### **12. Let’s increment the y[i] value**
Now, still inside the `for` loop, let's increment the `y[i]` value by the value of the `ySpeed[i]` variable. This will move our ball vertically. Run our code to see the white ellipses move diagonally across all corners of the canvas!

Make sure to do this inside the `for` loop but above the `ellipse()` function.

**Hint:**
We can increment the value of `a` variable by another variable by writing:

```
valueToBeIncremented += incrementValue;
```
<br>

## **Animate Bounce**

<br>

#### **13. Reverse the horizontal direction of a ball**
Great, our balls are now moving! However, we want our balls to stay within the canvas and endlessly bounce from one wall to the next. We do this by writing a conditional statement that checks if the ball has hit any of the canvas’s sides. If a ball hits the left and right sides, we will reverse the direction.

Let's reverse the horizontal direction of a ball when it hits either the left or the right edge. 

Write an `if` statement that checks whether `x[i]` is smaller than 0 or greater than width. If either condition is `true`, reverse the direction of the horizontal speed by multiplying `-1` to `xSpeed[i]`.

Make sure our conditional statement is inside the `for` loop of the `draw()` function but above the `ellipse()` function.

**Hint:**
We can reverse the direction of the speed by multiplying `-1` to the speed variable like below:

```speed *= -1;```


The above code is the same as writing:

```speed = speed * -1;```

<br>

#### **14. Write another conditional statement that checks if the y position**
Below the first `if` statement, write another conditional statement that checks `if` the `y` position of a ball has touched the top or the bottom sides. Do this by writing an `if` statement that checks whether `y[i]` is smaller than 0 or (`||`) greater than height. If either condition is `true`, reverse the direction of the vertical speed by multiplying `-1` to `ySpeed[i]`.


**Hint:**
We can check `if` either of the two conditions is `true` using the `OR (||)` operator. To check `if` the `y` variable is smaller than 0 or greater than height, we would write:

```
if (y < 0 || y > height){
  // Code to reverse direction goes here
}
```

<br>

## **Style Ellipse**


#### **15. Let’s give color to our ellipses!**
_Our last steps are to style our bouncing balls!_

Let’s give color to our ellipses! Using the `fill()` function, set the red value of each ellipse to be `r[i]`, the green value to be `g[i]`, and the blue value to be `b[i]`.

Remember, we are still writing inside the `for` loop but above the `ellipse()` function.

**Hint:**
We can set the fill color of a shape with the following syntax:

```
fill(redValue, greenValue, blueValue);
```

<br>

#### **16. Create a more seamless looking motion**
To create a more seamless looking motion, write a function to set our ellipses to have no strokes.

Remember to do this before the `ellipse()` function call.

**Hint:**
We can prevent a shape from having the default black outline by calling the `noStroke()` function.

#### **17. Run Code**
Run our code to see the colorful balls bounce all over the place!

Optionally, play around with the values passed into the `random()` function. Change the number of balls there are from 100 to 500. 

What effects do these changes have on the look and feel of our sketch?

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***