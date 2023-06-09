### **BUILDING INTERACTIVE WEBSITES**
# **Project: Arrays - RGB Generator**

Let’s practice what we know about arrays and expand on a common area in web development: **Color!**

Color can be represented many different ways:

- through regular text, e.g. `'red'`.
- using Hex color code, e.g. `#FF0000`.
- RGB values, e.g. `rgb(255, 0, 0)`.
- [And many more!](https://en.wikipedia.org/wiki/Web_colors)

In this project, we’ll work with **RGB** values - using arrays to store the individual values. Then, we’ll use the randomly generated RGB values and gradually change the color of all the Box elements on the site.

We’ll work through:

- Using arrays to store number values.
- Storing elements in an array.
- Randomly assigning different colors to different element backgrounds.

<br>

# **Tasks**

## **Getting Started**

<br>

#### **1. Click on the Start a New Project button to start from a new template**
Make sure to log into our Wix account, otherwise we won’t be able to access the site for this project!

<br>

#### **2. Click the Save button to add this template to our collection of Wix sites**
Once we’ve loaded the template click the **Save** button to add this template to our collection of Wix sites. 

This allows us to revisit the site later to edit and alter as us please. The **Save** button can appear in either form, depending on screen size: Wix Save Button

<br>

#### **3. Prepare some questions to guide our exploration**
Take some time to explore the template website. Some questions to guide our exploration are:

- What elements are displayed? What are their IDs?
- In the Code Panel, what is already provided for us?
- When we preview the site, what is displayed? Do the buttons work?

<br>

## **Generating a Random RGB value**

<br>

#### **4. Declare a new function called createRandomColor()**
RGB values have 3 separate number values from 0 all the way to 255, e.g. `rgb(255, 0, 0)`. The first value determines how much `“red”` color appears, the 2nd value determines how much `“green”` is appears, and the last value determines the amount of `“blue”` - hence RGB.

In the Home page’s code, we may have noticed a helper function already provided for us `generateRandomNumber()` to help generate random number values. Below this helper function, declare a new function called `createRandomColor()` that doesn’t have any parameters.


**Hint:**
We’ll use `createRandomColor()` to piece together an actual RGB value from the helper function’s random numbers. Leave the body blank for now.

Our code should look like:

```
// Create our createRandomColor function below: 
function createRandomColor() {
 
}
```

<br>

#### **5. Creating an empty array named newColor**
`createRandomColor()` should eventually return a string that has the 3 values for RGB and we’ll need to implement the logic.

Start by creating an empty array named `newColor`, we’ll use this array to store the numerical values.

**Hint:**
Our code should look like:

```
function createRandomColor() {
  let newColor = [];
}
```

<br>

#### **6. newColor needs to be populated with 3 values**
This means we have to create a loop that runs 3 times. One handy tool we can use is a for loop to help us loop exactly 3 times.

**Hint:**

Just create the loop for now, we’ll add to the loop later.

Our loop might look like:

```
for(let i = 0; i < 3; i++) {
}
```
<br>

#### **7. Use the loop to populate newColor with 3 random numbers**
This means we’ll need to call `newColor.push()` with an argument of `generateRandomNumber()`.

<br>

#### **8. Return the value of newColor.join(',')**
After the loop, `newColor` should be an array populated with 3 numbers. But to make it easier to use, we’d want `newColor` to be a string that separates each number with a comma, like so: `“100,200,300”`.
 
Below our loop, return the value of `newColor.join(',')`. The `.join()` method will take all the values in the array and combine them into a string, each separated by the argument provided in the method call. 

**Hint:**

If we had an array:

```
let sampleArr = [100, 200, 300];
let joinedArr = sampleArr.join(',');
console.log(joinedArr); // Prints: '100,200,300'
```

Notice that `joinedArr` is now a string and it has all the values of `sampleArr` separated by a `,`.

Remember to also return the joined value! Our code should look like:

```
function createRandomColor() {
  let newColor = [];
  while (newColor.length < 3) {
    newColor.push(generateRandomNumber());
  }
  return newColor.join(',');
}
```

<br>

## **Changing the Box's Color**

<br>

#### **9. Start writing the code to change the first box**
With `createRandomColor()` correctly set up, we can now start writing the code to change the first box. All the Box elements are provided for us _(bigBox, firstCircle, secondCircle, etc…)_. 

There’s even a `changeBoxBtn` variable that selects the first button with the text: **Change Box Color**. We’ll be using this button to change the color of the biggest Box.

Start by adding an `.onClick()` event listener to `changeBoxBtn` that takes a callback function.

**Hint:**
_Our code will look like:_

```
changeBoxBtn.onClick(event => {
});
```

<br>

#### **10. Create newRGBvalue variable and give it a value of createRandomColor()**
We can now implement some logic for the event listener. Since we want to reassign the color of this Box, we should generate a new random color.

Inside the callback function, create `newRGBvalue` variable and give it a value of `createRandomColor()`.

**Hint:**
_Our code should look like:_

```
changeBoxBtn.onClick(event => {
  let newRGBvalue = createRandomColor();
});
```
<br>

#### **11. Access .style.backgroundColor property of bigBox and value assign into it**
Great, now we can use the RGB values to change the background color of bigBox.

To target the background color, access the `.style.backgroundColor` property of bigBox and assign it to be the string: `rgb(${newRGBvalue})`.

Preview our code and see the change take place when we click **Change Box Color**.

**Hint:**
When clicking on the **Change Box Color** the background color of the biggest Box should change!

Our code should look like:

```
changeBoxBtn.onClick(event => {
  let newRGBvalue = createRandomColor();
  bigBox.style.backgroundColor = `rgb(${newRGBvalue})`;
});
```

<br>

#### **12. Use bigBox's .style.borderColor property and reassign it**
_The background color changed, but the border is still black. Let’s also change that as well._

This time, use bigBox's `.style.borderColor` property and reassign it the same string from before: `rgb(${newRGBvalue})`.

Preview our code again to see both the background color and the border color change.

**Hint:**
Our code should look like:

```
changeBoxBtn.onClick(event => {
  let newRGBvalue = createRandomColor();
  bigBox.style.backgroundColor = `rgb(${newRGBvalue})`;
  bigBox.style.borderColor = `rgb(${newRGBvalue})`;
});
```

<br>

## **Changing All the Colors**

<br>

#### **13. Create allBoxes variable that stores all bigBox and all the circles**
We are able to change one Box's color, but we should be able to change all the Boxes! Since we want to change them all at once, the Boxes need to be grouped together. This calls for a new array!

Create `allBoxes` variable stores all bigBox and all the circles _(firstCircle, secondCircle, etc…)_.

**Hint:**
Even though the circles aren't shaped like a "box". They are still instances of Wix's Box element.

This code goes after the `.onClick()` event listener:

```
const allBoxes = [
  bigBox, 
  firstCircle, 
  secondCircle, 
  thirdCircle, 
  fourthCircle, 
  fifthCircle
];
```

<br>

#### **14. Create changeAllBtn variable and store the button inside the variable**
We also need to select the **Randomize Everything** button. It has an **ID** of `#changeAll`. So, create `changeAllBtn` variable and store the button inside the variable.

**Hint:**
To select an element by **ID**, use the `$w()` selector and pass in the **ID** `'#sampleID'`. In this case we'd need to call `$w('#changeAll')`.

Our code should look like:

```
const changeAllBtn = $w('#changeAll');
```

<br>

#### **15. Add an .onClick() event listener with a callback function**
With the button selected, we can add an `.onClick()` event listener with a callback function.

**Hint:**
Our code should look like:

```
changeAllBtn.onClick(event => {
 
});
```

<br>

#### **16. Iterate over the allBoxes with a .forEach() loop with the parameter box**
_Everything’s set up for us to start writing the logic to change every single Box!_

Inside the callback function, iterate over the allBoxes with a `.forEach()` loop with the parameter box.

**Hint:**
Remember that we' re writing this code inside of the `.onClick()` method’s callback function:

```
changeAllBtn.onClick(event => {
  allBoxes.forEach(box => {
 
  });
});
```

<br>

#### **17. Create boxRGBvalue variable with the value of createRandomColor()**
_It’s time to create new colors!_

Inside the `.forEach()`, create `boxRGBvalue` variable with the value of `createRandomColor()`.

**Hint:**
Our code should look like:

```
changeAllBtn.onClick(event => {
  allBoxes.forEach(box => {
    let boxRGBvalue = createRandomColor();
  });
});
```

<br>

#### **18. Reassign the Box’s background color and border color using boxRGBvalue**
_Now we need to reassign the Box's background color and Border color using `boxRGBvalue`._

Using our experience from changing the big Box's background color and border, apply that same code for all the Boxes!

When we've done, preview our site and try out the **Randomize Everything** button.

**Hint:**

- To access the background color use `box.style.backgroundColor`.

- To access the border color use `box.style.borderColor`.

- In both cases, we'll need to reassign the value `rgb(${boxRGBvalue})`.

Our code should look like:

```
changeAllBtn.onClick(event => {
  allBoxes.forEach(box => {
    let boxRGBvalue = createRandomColor();
    box.style.backgroundColor = `rgb(${boxRGBvalue})`;
    box.style.borderColor = `rgb(${boxRGBvalue})`;
  });
});
```

<br>

## **Wrapping Up**

#### **19. Click on the Publish button in the upper-right hand corner**
_Wonderful job! We used our knowledge of arrays, loops, and iterators to change up the color of various elements!_

It’s important to note that although we can see changes to our website, previewing doesn't change an already existing and live website for anyone else visiting it. For that, we’ll have to publish it.

To publish our website, or make it live on the internet and accessible to the public, click on the **Publish** button in the upper-right hand corner of the **Wix Editor**.

**Hint:**

Publishing will generate the URL or web address of our live website for us to use or share. We can also click on the **View Site** button to open a new browser tab with our finished website.

<br>

#### **20. Challenge ourselves further, try**:

- Adding more Boxes and changing their colors too.
- Keeping all the circles the same color but the big Box a different color.
- Allow users to input a specific color for Boxes.

**Hint:**
Adding more Boxes means that we'll also have to change the array that stores the Boxes.
Keeping all the circles the same color but the big Box a different color would involve changing the logic in our `changeAllBtn.onClick()`'s callback function.

Allowing users to input a specific color would involve adding, at least one, new input field that gives users the option to add in color values.

<br>

  ### ***[Arrays - RGB Generator Project was completed by Nalini Vo](https://github.com/Nalini1998)***