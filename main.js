function Meow(cuti){
    try {
      throw Error('You got an Error!')
    } catch (e) {
      console.log(e);
    }
  }
  
  console.log('Cuties loves Meow so much!')
  Meow('Cuties loves Meow so much!')
  
  /* OUTPUT: 
  
  Cuties loves Meow so much!
  Error: You got an Error!
      at Meow (/home/ccuser/workspace/error-handling-error-handling-review/main.js:3:11)
      at Object.<anonymous> (/home/ccuser/workspace/error-handling-error-handling-review/main.js:10:1)
      at Module._compile (module.js:571:32)
      at Object.Module._extensions..js (module.js:580:10)
      at Module.load (module.js:488:32)
      at tryModuleLoad (module.js:447:12)
      at Function.Module._load (module.js:439:3)
      at Module.runMain (module.js:605:10)
      at run (bootstrap_node.js:427:7)
      at startup (bootstrap_node.js:151:9)
      
  */