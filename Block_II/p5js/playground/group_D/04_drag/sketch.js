let circle, target; // our two main objects
let hover, dragging; // our states fot the object
let points; // game related variables
let timeLeft, timeInterval; // time related variables
let ez; // easy mode

function setup() {
  window.addEventListener('resize', resize);

  circle = { // create the first circle
    posX: windowWidth / 2, // position X
    posY: windowHeight / 2, // position Y
    r: 50, // radius
    backgroundColor: "#C8B4BB", // default background color
    hoverColor: "#7F7A8C", // color when mouse is hovering
    draggingColor: "#2F4858" // color when dragging
  }

  hover = false; // set the hover state to false
  dragging = false; // set the dragging state to false
  points = 0; // start with 0 points
  timeLeft = 5; // initial time left are 5 seconds
  ez = false; // easy mode off

  createCanvas(windowWidth, windowHeight);

  noStroke();
  generateTarget(); // generate the first target

  interval = setInterval(function() { // set an interval to decrease the time by 1 each second
    timeLeft -= 1;
  }, 1000);
}

function draw() {
  background("#E8D4D4");

  if ( timeLeft == 0 ) { // if there is no time left, the game is lost
    textAlign(CENTER, CENTER);
    text(`Game Over. You got ${points} point${ points !== 1 ? 's' : '' }!`, windowWidth / 2, windowHeight / 2); // write the end score
    noLoop(); // and stop drawing
    clearInterval(timeInterval); // stop the interval
  }

  // draw the target
  noFill();
  stroke("#576074")
  strokeWeight(2);
  ellipse(target.posX, target.posY, target.r);

  // draw the circle
  if( dragging ) { // if dragging
    fill( circle.draggingColor );
  } else if ( hover ) { // if just hovering
    fill( circle.hoverColor );
  } else { // default case
    fill( circle.backgroundColor );
  }
  noStroke();

  ellipseMode(CENTER);
  ellipse(circle.posX, circle.posY, circle.r);

  if (ez) { // if easy mode, draw a line connecting both
    stroke(circle.draggingColor);
    line(circle.posX, circle.posY, target.posX, target.posY);
    noStroke();
  }

  // draw the overlay
  textAlign(LEFT, BOTTOM);
  textFont('Courier');
  fill("#333");
  textSize(16);
  text("Drag the circle into the target", windowWidth * .01, windowHeight * .98);

  textAlign(LEFT, TOP);
  textSize(24);
  text(`TIME: ${timeLeft}`, 20, 20);
  text(`POINTS: ${points}`, 20, 50);
}

function resize() {
  resizeCanvas(windowWidth, windowHeight);
  generateTarget(); // also generate a new target position, because target could be off screen after resize
}

function mouseMoved(event) {
  hover = dist(circle.posX, circle.posY, mouseX, mouseY) < circle.r / 2; // check if hovering over circle: if mouse is inside the circle
}

function mouseDragged(event) { // update position of circle while dragging
  circle.posX += event.movementX;
  circle.posY += event.movementY;
}

function mousePressed() {
  if( hover ) { // need this for the color to work
    dragging = true;
  }
}

function mouseReleased() {
  dragging = false; // disable dragging color
  checkForHit(); // check if on target after released
}

function generateTarget() { // generate new target
  target = {
    posX: random(0, windowWidth),
    posY: random(0, windowHeight),
    r: circle.r
  }

  // and reset circle position
  circle.posX = random(0, windowWidth);
  circle.posY = random(0, windowHeight);
}

// enable easy mode, if space bar is pressed
function keyPressed() {
  if( keyCode === 32 ) { // keyCode === 32 is spacebar
    ez = !ez; // toggle easy mode
  }
}

function checkForHit() {
  if( !dragging ) { // if circle is not being dragged anymore
    if( dist(circle.posX, circle.posY, target.posX, target.posY) < target.r / 2 ) { // if the circle is on the target after the mouse button has been let go
      points += 1; // get 1 point
      timeLeft += ez ? 10 : 5; // get 5 seconds on normal or 10 seconds on easy
      generateTarget(); // generate a new target
    }
  }
}
