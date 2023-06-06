### **JAVASCRIPT: CLASSES AND MODULES**
# **Project: Message Mixer**
Message Mixer Inc. offers a message-encryption service that transforms input text, using various ciphers, and displays the encrypted message to the console.

There are three encryption methods provided by this service:

- A “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount.

- A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.

- A “Reverse Cipher” in which each word of the input message is reversed in place.

To use this service, run the command below:

`node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]`

Here are some examples of running this program:

```
$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> lipps asvph
 
$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> olleh dlrow
```

At present, Message Mixer Inc. sells their encryption service as a program in a single file called **message-mixer.js**. This single file includes:

- The functions that perform the encryptions listed above.
- The code for retrieving the user input.
- The code for displaying the output back to the user.

Message Mixer Inc. now wants to join the open-source community by packaging its encryption functions in a module and allowing other developers to import these encryption functions into their own projects.

In this project, I will help Message Mixer Inc. extract and isolate its encryption functions into a module, called **encryptors.js**, and then refactor **message-mixer.js** to use this module's functions.

Before I begin, I will try running the commands listed above in the terminal. Then, familiarize myself with how the program works by examining the three files in the file directory, focusing on **message-mixer.js**.

At the top of this file I will find the three encryption cipher functions. Towards the bottom of the file, I will find some code that uses the **process.argv**, **process.stdin**, **process.stdout** environment variables to determine which encryption method to use, parse the user input, and display the encrypted message.

<br>

# **Tasks**

<br>

## **Extract the encryption functions**

<br>

#### **1. The three encryption functions that Message Mixer Inc. wants to share are defined in message-mixer.js.**

They are:

- caesarCipher()

- symbolCipher()

- reverseCipher()

First, copy all three of these function definitions into **encryptors.js**. Then, save **encryptors.js**.

**Hint:**
**encryptors.js** should look like this:

```
const caesarCipher = (str, amount) => {
  // The body of caesarCipher...
}
 
const symbolCipher = (str) => {
  // The body of symbolCipher...
}
 
const reverseCipher = (sentence) => {
  // The body of reverseCipher...
}
```

<br>

#### **2. Inside encryptors.js, assign each encryption function as a property of the module.exports object.**

Now, to turn **encryptors.js** into a module, its functions must be exported.

Inside **encryptors.js**, assign each encryption function as a property of the `module.exports` object.

**Hint:**
To export a value from a Node module, I can assign a value to the module.exports object like so:

```
// Export a named function.
module.exports.functionToExport = functionToExport;
 
// or... export a function expression.
module.exports.functionToExport = () => {};
```

Or I can assign `module.exports` to an object of the exported values:

```
module.exports = {
  functionToExportA,
  functionToExportB
};
```

Refactor my code to use the exported functions.

<br>

#### **3. Delete these three function definitions from message-mixer.js**

Now that I have moved the encryption functions into **encryptors.js** and exported them, I now have these functions duplicated.

First, delete these three function definitions from **message-mixer.js**.

As a result, we should only have the user input and output logic remaining. Additionally, running the program will now produce reference errors.

**Hint:**
**message-mixer.js** should now only include **getEncryptionMethod()** and **displayEncryptedMessage()** and the code for running the program.

If we were to run the command **node message-mixer.js 'symbol'** in the terminal, we would see the following error:

`ReferenceError: symbolCipher is not defined`

<br>

#### **4. Replace those deleted functions by importing them from the encryptors.js module.**

There are multiple ways of doing this, however, the suggested approach will avoid needing to make modifications to the input/output logic.

At the top of **message-mixer.js**:

Declare a new variable called `encryptors`.

Then, import the `module.exports` object from **encryptors.js** and assign the imported object to `encryptors`.

**Hint:**
Use the `require()` function to import a module. Our code should look something like this:


`const myModule = require('path/to/myModule.js');`

**encryptors.js** is stored in the same folder as **message-mixer.js** so the relative file path will be `'./encryptors.js'`.

<br>

#### **5. Extract the three encryption methods from encryptors and store them in three variables: caesarCipher, symbolCipher, and reverseCipher.**
The `module.exports` object from **encryptors.js** is now stored in the variable `encryptors`.

Extract the three encryption methods from `encryptors` and store them in three variables: `caesarCipher`, `symbolCipher`, and `reverseCipher`.

**Hint:**
There are a few ways to extract values out of an object. The quickest is with object destructuring syntax:

```
const { valueA, valueB, valueC } = object;
Alternatively, you can extract each value one at a time:

const valueA = object.valueA;
const valueB = object.valueB;
```

<br>

#### **6. Run the program again**
Well done! If we’ve completed the steps correctly we should now be able to run the program again. For example, try running this command in the terminal:

`node message-mixer.js caesar 4`

And then, when prompted, type the following message:

`> cnawp fkx!`

By moving the encryption functions into a separate module and exporting them, we’ve separated the concerns of the program, making it more organized and easier to navigate. Furthermore, we can now use these encryption methods to build another program!

<br>

## **Create a new program using the module**

<br>

#### **7. The Super Encoder developers want the user to be able to use their program to encode messages and decode them.**
The developers over at Super Encoder LLC heard about the **encryptors.js** module that we just released and want to use our encryption functions to create a new program.

The Super Encoder developers want the user to be able to use their program to encode messages and decode them using the commands below:

`node super-encoder.js encode`

and

`node super-encoder.js decode`

Try running each of these commands. They currently print `undefined`.

<br>

#### **8. Import the encryption functions caesarCipher(), symbolCipher(), and reverseCipher() from the encryptors.js file.**

Open up **super-encoder.js** where I will see the input/output logic already defined.

At the top of the file, I should see the functions `encodeMessage()` and `decodeMessage()` are incomplete. It will be my job to use the encryption functions to complete these two functions.

First, at the top of **super-encoder.js**, import the encryption functions `caesarCipher()`, `symbolCipher()`, and `reverseCipher()` from the **encryptors.js** file.

**Hint:**
I can use object destructuring and the `require()` function to import multiple values from a module:

`const { valueA, valueB, valueC } = require('/path/to/myModule');`

**encryptors.js** is in the same folder as **super-encoder.js** so the relative file path will be `'./encryptors.js'`.

<br>

#### **9. Use the three encryption methods to complete the encodeMessage() function**
Use the three encryption methods to complete the `encodeMessage()` function by passing the input `str` parameter into one encryption function and then passing the returned value to the next encryption function. `encodeMessage()` should return the final encoded message.

Some guidelines:

- We must use each encryption function at least once.
- It is our choice what order we use to call the encryption functions.
- We may also re-use encryption functions to encode the message.
- `caesarCipher()` requires an `amount` argument. Choose some number between **0** and **26** to use for this argument and remember our choice for `decodeMessage()`.
When we are finished, try running the program like so:

`$ node super-encoder.js encode`

**Hint:**
Here is an example of how we may create `encodeMessage()` with an `amount` of **6** used for the `caesarCipher`:

```
const encodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));
}
```

#### **10. Decoding is the process of taking an encoded message and determining the original message by reversing the encoding process.**

For example, using **message-mixer.js**, we can encode the message `'hello world'` using a Caesar cipher with an `amount` of **4** like so:

```
$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> lipps asvph
```

To decode the message `'lipps asvph'`, we can run the program in reverse, like so:

```
$ node message-mixer.js caesar -4
Enter the message you would like to encrypt...
> lipps asvph
 
Here is your encrypted message:
> hello world
```

Now, in **super-encoder.js**, define `decodeMessage()` to provide a function that reverses the encoding of `encodeMessage()`.

**Hint:**
Here is an example of how we may create `decodeMessage()` to match `encodeMessage()`.

```
const encodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, 6)));
}
 
const decodeMessage = (str) => {
  return caesarCipher(symbolCipher(reverseCipher(str)), -6);
}
```

<br>

#### **11. In the terminal, run the super-encoder.js program to test our code.**
If we completed all of the steps properly, we should now be able to encode the message `“hello world”` to produce an encoded message. We should then be able to take the encoded message and decode it to get `“hello world”` back.

In the terminal, run the **super-encoder.js** program to test our code.

**Hint:**
Take a look at the `encodeMessage()` and `decodeMessage()` function definitions in the Hints. We can then run the program like so:

```
$ node super-encoder.js encode
Enter the message you would like to encrypt...
> hello world
urrkn jrxuc
$ node super-encoder.js decode
Enter the message you would like to encrypt...
> urrkn jrxuc
hello world
```

<br>

### ***This Project was wrote by [Nalini Vo](https://github.com/Nalini1998)***
