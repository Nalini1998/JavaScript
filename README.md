### **BUILDING INTERACTIVE WEBSITES**
# **Project: Authorization Form**

A client just called me to say that they love their new website! There’s only one problem: they don’t like how their contact page displays their personal information for all to see.

They’ve asked us to hide their website’s contact page behind a password form. In this project, we’ll accomplish this by creating a React component to set up a simple authorization layer.

_Let’s get started!_

# **Tasks**

## **Setting Up**

<br>

#### **1. See the current state of things**

The contact info in the browser looks fine, but it should be hidden until we enter a password!

Look in `Contact.js`. We can see a `Contact` function component. Inside is a function called `handleSubmit()`, which will be responsible for authorizing the user into the system.

_There’s a lot of logic already here._

<br>

#### **2. Only display the "Contact"  if authorized is true**

Let’s look at the `<h1></h1>` tags in the return statement.

Right now, the `<h1>` element displays the text `Contact`. If a user hasn’t been `authorized`, then we want the `<h1>` element to display `Enter the Password` instead.

Using what we know of conditionals in components, make the `<h1>` element display `"Contact"` only if `authorized` is `true`. If `authorized` is `false`, then the `<h1>` element should display `"Enter the Password"`.

<br>

#### **3. Let’s check to see if that last step is working properly**

For now, the browser should say, `“Enter the Password”`. This is because `authorized` has the initial value of `false`.

Edit that one so that it has `useState(true)` instead of `useState(false)` for now. We should see that the text now says `“Contact”`. 

If it works, then make sure to change it back to `useState(false)` before moving on.

<br>

## **The Login Form**

#### **4. Declare a new variable named login**
If the user isn’t authorized, then we want them to see a login form into which they can enter a password. 

_Let’s make that login form!_

Before the return statement but after the `handleSubmit()` function, declare a new variable named `login`.

Set `login` equal to a **JSX** `<form></form>` element. This `<form></form>` is going to have multiple children, so wrap it in parentheses!

Give the `<form></form>` an attribute of `action="#"` to make sure it does not redirect.

<br>

#### **5. Let’s give your form some \<input />s for the user to fill out**

In between the `<form></form>` tags, write two `<input />` tags. Give the first `<input />` two attributes:

```
type="password"
placeholder="Password"
```

Give the second `<input />` one attribute: `type="submit"`.

<br>

## **The Contact Info**

<br>

#### **6. Now, let’s hide the contact info**

After our `login` variable, declare another variable named `contactInfo`. Set it equal to empty parentheses:

```
const contactInfo = (
); 
```

Make sure it is still inside the function component and before the return statement.

Next, move the `<ul></ul>` element in the return statement in between the parentheses we just created for `contactInfo`!

<br>

#### **7. Make the ternary return contactInfo or login**
_Great! By saving two JSX expressions as variables, we are ready to toggle between them._

In the component’s `return` statement, make a new line right below the `<h1></h1>` element. On this new line, use a ternary operator. 

If `authorized` is `true`, make the ternary return `contactInfo`. Otherwise, make the ternary return `login`.
 
<br>

## **Handling the Submit**

#### **8. Make handleSubmit to get called whenever a user clicks the submit button**
Within the `Contact` function component, we see a function named `handleSubmit()`.

This function will check whether a submitted `password` is equal to `'swordfish'`. If it is, then authorized will become `true`.

We need `handleSubmit` to get called whenever a user clicks the **submit** button.

Give the `<form></form>` element an `onSubmit` attribute.

Set the attribute’s value equal to the `handleSubmit` function.

<br>


#### **9. Check it with the incorrect password** 
Try entering an incorrect password and hitting `“Submit”`. Nothing should happen.

Now try entering `“swordfish”`. The website should reveal the **contact info**!

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***