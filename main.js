function capAllElements(arr){
    try {
        arr.forEach((el, index, array) => {
        array[index] = el.toUpperCase();
      });
      } catch (e) {
        console.log(e);
        }
      }
    capAllElements('Incorrect argument');
    
    /* Output as below
    
    TypeError: arr.forEach is not a function
        at capAllElements (/home/ccuser/workspace/error-handling-try-catch-ii/main.js:3:6)
        at Object.<anonymous> (/home/ccuser/workspace/error-handling-try-catch-ii/main.js:11:1)
        at Module._compile (module.js:571:32)
        at Object.Module._extensions..js (module.js:580:10)
        at Module.load (module.js:488:32)
        at tryModuleLoad (module.js:447:12)
        at Function.Module._load (module.js:439:3)
        at Module.runMain (module.js:605:10)
        at run (bootstrap_node.js:427:7)
        at startup (bootstrap_node.js:151:9)
    
    */