### **WEB DEVELOPMENT**
# **Project: Lodash**

In this Project, we will be recreating some of the most exciting functionality from the widely-popular **lodash.js** library which provides many methods that add new functionality for numbers, strings, objects, and arrays.

Implementing the methods from lodash on our own is an invaluable exercise in problem-solving and a great way to understand how the methods work! We’ve selected ten methods for we to implement and, in implementing each method, we will follow these four steps:

1. **Specify** the functionality of the method we are implementing
2. **Ideate** a game plan for how to implement this functionality in code
3. **Implement** our game plan
4. **Test** our code to ensure it works as expected

_With all of that said, let's get started implementing some awesome new functionality!_

<br>

# **Tasks**

<br>

## **Create Lodash Object**
#### **1. Create and process a new variable called _** 

Before we get started implementing our new methods, we need to create an object to contain them. 
This object will represent our library containing all the functionality we add to it.

Create a new variable called `_` that is initialized to an empty object.

<br>

#### **2. Let's run the first test suite**

_We've written test files for each task in this project._

Let's run the first test suite to ensure our lodash object was initialized correctly.

To run a file using node, we type the `node` command in a command line followed by the name of the file. For example, to run the main file we are working on, we would `run node _.js`.

Our test files are all located in the `test/ directory`. To run the test suite for this task, type `node test/lodash.js` in our terminal and then press **enter**. The test will either throw errors if something is not currently working properly in our code or will print a success message to the console if our code is good to go.

<br>

## **Implement _.clamp()**
#### **3. Specify in the .clamp() method implement**

**Specify**: The first method we will implement is .clamp(). Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of the method:

`.clamp()` takes three arguments: a `number`, a `lower` bound, and an `upper` bound.
`.clamp()` modifies the provided `number` to be within the two provided bounds.
If the provided `number` is smaller than the `lower` bound, it will return the `lower` bound as the final `number`.
If the `number` is larger than the `upper` bound, it will return the `upper` bound as the final `number`.
If the `number` is already within the two bounds, it will return the `number` as the final `number`.

<br>

#### **4. Ideate in the .clamp() method implement**

**Ideate**: There are a `number` of different ways to implement this method. One that might have come to our mind would be to use control flow to compare the current value to the bounds and return the proper result. We are going to present a different solution in these steps so that we can keep considering unexpected ways to solve problems.

Add the `.clamp()` method to the lodash object including the appropriate parameters.

Use `Math.max()` to clamp the `number` by the `lower` bound. The `return` value of `Math.max()` called with the `number` and the `lower` bound will be the larger of the two values, meaning it will be clamped by the `lower` bound.

Use `Math.min()` to clamp the `number` by the `upper` bound. The `return` value of `Math.min()` is called with the value from the step above and the `upper` bound will be the smaller of the two.

Return the final value of these two operations, which will be the clamped `number`.

<br>

#### **5. Implement in the .clamp() method implement**

**Implement**: _Let's implement our game plan in code._

- Add a method to our `_` object called `clamp`.
- Add three parameters to this method: `number`, `lower`, and `upper`.
- Within the method, create a variable called `lowerClampedValue` that is set equal to the return value of `Math.max()` called with `number` and `lower`.
- Create a variable called `clampedValue` that is set equal to the return value of `Math.min()` called with `lowerClampedValue` and `upper`.
- Return `clampedValue` as our final value from the method.

<br>

#### **6. Test the .clamp() method**

**Test**: To test that our `.clamp()` method works as expected, run the test file for this method in our terminal. Don't worry if any errors appear, work through them one by one until our code runs as expected.

<br>

## **Implement _.`inRange()`**

#### **7. Specify in the .`inRange()` method implement**

**Specify**: The next number method we will implement is .`inRange()`. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of the method:

- .`inRange()` takes three arguments: a `number`, a `start` value, and an `end` value.

- .`inRange()` checks to see if the provided `number` falls within the range specified by the `start` and `end` values.

- If the provided number is smaller than the start value, .`inRange()` will return `false`.

- If the provided number is larger than or equal to the end value, .`inRange()` will return `false`.

- If the provided number is within the start and end values, .`inRange()` will return `true`.

- If no `end` value is provided to the method, the `start` value will be `0` and the `end` value will be the provided `start` value.

- If the provided `start` value is larger than the provided `end` value, the two values should be swapped.

<br>


#### **8. Ideate in the .inRange() method implement**

**Ideate**: As always, there are a number of different solutions that could work to solve this problem. This is just one solution.

Add the .`inRange()` method to the `lodash` object.
Check to see if the end value is `undefined`. If so, set the end value equal to the start value and then set the start value equal to 0.

Check to see if the start value is larger than the end value. If so, swap the two values. Note that we will need to use a temporary variable to do this. To understand why, imagine if we tried to swap values without one. We might start by setting the end value equal to the start value. 

When we then go to set the start value equal to the end value, the end value will have already been overwritten and the swap can’t be completed. To solve this, we create a variable that will temporarily store the end value to access when we need to set the new start value and complete the swap.

Using boolean operators, find out if the number is in the specified range. Return the value of the previous operation from the method.

<br>

#### **9. Implement in the .inRange() method implement**

**Implement**: _Let's implement our game plan in code._

- Add a method to our _ object called inRange.

- Add three parameters to this method: number, start, and end.

- Within the method, create an if statement that checks to see if end is undefined.

- Within the if statement block, set end equal to start. Then set start equal to 0.

- After the previous if statement, add another if statement. This if statement should check whether start is bigger than end.

- Within the if statement block, swap the two start and end values. Create a variable called temp that is set to the current end value. Then set end equal to start. Finally, set start equal to temp.

- After our second if statement, create a variable called isInRange and set it equal to a boolean expression that checks if start is smaller than or equal to number and if number is smaller than end.

- Finally, return the value of isInRange from the method.


<br>

#### **10. Test the .inRange() method**

**Test**: To test that our .`inRange()` method works as expected, run `node test/in-range.js` in our terminal. 

<br>

## **Implement _`.words()`**

#### **11. Specify in the `.words()` method implement**

**Specify**: _Let's start implementing some string methods!_

The first string method we will implement is `.words()`. We will be writing a slightly modified version of this method to save we some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality we will implement.

Here is a summary of what our method should do:

- `.words()` takes one argument: a string.

- `.words()` splits the string into an array of words.

- A word is defined by a space-separated string of characters, so each space character, ' ', indicates the end of one word and the start of the next.

**Note**: we may have noticed in the documentation that this function has a pattern parameter. our method does not need to accept the additional pattern parameter, we will only split our string into words based on spaces.

<br>

#### **12. Ideate in the .clamp() method implement**

**Ideate**: This solution probably has the most potential solutions of the methods we have implemented thus far. We’ve opted to use a built-in JavaScript method to make this method as short and readable as possible.

- Add the `.words()` method to the lodash object including the appropriate parameters.

- Use the string .split() method to split the provided string on space characters into an array of words.

- Return the array of words generated in the previous step.

<br>

#### **13. Implement in the .words() method implement**

**Implement**: _Let's implement our game plan in code._

- Add a method to our _ object called words.

- Add one parameter to this method: string.

- Within the method, create a variable called words and set its value equal to string split on space characters ' ' using the .split() method.

- Return the value of words from the method.

<br>

#### **14. Test the .words() method**

**Test**: To test that our `.words()` method works as expected, run `node test/words.js` in our terminal.

<br>

## **Implement _.pad()**

#### **15. Specify in the .pad() method implement**

**Specify**: The next string method we will implement is `.pad()`. We will be writing a slightly modified version of this method to save we some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality we will implement.

Here is a summary of what our method should do:

- `.pad()` takes two arguments: a string and a length.

- `.pad()` adds spaces evenly to both sides of the string to make it reach the desired length.

- Extra padding is added to the end of the string if an odd amount of padding is required to reach the specified length.

- Our method does not need to accept the additional chars parameter; we will only add space characters to pad our string.

<br>

#### **16. Ideate in the .pad() method implement**

Add the `.pad()` method to the lodash object including the appropriate parameters.

Check to make sure the target length is longer than the current string length. If not, return the unpadded version of the string.

Find the amount of padding to add to the start of the string by finding the difference between the target length and the string length, dividing by two, and rounding down the resulting number. We round down so that any uneven padding gets added to the end of the string, not the beginning, as specified in the instructions.

Find the amount of padding to add to the end of the string by subtracting the string length and the starting padding length (calculated above) from the target length.

Generate the padded string by adding the amount of starting padding and ending padding calculated above to each side of the current string.

Return the padded version of the string.

<br>

#### **17. Implement in the .pad() method implement**

**Implement**: _Let's implement our game plan in code._

- Add a method to our _ object called pad.

- Add two parameters to this method: string and length.

- Within the method, add an if statement that checks if length is shorter than or equal to string‘s length. If so, return string.

- Create a variable called startPaddingLength and set its value equal to the difference of length and string‘s length, divided by 2, and rounded down by using Math.floor().

- Create a variable called endPaddingLength and set its value equal to length minus string‘s length minus startPaddingLength.

- Create a new variable called paddedString and set its value equal to the space character, ' ', repeated startPaddingLength number of times (using the string .repeat() method), concatenated with string, concatenated with the space character repeated endPaddingLength number of times.

- Return the value of paddedString from the method.

<br>

#### **18. Test the .pad() method**

**Test**: To test that our `.pad()` method works as expected, run `node test/pad.js` in our terminal. 

<br>

## **Implement _.has()**

#### **19. Specify in the .has() method implement**

**Specify**: _Let's begin implementing some new object methods!_

The first object method we will implement is `.has()`. We will be writing a slightly modified version of this method to save we some time. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work. Then read below to see which pieces of functionality we will implement.

Here is a summary of what our method should do:

`.has()` takes two arguments: an object and a key.

`.has()` checks to see if the provided object contains a value at the specified key.

`.has()` will return true if the object contains a value at the key and will return false if not.

- Our method does not need to accept the additional path parameter; we will only check for unnested values.

<br>

#### **20. Ideate in the .has() method implement**

**Ideate**: _Let's come up with a game plan for implementing this method_

- Add the `.has()` method to the lodash object including the appropriate parameters.

- Access the current value at the specified key in the object.

- Check to see if the value at that key is undefined.

- Return false if the value is undefined and true if not.

- Once we have tried implementing this game plan in code, save our code and move on to the next step to see how we do it.

<br>

#### **21. Implement in the .has() method implement**

**Implement**: _Let's implement our game plan in code._

- Add a method to our _ object called has.

- Add two parameters to this method: object and key.

- Within the method, create a variable called hasValue and set its value equal to the result of checking to see if the current value of object at key does not equal undefined.

- Return the value of hasValue from the method.

<br>

#### **22. Test the .has() method**

**Test**: To test that our `.has()` method works as expected, run `node test/has.js` in our terminal.

<br>

## **Implement _.invert()**

#### **23. Specify in the .invert() method implement**

**Specify**: The next object method we will implement is `.invert()`. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what our method should do:

- `.invert()` takes one argument: an object.

- `.invert()` iterates through each key / value pair in the provided object and swaps the key and value.

- In the case of duplicate values in the object, subsequent values will overwrite property assignments of previous values.

<br>

#### **24. Ideate in the .invert() method implement**

**Ideate**: _Let's come up with a game plan for implementing this method._

- Add the `.invert()` method to the lodash object including the appropriate parameters.

- Create a new object to represent our inverted object.

- Iterate through each key in the provided object.

- Set the original object’s value at that key to be a key on our inverted object and set the value of that key to be the original object’s key.

- Return the inverted object.


<br>

#### **25. Implement in the .invert() method implement**

**Implement**: _Let's implement our game plan in code._

- Add a method to our _ object called invert.

- Add one parameter to this method: object.

- Within the method, create a variable called invertedObject and set its value equal to an empty object.

- Using a for ... in loop, iterate through each key in object.

- Within the loop, create a variable called originalValue and set it equal to the value at the current key in object.

- Still within the loop, set the value at originalValue on invertedObject to be the current key.

- Finally, outside of the loop, return the value of invertedObject from the method.

<br>

#### **26. Test the .invert() method**

**Test**: To test that our `.invert()` method works as expected, run `node test/invert.js` in our terminal. 

<br>

## **Implement _.findKey()**

#### **27. Specify in the .findKey() method implement**

**Specify**: The final object method we will implement is `.findKey()`. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what our method should do:

- `.findKey()` takes two arguments: an object and a predicate function — a function that returns a boolean value.

- `.findKey()` iterates through each key / value pair in the provided object and calls the predicate function with the value.

- `.findKey()` returns the first key that has a value that returns a truthy value from the predicate function.

- `.findKey()` returns undefined if no values return truthy values from the predicate function.

<br>

#### **28. Ideate in the .findKey() method implement**

**Ideate**: _Let's come up with a game plan for implementing this method._

- Add the `.findKey()` method to the lodash object including the appropriate parameters.

- Iterate through each key in the provided object.

- Within a conditional if statement, call the provided predicate function with the value at that key.

- If the predicate function returns a truthy value, return the current key from the method.

- After the loop, return undefined, since no values returned a truthy value from the predicate function.

<br>

#### **29. Implement in the .findKey() method implement**

**Implement**: _Let's implement our game plan in code._

- Add a method to our _ object called findKey.

- Add two parameters to this method: object and predicate. 

- We will name our predicate function parameter predicate since this is the name used in the Lodash documentation.

- Within the method, use a for ... in loop to iterate through each key in object.

- Within the loop, create a variable called value and set it equal to the value at the current key in object.

- Still within the loop, create another variable called predicateReturnValue and set it equal to the result of calling predicate with value.

- Finally, still within the loop, use an if statement to check to see if predicateReturnValue is truthy. If it is, return the current key from the method.

- Outside of the loop, return undefined to address all cases where no truthy values were returned from predicate.

<br>

#### **30. Test the .findKey() method**

**Test**: To test that our `.findKey()` method works as expected, run `node test/find-key.js` in our terminal. 

<br>

## **Implement _.drop()**


#### **31. Specify in the .drop() method implement**

**Specify**: _It's time to start implementing methods for our final data type: arrays!_

The first array method we will implement is `.drop()`. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what our method should do:

- `.drop()` takes two arguments: an array and a number representing the number of items to drop from the beginning of the array.

- `.drop()` returns a new array which contains the elements from the original array, excluding the specified number of elements from the beginning of the array.

- If the number of elements to drop is unspecified, our method should drop one element.

<br>

#### **32. Ideate in the .drop() method implement**

**Ideate**: _Let's come up with a game plan for implementing this method._

- Add the `.drop()` method to the lodash object including the appropriate parameters.

- Check to see if the number of items to drop was set. If not, set the number equal to 1.

- Create a new copy of the original array with the specified number of elements dropped from the beginning of the array. We will use the array .slice() method to accomplish this.

- Return the modified copy of the array from the method.

<br>

#### **33. Implement the .drop() method**

**Implement**: _Let's implement our game plan in code._

- Add a method to our _ object called drop.

- Add two parameters to this method: array and n.

- Within the method, use an if statement to check if n has been set by asking if n is equal to undefined.

- Within the if statement block, set n equal to 1.

- Outside of the if statement, create a new variable called droppedArray and set its value to be a copy of the array missing the first n elements by using .slice().

- Return droppedArray from the method.

<br>

#### **34. Test the .drop() method**

**Test**: To test that our `.drop()` method works as expected, run `node test/drop.js` in our terminal.

<br>

## **Implement _.dropWhile()**

#### **35. Specify in the .dropWhile() method implement**

**Specify**: The next array method we will implement is `.dropWhile()`. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what our method should do:

- `.dropWhile()` takes two arguments: an array and a predicate function.

- The supplied predicate function takes three arguments: the current element, the current element index, and the whole array.

- `.dropWhile()` creates a new copy of the supplied array, dropping elements from the beginning of the array until an element causes the predicate function to return a falsy value.

<br>

#### **36. Ideate in the .dropWhile() method implement**

**Ideate**: _Let's come up with a game plan for implementing this method._

- Add the `.dropWhile()` method to the lodash object including the appropriate parameters.

- Iterate through the array until we find an element that causes the predicate to return a falsy value. We will use .findIndex() to iterate through the array since it is built to iterate through an array until it finds an element that returns a specific value.

- Use our previous `.drop()` method to drop the elements prior to the one that returned a falsy value.

- Return the modified copy of the array from the method.

<br>

#### **37. Implement the .dropWhile() method**

**Implement**: _Let's implement our game plan in code._

- Add a method to our _ object called dropWhile.

- Add two parameters to this method: array and predicate.

- Within the method, create a new variable called dropNumber and set its value equal to the return value of a call to findIndex on array.

- Pass an anonymous callback function to findIndex that takes two arguments: element and index.

- Within the callback function, return the negated return value of predicate called with element, index, and array. We negate the value (use !) since we are looking to drop elements until the predicate returns a falsy value. However, .findIndex() is looking for the first truthy value. So, we make every truthy value falsy and vice versa to get the value we are looking for.

- After the entire dropNumber declaration, create a new variable called droppedArray and set its value to the return value of this`.drop()` called with array and dropNumber. We are using this since `.drop()` is a method on the _ object which is the current object we are working from, and therefore the current value of this. Calling _`.drop()` would also have worked but is a less common practice.

- Return `droppedArray` from the method.

<br>

#### **38. Test the .dropWhile() method**

**Test**: To test that our `.dropWhile()` method works as expected, run `node test/drop-while.js` in our terminal. 

<br>

## **Implement _.chunk()**

#### **39. Specify in the .chunk() method implement**

**Specify**: The last array method we will implement is `.chunk()`. Read the explanation and examples of the method in the linked documentation to get a sense of how the method should work.

Here is a summary of what our method should do:

- `.chunk()` takes two arguments: an array and a size.

- `.chunk()` breaks up the supplied array into arrays of the specified size.

- `.chunk()` returns an array containing all of the previously-created array chunks in the order of the original array.

- If the array can’t be broken up evenly, the last chunk will be smaller than the specified size.

- If no size is supplied to the method, the size is set to 1.

<br>

#### **40. Ideate in the .chunk() method implement**

**Ideate**: _Let's come up with a game plan for implementing this method._

- Add the `.chunk()` method to the lodash object including the appropriate parameters.

- Check to see if a size has been supplied. If not, set the size equal to 1.

- Create an empty array that will contain all of the generated array chunks.

- Loop through the array. In each turn of the loop, create an array chunk of the specified size, add it to the final array, and increase the loop counter by the chunk size to go to the next chunk. We will use a for loop to do this, since no iterator method does exactly what we want and a while loop won’t auto-increment.

- Return the array of array chunks from the method.

<br>

#### **41. Implement the .chunk() method**

**Implement**: _Let's implement our game plan in code._

- Add a method to our _ object called chunk.

- Add two parameters to this method: array and size.

- Within the method, write an if statement that checks to see if size is undefined.

- Within the if statement block, set size equal to 1.

- After the if statement, create a variable called arrayChunks and initialize it to an empty array.

- Write a for loop that loops through array and has a counter that increments by size each turn of the loop.

- Within the for loop, create a variable called arrayChunk and set it equal to the chunk of the array going from the current loop index to the current loop index plus size. we can use .slice() to accomplish this.

- Still within the for loop, add arrayChunk to the end of arrayChunks. we can use .push() to accomplish this.

- Finally, outside of the for loop, return arrayChunks from the method.

<br>

#### **42. Test the .chunk() method**

**Test**: To test that our `.chunk()` method works as expected, run `node test/chunk.js` in our terminal.

<br>

#### **43. Review Code**

<br>

#### **Reference Code as below:** 

**_.js**
```
// Create a new variable called _ that is initialized to an empty object
const _ = {
  // Add a clamp method with number, lower, and upper parameters
  clamp(number, lower, upper) {
    // create a variable called lowerClampedValue
    const lowerClampedValue = Math.max(number, lower);
    // create a variable called clampedValue
    const clampedValue = Math.min(lowerClampedValue, upper);
      // Return clampedValue as our final value from the method
      return clampedValue;
  },

  // Add a inRange method with number, start, and end parameters
  inRange(number, start, end) {
    // check to see if the end value is undefined
    if (end === undefined) {
      end = start;
      start = 0;
    }
    // this if statement should check whether start is bigger than end
    if (start > end) {
      const temp = end;
      end = start;
      start = temp;
    }
    // create a variable called isInRange
    const isInRange = start <= number && number < end;
    // return the value of isInRange from the method
    return  isInRange;
  },

  // Add a words method with a string argument
  words(string) {
    // create a variable called words
    const words = string.split(' ');
    // return the words from the method
    return  words;
  },

  // Add a pad method with 2 parameters are string and length
  pad(string, length) {
    // checks if length is shorter than or equal to string
    if (length < string.length) {
      return string;
    }
    // create and process a variable called startPaddingLength
    const startPaddingLength = Math.floor((length - string.length)/2);
    // create and process a variable called endPaddingLength
    const endPaddingLength = length - string.length - startPaddingLength;
    // create and process a variable called paddedString
    const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    // return the value of paddedString from the method
      return paddedString;
  },

  // Add a has method with 2 parameters are object and key
  has(object, key) {
    // create and process a variable called hasValue
    const hasValue = object[key] !== undefined
    // return the value of hasValue from the method
      return hasValue;
  },

  // Add a invert method with 1 argument is object
  invert(object) {
    // create and process a variable called invertedObject
    const invertedObject = {}
    // using a for ... in loop, iterate through each key in object
      for (let key in object) {
        // create and process a variable called originalValue
        // set originalValue equal to the value at the current key in object
        originalValue = object[key];
        // set the value at originalValue on invertedObject
        invertedObject[originalValue] = key;
      }
      // return the value of invertedObject
      return invertedObject;
  },

  // Add a findKey method with two parameters are object and predicate
  findKey(object, predicate) {
    // create and process a variable called invertedObject
    const invertedObject = {}
    // using a for ... in loop, iterate through each key in object
      for (let key in object) {
        // create and process a variable called value
        // set originalValue equal to the value at the current key in object
        value = object[key];
        // create and process a variable called predicateReturnValue
        predicateReturnValue = predicate(value);
        // check to see if predicateReturnValue is truthy
        if (predicateReturnValue) {
          return key;
        }
      }
          return undefined;
  },

  // Add a drop method with two parameters are array and number
  drop(array, n) {
    // asking if n is equal to undefined
    if(n === undefined) {
      n = 1;
    }
    // create and process a variable called droppedArray
    const droppedArray = array.slice(n)
    return droppedArray;
  },

  // Add a dropWhile method with two parameters are array and predicate
  dropWhile(array, predicate) {
    // create and process a variable called dropNumber
    const dropNumber = array.findIndex((element, index) => {
        // return the negated return value of predicate
        return !predicate(element, index, array)
      })

    // create and process a variable called droppedArray
    const droppedArray = this.drop(array, dropNumber)
        // return droppedArray from the method
        return droppedArray
  },

  // Add a chunk method with two parameters are array and size
  chunk(array, size) {
    // write an if statement that checks to see if size is undefined
    if(size === undefined) {
      size = 1;
    } 
    // create and process a variable called arrayChunk
    const arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i+size) 
        arrayChunks.push(arrayChunk)
    }
        return arrayChunks;
  },

}

// Do not write or modify code below this line.
module.exports = _;
```

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***
