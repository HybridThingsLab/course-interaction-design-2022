let balls = [];
let goal;

// we need the class to hold the position, size, and year of the ball
class Ball {
  constructor(posX, posY, r, year) {
    this.posX = posX;
    this.posY = posY;
    this.r = r;
    this.year = year
    this.dragging = false;
  }
}

// the goal need to hold the position, width, height and whether it is hit
class Goal {
  constructor(posX, posY, w, h, hit) {
    this.posX = posX;
    this.posY = posY;
    this.w = w;
    this.h = h;
    this.hit = hit;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);

  // create some initial data
  goal = new Goal(200, 100, windowWidth - 400, windowHeight - 400, false);

  // ball position doesn't really matter in the beginning...
  balls.push(new Ball(0, 0, 50, 1954));
  balls.push(new Ball(0, 0, 50, 1974));
  balls.push(new Ball(0, 0, 50, 1990));
  balls.push(new Ball(0, 0, 50, 2014));

  // because we are setting it here
  for(let ix in balls) {
    let ball = balls[ix];
    ball.posX = 200 + (windowWidth - 200) / balls.length * ix;
    ball.posY = windowHeight - 200;
  }
}

function draw() {
  background("#fff");

  // draw the goal color differently, if it is "hit"
  if(goal.hit) {
    fill("#3345ef");
  } else {
    fill("green");
  }

  rect(goal.posX, goal.posY, goal.w, goal.h);

  // draw the balls
  for( let i = 0; i < balls.length; i++) {
    fill("#123");
    noStroke();
    let ball = balls[i];

    // if there is a ball, that is being dragged, draw it under the mouse pointer
    if ( ball.dragging ) {
      ball.posX = mouseX;
      ball.posY = mouseY;
    }
    ellipse(ball.posX, ball.posY, ball.r);
  }
}

function mousePressed() {
  // check, whether there is a ball that we can drag
  for( let i = 0; i < balls.length; i++) {
    if (dist(mouseX, mouseY, balls[i].posX, balls[i].posY) < 25) { // if we are clicking inside a ball...
      balls[i].dragging = true; // ... set the dragging to true
      break; // we need the break, otherwise we can drag more than one ball if they are close together and we don't want that
    }
  }
}

function mouseReleased(e) {
  // when the mouse is released, we "map" each ball, meaning we return another object instead of the original, that has the dragging set to false
  balls.map(b => {
    b.dragging = false;
    return b;
  })

  // we are checking, if any of those balls are inside the goal
  for (let ix in balls) {
    ball = balls[ix];
    if ( ball.posX > goal.posX && ball.posX < goal.posX + goal.w) {
      if ( ball.posY > goal.posY && ball.posY < goal.posY + goal.h) {
        goal.hit = true;
        break; // no need to check further, if we found one, so we are breaking the loop
      } else {
        goal.hit = false;
      }
      goal.hit = false;
    }
  }
}