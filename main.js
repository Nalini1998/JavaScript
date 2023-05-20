// Write your code below:
console.log(Error('User missing name'));

// OR

console.log(new Error('Will logging the error stop our program from running?'));

/* OUTPUT AS BELOW:

Error: User missing name
    at Object.<anonymous> (/home/ccuser/workspace/error-handling-error-construction/main.js:2:13)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)
    at bootstrap_node.js:542:3
Error: Will logging the error stop our program from running?
    at Object.<anonymous> (/home/ccuser/workspace/error-handling-error-construction/main.js:6:13)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)
    at bootstrap_node.js:542:3

*/