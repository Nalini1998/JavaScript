// Populating Data
// Declare a const variable called team and set it to an empty object
const team = {
  // Add a _players property and a _games property
    _players: [
  //  Each player contains 3 properties: firstName, lastName, and age
      {firstName: 'Meow', lastName: 'Vo', age: 25},
      {firstName: 'BigDuck', lastName: 'Trang', age: 28},
      {firstName: 'SmallDuck', lastName: 'Trang', age: 01}
    ],
    _games: [
  //  Each game contains: opponent, teamPoints,opponentPoints
      {opponent: 'Jets', teamPoints: 42, opponentPoints: 27},
      {opponent: 'Giants', teamPoints: 45, opponentPoints: 12},
      {opponent: 'Eagles', teamPoints: 31, opponentPoints: 15}
    ],
  
  // Getting Data
  // Create a getter method called players to retrieve the _players
  get players() {
      return this._players;
    },
  // // Create a getter method called games to retrieve the _games
  get games() {
      return this._games;
    },
  
  // Adding Data
  // addPlayer
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
      };
      this.players.push(player);
    },
  // addGame
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
      };
      this.games.push(game);
    }
  };
  
  // add a new player: Bugs Bunny, age 76
  team.addPlayer('Bugs', 'Bunny', 76);
  
  // // add a new game: Bugs Bunny, age 76
  team.addGame('Titans', 100, 98);
  
  // Log the team's _players property to check that our new player was added
  console.log(team.players)
  
  // Log the team's _games property to check that our new game was added
  console.log(team.games)
  