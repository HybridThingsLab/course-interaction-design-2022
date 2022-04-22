let canvas;
let speed = 1;
let translateSpeed = 1;
let irisX;
let irisY;
let outerRadius = 200;

let translateX = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  irisX = windowWidth / 2;
  irisY = windowHeight / 2;
}

function draw() {
  if (
    abs(
      dist(windowWidth / 2, windowHeight / 2, irisX, irisY) >
        outerRadius / 2 - 25
    )
  ) {
    speed = -speed;
  }

  irisX += speed;
  irisY += speed;

  translateX += translateSpeed;
  if (abs(translateX > 200)) translateSpeed = -translateSpeed;

  push();
  translate(translateX, 0);
  noStroke();
  background(255);
  fill(200);
  circle(windowWidth / 2, windowHeight / 2, outerRadius);
  fill(0);
  circle(irisX, irisY, 50);
  pop();
}
