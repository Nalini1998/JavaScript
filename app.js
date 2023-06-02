let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Use an array method to remove the last string of the array secretMessage
const array = [];
console.log(array.push(secretMessage.pop()));
// console.log(array);
// console.log(secretMessage);

// check the work by logging the .length of the array
console.log(secretMessage.length);

// add the words to the end of the secretMessage array
console.log(secretMessage.push('to', 'Program'));

// change the word 'easily' to 'right' by accessing the index and replacing it
secretMessage[7] = 'right';


// Use an array method to remove the first string of the array.
secretMessage.shift();

// Use an array method to add the string Programming to the beginning.
secretMessage.unshift('Programming');

// remove the strings get, right, the, first, time,, and replace them
secretMessage.splice(6,5,'know, ');

// use console.log() and .join() to print the secret message as a sentence
// console.log(secretMessage);
console.log(secretMessage.join(" "));