let w = 600
let h = 600;

let seconds, milliseconds;

function setup() {

  createCanvas(w, h);
  angleMode(DEGREES);

  noStroke();
  fill(255, 0, 0);
}

function draw() {

  background(255);

  milliseconds = int(millis() % 60000);
  seconds = milliseconds / 1000;
  //seconds = int(milliseconds / 1000);


  push();
  translate(w / 2, h / 2);
  rotate(-90);
  fill(map(int(seconds), 0, 60, 0, 255), map(int(seconds), 0, 60, 255, 0), 0);
  //fill(150);
  arc(0, 0, w, w, 0, seconds * 6, PIE);
  //fill(map(int(seconds),0,60,0,255),map(int(seconds),0,60,255,0),0);
  //arc(0,0, w, w, int(seconds * 6) - int(seconds*6)%10, seconds*6, PIE);
  pop();

}