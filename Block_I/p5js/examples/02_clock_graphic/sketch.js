// https://p5js.org/examples/input-clock.html

let w = 800
let h = 800;
let seconds, milliseconds;

function setup() {

  createCanvas(w, h);
  angleMode(DEGREES);
}

function draw() {

  background(255);

  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);
  //seconds = milliseconds / 1000;

  let s = map(seconds, 0, 60, 0, 360);
  let m = map(milliseconds, 0, 1000, 0, 360);

  // draw background
  fill(0);
  noStroke();
  ellipse(w / 2, h / 2, w / 2, w / 2);

  // milliseconds
  push();
  translate(w / 2, h / 2);
  rotate(m);
  stroke(0, 255, 0);
  strokeWeight(5);
  line(0, 0, 0, -80);
  pop();

  // seconds
  push();
  translate(w / 2, h / 2);
  rotate(s);
  stroke(255, 0, 0);
  strokeWeight(10);
  line(0, 0, 0, -80);
  pop();

}