let petalList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function preload() {}

function draw() {
  noStroke();
  fill(255, 0, 0);
  circle(windowWidth / 2, windowHeight / 2, 200);

  petalList.push(new Petal());
  petalList.push(new Petal());

  console.log(frameCount);

  if (frameCount % 2 == 0) {
    petalList.shift();
  }

  strokeWeight(1);
  stroke(0);
  for (let p of petalList) {
    line(windowWidth / 2, windowHeight / 2, Math.sin(p.toX), Math.cos(p.toY));
  }

  noStroke();
  fill(120, 200, 100);
  circle(windowWidth / 2, windowHeight / 2, 60);

  console.log(petalList);
}
