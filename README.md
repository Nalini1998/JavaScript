# **HTML FORMS: Create a burger!**

<br>

# **TASKS:**


#### **1. In the \<section> element, add a \<form> element under the provided comment. Assign the \<form> with:**

- an action attribute with a value of "/practice.html"
- a method attribute with a value of "POST"

<br>

#### **2. Right now we have a blank \<form> on a burger site, let’s add some context**

Add an \<h1> inside the \<form> element with text related to the site between the opening and closing \<h1> tags.

<br>

#### **3. Add some details to the form by inserting a \<p> element below the \<h1> element**

- Write a relevant description within the \<p> element

- Let’s start with creating a login form for our users.

- Inside the provided \<form> element, add an \<input> element with a type attribute of "text".

<br>

#### **4. Let’s develop some good habits by giving the \<input> a name attribute with a value of "username"**

<br>

#### **5. Let’s see what happens if we add a value attribute with a value of "Davie"**

<br>

#### **6. Add a \<label> element that is associated with the included \<input> element in index.html. (use the for attribute!)**

- Then add text Username within the \<label> element.

- After clearing this checkpoint, click on the Username label in the web browser to see the corresponding \<input> field selected.

<br>

#### **7. To complete our login page in index.html we need a password field**

- Add an \<input> element under the second \<label> element.

- Assign the id to the correct value to associate the second \<label> with this new \<input>.

- Set the newly created \<input> element’s type attribute to "password".

- Set the name attribute to "user-pw".

<br>

#### **8. In index.html we started a \<form> for users to make a custom burger.**

- Right now we have a \<label> for patties that needs an associated \<input> element.

- Since we want users to enter a number, create an \<input> and set the attributes:

- Associate the \<input> to the first \<label> by assigning the correct value to id.

```
type="number"
step="1"
name to "amount".
```

**Note**: We may notice that we started adding \<section>s and other semantic HTML elements to help organize our \<form> elements. If you want to learn more about these elements, please take our Semantic HTML lesson.

<br>

#### **9. Let’s give our users an option for how they want to cook their patties**


- We can do this by adding a slider to the existing \<form>.

- In the \<section> with class="cooked", add an \<input> element. Set the id and name to "doneness". Also, set the type attribute to "range".

- Since our \<form> is getting long, we might have to scroll down to find the provided \<section>.

<br>

#### **10. For the newly created \<input> set the information below:**

- min attribute to "0".

- max attribute to "5".

- step attribute to "0.5".

<br>

#### **11. Time to add some toppings!**


In the \<section> with class="toppings", there are two \<label>s but no associated \<input> elements.

Add an \<input> element associated with the first \<label>.

The created \<input> should have:

- an id set to "lettuce".

- a name attribute with a value of "topping".

- a type set to "checkbox"

- a value of "lettuce".

<br>

#### **12. Add another \<input> element and associate it with the second \<label>**

The \<input> element should have:

- an id set to "tomato".

- a type set to "checkbox".

- a name attribute with a value of "topping".

- a value of "tomato".

<br>

#### **13. Two choices are good, but it would be better to have even more**

- Add another \<input type="checkbox"> and \<label> pair.

- Assign the name of the \<input> to "topping".

- We’re free to decide the value and id but make sure that your new \<label> and \<input> are associated.

<br>

#### **14. We can give our users the option to make the burger into a cheeseburger. Let’s use radio buttons for that**

In \<section> element with a class of "cheesy" there are two \<label>s that don’t have associated \<input> elements.

Add an \<input> element associated with the first \<label>.

The created \<input> should have:

- an id set to "yes".
- a type set to "radio".
- a name attribute with a value of "cheese".
- a value of "yes".

<br>

#### **15. Awesome, now add another \<input> element to give users another choice. The created \<input> should have:**

- an id set to "no".

- a type set to "radio".

- a name attribute with a value of "cheese".

- a value of "no".

<br>

#### **16. Let’s now give our users a choice of buns using a dropdown list**

- In \<section> element with a class of "bun-type" there is a \<label> that we can associate a \<select> element with.

- Add a \<select> element with a name of "bun" and an id of "bun".

<br>

#### **17. Inside the \<select> element, add 3 \<option>s**

- The first \<option> should have a value of "sesame" and display the text Sesame on the webpage.

- The second \<option> should have a value of "potato" and display the text Potato on the webpage.

- The third \<option> can be a value that we choose and display text relevant to the value (make sure it’s not empty!)

<br>

#### **18. Time to add some sauce! Users might get creative with what sauce they choose to put, so let’s use the \<datalist> element**

- In \<section> element with a class of "sauce-selection", we already have the \<label> and \<input> set up.

- Add a \<datalist> element with an id of "sauces".

<br>

#### **19. Inside the \<datalist> element, add 3 \<option>s**

- The first \<option> should have a value of "ketchup".

- The second \<option> should have a value of "mayo".

- The third \<option> can be a value that we choose and display text relevant to the value (make sure it’s not empty!)

<br>

#### **20. We covered a lot of options but users might still have other ideas. Let’s make use of a \<textarea> element to give users more freedom**

In \<section> element with a class of "extra-info", we have provided a \<label> element. Add a \<textarea> with the following attributes:

- id and name set to "extra"

- rows set to "3"

- cols set to "40"

<br>

#### **21. Now add some default text to the created \<textarea>**

<br>

#### **22. At the bottom of the \<form> inside the element \<section class="submission">, add a submit button using the \<input> element**

The text inside the submit button should read: Submit.

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***