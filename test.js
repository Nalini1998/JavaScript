console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
    	itemFour.$eventMethod;
    };
    
    let structureTwo = function(){
      itemFour.addEventListener($event);
    }
    
    let structureThree = function(){
      itemFour.addEventListener($event, $handler);
    }
    
    let structureFour = function(){
      itemFour.$event = $handler;
    }
    
    let varCallbacks = {
      "$eventMethod": function(eventMethod){   
        if(eventMethod.name === 'addEventListener'){     
         let isMatchTwo = Structured.match(code, structureTwo);
         let isMatchThree = Structured.match(code, structureThree, {varCallbacks: addEventListenerCallbacks});

         assert.isOk(isMatchTwo, 'Is your first argument an event type and the second argument event handler function?');
         assert.isOk(isMatchThree, addEventListenerCallbacks.failure || 'Are you giving an event handler function as the second argument?');
         return true;
       }
       
       if(eventMethod.name.includes('on')){
         let isMatchFour= Structured.match(code, structureFour, {varCallbacks: onEventCallbacks});
         assert.isOk(isMatchFour, onEventCallbacks.failure || "Did you set an event handler function for the `.onevent` property?");
         
         return true;
       }
       
       return {failure: 'Are you using either `.addEventListener()` or `.onevent` to add an event handler?'}
     }
    }
   
   let addEventListenerCallbacks = {
     "$event, $handler": function(event, handler){
       if(event.type === 'Literal'){
         if(event.value !== 'mousedown'){
        		return {failure: "Are you using `'mousedown'` as event type?"}
         }
       }else{
          return {failure: 'Are you passing the event type as a string?'}
       }
       
       if(handler.name !== 'showItem'){
          return {failure: 'Are you setting `showItem` as your second argument of `.addEventListener()`?'};
       }
     	 return true;
   	 }
   }
   
   let onEventCallbacks = {
     "$event, $handler": function(event, handler){      
       if(event.name !== 'onmousedown'){
         if(event.name === 'innerHTML'){
           return {failure: "Are you setting the event handler function as value of `.onevent` property?"}
         }
         return {failure: "Are you using the `.onmousedown` property to add your event handler?"}
       }
       
       if(handler.name !== 'showItem'){
         return {failure: "Are you setting `showItem` as your event handler function?"}
       }
     	 return true;
   	 }   
   }

    let isMatchOne = Structured.match(code, structureOne, {varCallbacks});    
    assert.isOk(isMatchOne, varCallbacks.failure || 'Did you add an event handler for `itemFour` element?');
  });
});