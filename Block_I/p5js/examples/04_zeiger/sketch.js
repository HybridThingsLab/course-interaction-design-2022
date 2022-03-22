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

  //milliseconds = int(millis() % 60000);
  milliseconds = int(millis());

  let hour = map(milliseconds, 0, 1000 * 60 * 60, 0, 360);

  // draw background
  fill(0);
  noStroke();
  ellipse(w / 2, h / 2, w / 2, w / 2);

  // milliseconds
  push();
  translate(w / 2, h / 2);
  rotate(hour);

  stroke(255, 0, 0);
  strokeWeight(10);
  line(0, 0, 0, -80);

  rotate(hour * 60);
  stroke(0, 255, 0);
  strokeWeight(5);
  line(0, 0, 0, -100);

  rotate(hour * 60 * 60);
  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, 0, 0, -120);

  pop();

}