// globals
let numPendulums = 24;
let startTime;
let speed = 0.0001;

function setup() {
  createCanvas(800, 800);

  // save time we have finished the setup, to ensure pendulums start at t==0
  startTime = millis() * speed;
}

function draw() {

  // clear background
  background(0);

  // seconds since we started the app (minus setup time)
  let secs = millis() * speed - startTime;

  for (let i = 0; i < numPendulums; i++) {
    // first pendulum oscillates 51 times per minute
    // each successive has one more oscillation per minute
    let freq = (51.0 + i) / 60.0;
    let pos = sin(freq * secs * 2 * PI);
    pos = map(pos, -1.0, 1.0, 0, height);
    // draw pendulum
    fill(255);
    noStroke();
    // center rect
    rect(width / numPendulums * i, pos, 10, 10);

    // uncomment here for another visual variation!!! //
    /*
    stroke(255);
    noFill();
    line(width / 2, 0, round(width / numPendulums) * i, pos);
    line(width / 2, height, round(width / numPendulums) * i, pos);
    */
  }
}