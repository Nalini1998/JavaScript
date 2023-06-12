//  Set up how many balls we want
let ballCount = 100;
//  Set up x and y position variable to equal an empty array
let x = [];
let y = []; 
//  Set up speed, size and color variable to equal an empty array
let xSpeed = [];
let ySpeed = [];
let r = [];
let g = [];
let b = [];
let size = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  //  Create a for loop that iterates through i until it reaches the ball count value
  for (let i = 0; i < ballCount; i++) {
    // Inside the for loop:
    //  Set x and y position to be the center
    x[i] = width / 2;
    y[i] = height / 2;
    //  Set the speeds to be random
    xSpeed[i] = random(-5, 5);
    ySpeed[i] = random(-5, 5);
    //  Set the size to be random
    size[i] = random(10, 50);
    //  Set the colors to be random
    r[i] = random(0, 256);
    g[i] = random(0, 256);
    b[i] = random(0, 256);
  } 

}

function draw() {
  background(0, 50);
  
  //  Iterate through a new for loop to change the properties in order to animate the balls
  for (let i = 0; i < ballCount; i++) {
    // Inside the for loop:

    //  Increment speed for x position
    x[i] += xSpeed[i];
    //  Increment speed for y position
    y[i] += ySpeed[i];
    //  Reverse x direction if ball hits left or right sides


    //  Reverse y direction if ball hits top or bottom sides
    if (x[i] < 0 || x[i] > width) {
      xSpeed[i] *= -1;
    }
    if (y[i] < 0 || y[i] > height) {
      ySpeed[i] *= -1;
    }
    //  Set random R, G, B values
    fill(r[i], g[i], b[i]);

    //  Style to have no strokes
noStroke();

    //  Draw the bouncing balls

    ellipse(x[i], y[i], size[i], size[i]);
   }
}