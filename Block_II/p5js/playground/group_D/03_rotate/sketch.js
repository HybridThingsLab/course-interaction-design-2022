let knobRotation; // helper variable to store the current rotation
let indicatorXRotation, indicatorYRotation; // helper variable to store the indicator position / rotation
let knobSize; // helper variable to store the current knob size
let barWidth, barHeight; // helper variable to store the current bar width and height
let knobColor = "#f3f3f3";
let indicatorColor = "#dfdfdf";
let music;

function setup() {
  knobRotation = 0;

  window.addEventListener("resize", resize);
  music = document.getElementsByTagName("audio")[0];

  createCanvas(windowWidth, windowHeight);
  setSizes();
  setRotation();
  setVolume( map(knobRotation, 0, 360, 0, 1) ); // map from 0-360 of rotation to 0-1 of volume
}

// set the rotation of the indicator based on the current knobRotation
function setRotation() {
  indicatorXRotation = windowWidth / 2 + Math.sin(Math.PI * knobRotation / 180) * (knobSize / 3.5);
  indicatorYRotation = windowHeight / 2 - Math.cos(Math.PI * knobRotation / 180) * (knobSize / 3.5);
}

// set the sizes based on window width
function setSizes() {
  knobSize = windowWidth / 10;
  barWidth = windowWidth / 4;
  barHeight = windowHeight / 40;
}

// set the volume to the provided value
function setVolume(value) {
  music.volume = value;
}

function resize() {
  resizeCanvas(windowWidth, windowHeight);
  setSizes();
  setRotation();
}

function draw() {
  background("#fff")

  // draw the knob
  fill(knobColor);
  stroke("#f0f0f0");
  ellipse(windowWidth / 2, windowHeight / 2, knobSize);

  fill(indicatorColor);
  ellipse(indicatorXRotation, indicatorYRotation, windowWidth / 30);

  // draw the bar
  fill(knobColor)
  rectMode(CENTER);
  rect(windowWidth / 2, windowHeight * .7, barWidth, barHeight, windowHeight / 80);

  // only draw the indicator, if the volume is bigger than 0
  if ( knobRotation > 0 ) {
    fill(indicatorColor);
    rectMode(CORNER);
    rect(windowWidth / 2 - barWidth / 2, windowHeight * .7 - barHeight / 2, barWidth * knobRotation / 360, barHeight, windowHeight / 80);
  }

  fill("#666");
  text(String( Math.floor(music.volume * 100) ).padStart(3, '0') , (windowWidth - barWidth) / 2 + 10, windowHeight * .7 + 6); // write the current volume value in percent

  // draw the text
  textSize(16);
  text("Use mouse wheel to rotate", windowWidth * .01, windowHeight * .99);
}

function mouseWheel(event) {
  // --- use this line, if you want to limit the rotation to one cycle
  knobRotation = max( min(knobRotation + event.delta, 360), 0) // set the rotation to no more than 360 and no less than
  setVolume( map(knobRotation, 0, 360, 0, 1) ); // map from 0-360 of rotation to 0-1 of volume

  // --- use the following line instead, if you want to rotate infinitely
  // knobRotation = ( knobRotation + event.delta + ( event.delta > 0 ? 0 : 360) ) % 360; // set the rotation of the knob by the amount scrolled, if negative by the inverse amount. Also never more than 360 degrees

  setRotation();
}