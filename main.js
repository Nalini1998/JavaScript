console.log('This message will be printed to the console.');

function throwError () {
  return notDefinedVar;
}

// Call throwError() below:
throwError();

console.log('Because of the error, this will not printed!');



/* OUTPUT: 

This message will be printed to the console.

/home/ccuser/workspace/error-handling-runtime-errors/main.js:4
  return notDefinedVar;
         ^

ReferenceError: notDefinedVar is not defined
    at throwError (/home/ccuser/workspace/error-handling-runtime-errors/main.js:4:10)
    at Object.<anonymous> (/home/ccuser/workspace/error-handling-runtime-errors/main.js:8:1)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)
*/