let dark;
let dots;
let temporary_index, temporary_size;
let mouse_pressed;

function setup() {
  dots = [];
  mouse_pressed = false;
  temporary_size = 0;

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
  background("#fff")
  if (mouse_pressed) {
    dots[temporary_index].size += 2; // if mouse is pressed, increase the dot size of our currently saved dot
  }

  fill("#335566");
  for( let ix in dots ) {
    ellipse(dots[ix].posX * windowWidth, dots[ix].posY * windowHeight, dots[ix].size); // draw circle for each dot
  }

  textSize(16);
  text("Click and hold to place dot", windowWidth * .01, windowHeight * .99);
}

function mousePressed() {
  mouse_pressed = true; // set the variable to true while mouse is pressed
  temporary_index = dots.length; // save the temporary index, so that we know, which dot we are currently enlarging

  dots.push({ // add the dot to the array
    posX: mouseX / windowWidth,
    posY: mouseY / windowHeight,
    size: temporary_size
  })
}

function mouseReleased() {
  mouse_pressed = false; // mouse is no longer pressed
  temporary_index = undefined; // we don't need the index anymore
  temporary_size = 0; // reduce the size back to 0
}
