let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(25);
  rect(30, 20, 40, 55);
}

function keyReleased() {
  if (keyCode === 32) saveCanvas(canvas, "screenshot", "jpg");
}
