### **BUILDING INTERACTIVE WEBSITES**
# **Project: Team Stats**
We want to create, retrieve, and add information about our favorite sports team. Basketball, soccer, tennis, or water polo, we pick it ourselves. It’s our job to create data using the JavaScript data structures at our disposal: **arrays** and **objects**.

After we create these data structures in this project, feel free to challenge ourselves to gain insights from them. For example, we might want to get the total number of games our team has played, or the average score of all of their games.

<br>

# **Tasks**

<br>

## **Populating Data**

<br>

#### **1. Declare a const variable called team and set it to an empty object.**

<br>

#### **2. Add a _players property and a _games property and initialize both to empty arrays.**
> Our team has `players` and the `games` that they have played. Let’s represent both of these by adding two properties to our team object. 

<br>

#### **3. Next, populate the empty_players array with three players.**
Each `player` should be an object containing three properties: **firstName**, **lastName**, and **age**. 
Put each `player` on a new line to prevent the line from getting too long.

<br>

#### **4. Let’s do the same for our _games array.**
Populate the empty array with three `games`. Each `game` should be an object containing three properties: **opponent**, **teamPoints**, **opponentPoints**.

<br>

## **Getting Data**

<br>

#### **5. Create a getter method called players to retrieve the _players property.**
Inside the getter method, return the `_players` property.

For the scope of this project, we won’t need to create setter methods, because we don’t want anyone to change the data saved to the properties.

<br>

#### **6. Create another getter method called games to retrieve the _games property.**
Inside the getter method, return the `_games` property.

<br>

## **Adding Data**

<br>

#### **7. We want to add a new player to our team.**
Add a `.addPlayer()` method to the `team` object.
This method should take in three parameters: **newFirstName**, **newLastName**, and **newAge**.

Inside the method, create a `player` object by setting the three parameters to be the values for the object's three properties: `firstName`, `lastName`, `age`. 

Finally, add the `player` object to the team's `_players` array.

<br>

#### **8. Let’s try out our new .addPlayer() method to add a new player**

Below the `team` object, let’s try out our new `.addPlayer()` method to add a new `player`: `Bugs` `Bunny`, age `76`.
`Log` the team's `_players` property to check that our new `player` was added.

<br>

#### **9. Create a method for adding game results called addGame**

The scorekeeper has some new information for us! Create a method for adding game results called `addGame` that takes three parameters: **newOpponent**, **newTeamPoints**, **newOpponentPoints**.

Inside the `.addGame()` method, create a `game` object by setting the three parameters to be the values for the object's three properties: `opponent`, `teamPoints`, `opponentPoints`.

Add the `game` object to the team's `_games` array.

<br>

#### **10. Finally, below our team object, use the .addGame() method to add a record of a new game.**

Our team played against the `'Titans'` where we scored `100` points and the opponent scored `98` points.

`Log` the team's `_games` property to check that our new game record was properly added.

<br>

### ***This Project was wrote by [Nalini Vo](https://github.com/Nalini1998)***