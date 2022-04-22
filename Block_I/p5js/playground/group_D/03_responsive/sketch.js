let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  rectMode(CENTER);
  fill(200);
  rect(windowWidth / 2, windowHeight / 2, 400);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
