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