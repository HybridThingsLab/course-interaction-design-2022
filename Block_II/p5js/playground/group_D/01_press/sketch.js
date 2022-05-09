let dark; // helper variable to check for dakr mode
let dots; // array to store dots

function setup() {
  dark = false; // start with light theme
  dots = []; // init the array

  window.addEventListener("resize", resize);

  createCanvas(windowWidth, windowHeight);

  fill("#ff00f0");
  noStroke();
  rectMode(CENTER);
}

function resize() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if( dark ) { // we are checking for light or dark mode before drawing
    background("#000000");
  } else {
    background("#ffffff");
  }

  fill(dark ? "white" : "black"); // set fill based on light or dark

  for( let ix in dots ) { // draw the dots
    rect(dots[ix].posX * windowWidth, dots[ix].posY * windowHeight, windowWidth / 100, windowWidth / 100); // we multiply the relative position and set a relative size
  }

  textSize(16);
  text("Press 'space' to change color, click to place dot", windowWidth / 100, windowHeight * .99);
}

// when key is pressed, call this function
function keyPressed() {
  dark = keyCode == 32 ? !dark : dark; // if 'space' is pressed, invert the dark variable, otherwise leave it
}

function mouseClicked() {
  // we are pushing a new dot, with a relative position
  dots.push({
    posX: mouseX / windowWidth,
    posY: mouseY / windowHeight
  })
}