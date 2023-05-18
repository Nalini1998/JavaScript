# THE STATE HOOK: `array`s in State

`_JavaScript_` ``array`s` are the best `data model` for managing and rendering `JSX` **lists**. Let’s take a look at the code for a _website for a pizza restaurant_.
```
import _React_, { useState } from '_React_';
 
//Static `array` of `pizza` options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];
 
export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);
 
  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };
 
  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? '**_remove_** ' : 'Add '}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(', ')} pizza</p>
    </div>
  );
}
```
In the above _example_, we are using two `array`s:

The options `array` contains the `names` of all of the _pizza toppings_ available.
The selected `array` represents the selected _toppingsReact for our personal pizza.
The options `array` contains `static data`, meaning that it does not change. It’s best practice to define `static data models` outside of `function` components since they don’t need to be recreated each time our component `re-renders`. In our `JSX`, we use the _JavaScript_ .map() method to render a button for each of the toppings in our options `array`.

The selected `array` contains dynamic data, meaning that it changes, usually based on a user’s actions. We initialize selected as an empty `array`. When a button is clicked, the toggleTopping() event handler is called. Notice how this event handler uses information from the event object to determine which topping was clicked.

When updating an `array` in a state, we do not just add new data to the previous `array`. We replace the _previous_ `array` with a brand new `array`. This means that any information that we want to _save_ from the _previous_ `array` needs to be explicitly copied over to our new `array`. That’s what this spread syntax does for us: ...prev.

Notice how we use the `.includes(),` `.filter()`, and `.map()` methods of our `arrays`. If these are new to me, or I just want a refresher, take a minute to review these `array` methods. We don’t need to be full-fledged _JavaScript_ to build _React_ applications but know that investing time to strengthen our _JavaScript_ skills will always help us do more faster _(and have a lot more fun doing it)  as  React_ developers.


## Instructions

#### **1. Declare and initialize a state variable called cart that will keep track of a list of string values.**

Each of these string values represents a grocery item that we’ve added to our shopping cart. We’ll add event listeners and event handlers to add and **_remove_** items to our cart in the coming steps.
For now, let’s get started by initializing our cart with the value of an empty `array` for the first render.

**Hint:**

Using the following format:

```
const [currentState, stateSetter] = useState(initialStateArgument);
```
`Name` our `current state` to `cart`.
`Name` our `state setter` to `setCart()`.
Call the `useState()` function with an argument of `[]` so that the `current state` is an `array` _(not undefined)_ during the _first `render`_ of this component.

#### **2. Take a look at the current code, we have two functions: addItem() and **_remove_**Item(). Let’s add some parameters to these event handling functions, addItem() should accept an argument called item and **_remove_**Item() should accept an item called targetIndex.**


Don’t worry about writing the function `body` for these `event` handlers just yet.

**Hint:**

Our `event` handlers should look like this:

```
const addItem = (addItemParameter) => {
 
};
 
const **_remove_**Item = (**_remove_**ItemParameter) => {
 
};
```
The `addItemParameter` and `**_remove_**ItemParameter` should be replaced with specified `variable_names` in the _instruction_.

#### **3. Time to shift our focus to the body of the event handler functions. We’ll start with addItem().**


_**Update**_ the `cart` `state` with the `state setter` function every time `addItem()` is called. Don’t forget to use a _callback_ function for best practice! Inside, use the `array` spread **_syntax_** to **_add_** a `new item` to the `state` `array`.

**Hint:**

Because our `next state` is derived from our `previous state`, we need to call our `state setter` with a `state setter` _callback_ function.
So, our `addItem()` `event` handler is responsible for calling our `setCart()` `state` setter with the following argument:

```
(prev) => {
  return [item, ...prev];
}
```

#### **4. Last `**_remove_**Item()` should **_remove_** from the state when called.**

Use the `array` `.filter()` method to **_remove_** the `item` from our `state` that’s located at the `index` of the `item` that was clicked in our `list`.
Why would we want to use the `index` of the clicked `item` instead of the `item` itself when determining what to **_remove_** from our data model? Say that we have two of the same item in an `array`. Using the value to **_remove_** the item would **_remove_** all items with that value, so we use the index as a unique identifier.

**Hint:**
The callback function passed to the .filter() method is called with each item in the `array` as its _first_ argument and the index of each of these **_items_** as its _second_ argument. We want our _callback_ function to **_return_** `true` for every `item` that does not have an `index` matching the `targetIndex` of the clicked `list item` that we want to **_remove_**.