## **IMPROVED STYLING WITH CSS**
# **Transitions - 20,000 Leagues Under the Sea**

In this project I will follow step-by-step add the animations to an web page. The web page is an online reader; it presents the full text of the book “20,000 Leagues Under the Sea” by Jules Verne.

The page for the first chapter is mostly complete. There are a few fancy features:

- When we hover over the sidebar on the left, a menu opens which contains the Table of Contents.

- When we hover over a highlighted word in the text, a definition appears. See the words “phosphorescent” and “locomotion”.

- When we hover over the semi-transparent buttons at the bottom of the page, they turn opaque.

- When we hover over any link, it changes color.

These interactions add a level of refinement to an otherwise static page. 
My job will be to refine them even more. Currently, all these changes happen in an instant. Add transitions to make the changes smooth.

The website’s existing **index.html** and **style.css** files are displayed in the text editor.

<br>

# **Tasks**

<br>

#### **1. Add a CSS declaration to transition the text color inside the sidebar (nav a)**

In **style.css**, find the ruleset for links inside the sidebar (`nav a`). Add a CSS declaration to transition the text color. Experiment with different values for duration, timing function, and delay until I am satisfied.

<br>

#### **2. Next, I’ll animate the "Next" and "Back" buttons' transparency**

Find the `.button` ruleset. Add a declaration to transition the property opacity. Again, the choice for the other values is mine. Pick values for duration, timing function, and delay that feel good.

<br>

#### **3. Now make the sidebar slide out instead of instantly appearing**

*Now make the sidebar slide out instead of instantly appearing*

Add a declaration to the nav ruleset to transition the left property. Experiment with the other transition properties.

<br>

#### **4. Add a transition for the text color in the selector .definable .word**

Find the selector .definable .word which selects the words that have definitions. Add a transition for the text color.

<br>

#### **5. Make the definition block fall down from the top of the page and fade in for this section is .definable. definable .definition-container**

Add a declaration to transition the top property. Use a comma (,) to transition a second property, opacity.

<br>

### ***This Project was completed by [Nalini Vo](https://github.com/Nalini1998)***