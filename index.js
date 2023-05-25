// Created by Nalini Vo
class Media {
    contructor(title) {
      this._title = title;
      this._isCheckedOut  = false;
      this._ratings  = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
      get ratings() {
      return this._ratings;
    }
    set isCheckedOut(newisCheckedOut) {
      this._isCheckedOut = newisCheckedOut;
    }
    toggleCheckOutStatus () {
    this._isCheckedOut = !this._isCheckedOut;
    }
  }
  
  function addRating(value) {
    if (value < 5 && value > 1) {
      console.log("Everything is okay");
    } else {
      throw new Error("Invalid Input. Please enter an integer between 1-5.");
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
    super(title);
    this._director  = director;
    this._runTime = runTime;
    }
    get director() {
      return this._director;
    }
    get runTime() {
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  console.log(historyOfEverything);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating = [4,5,5];
  let numbers = historyOfEverything.addRating;
  function getAverageRating(numbers) {
      return numbers.reduce((x,y) => x+y)/numbers.length
  }
  console.log(getAverageRating(numbers));
  
  const speed = new Movie('Jan de Bont', 'Speed', 166);
  console.log(speed);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating = [1, 1, 5];
  let speeds = speed.addRating;
  function getAverageRating(speeds) {
      return speeds.reduce((x,y) => x+y)/speeds.length
  }
  console.log(getAverageRating(speeds));
  
  class CD extends Media {
    constructor(artist, title) {
    super(title);
    this._artist  = artist;
    }
    get artist() {
      return this._artist;
    }
  }
  
  const shuffle = new CD('Nalini cutie', 'Minh bat chuoc loai Meow keu nha');
  console.log(shuffle);
  shuffle.toggleCheckOutStatus();
  console.log(shuffle.isCheckedOut);
  
  shuffle.addRating = [5,5,5];
  let shuffles = shuffle.addRating;
  function getAverageRating(shuffles) {
      return shuffles.reduce((x,y) => x+y)/shuffles.length
  }
  console.log(getAverageRating(shuffles));
  