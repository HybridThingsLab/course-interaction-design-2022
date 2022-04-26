var w = window.innerWidth;
var h = window.innerHeight;

let fS = 24;

function setup() {
  canvas = createCanvas(w, h);
  textSize(fS * 0.8);
  checkSensorPermissions();
}

function draw() {
  background(255);

  stroke(255, 0, 0);
  if (h > w) {
    ellipse(w / 2 + rotationY, h / 2, w * 0.8);
  } else {
    ellipse(w / 2 + rotationX, h / 2, h * 0.8);
  }
  noStroke();

  // https://p5js.org/reference/#EventsAcceleration
  // ----
  // https://p5js.org/reference/#/p5/rotationX
  text('rotationX: ' + rotationX, 20, fS * 2);
  // https://p5js.org/reference/#/p5/rotationY
  text('rotationY: ' + rotationY, 20, fS * 3);
  // https://p5js.org/reference/#/p5/rotationZ
  text('rotationZ: ' + rotationZ, 20, fS * 4);
  // https://p5js.org/reference/#/p5/accelerationX
  text('accelerationX: ' + accelerationX, 20, fS * 5);
  // https://p5js.org/reference/#/p5/accelerationY
  text('accelerationY: ' + accelerationY, 20, fS * 6);
  // https://p5js.org/reference/#/p5/accelerationZ
  text('accelerationZ: ' + accelerationZ, 20, fS * 7);
  // https://p5js.org/reference/#/p5/deviceOrientation
  text('deviceOrientation: ' + deviceOrientation, 20, fS * 8);

}

// ----------------------------------------------
// https://editor.p5js.org/PaulGSA/sketches/Ezs-7rM3Y
// ----------------------------------------------
// SENSOR PERMISSION MANAGER FOR iOS13 AND SAFARI
// THANKS TO Dae In Chung for his video here:
// https://youtu.be/AbB9ayaffTc
let sensorPermissionGranted = false;

function checkSensorPermissions() {
  // DeviceOrientationEvent and DeviceMotionEvent
  if (typeof (DeviceOrientationEvent) !== 'undefined' &&
    typeof (DeviceOrientationEvent.requestPermission) === 'function') {
    // Must be iOS device so we need to ask permission to use sensors
    DeviceOrientationEvent.requestPermission()
      .catch(() => {
        // show permission dialogue only first time
        // This button label can be customised
        let button = createButton("Allow access to sensors");
        button.style("font-size", "48px");
        button.center();
        button.mousePressed(requestAccess);
        throw error;
      })
      .then(() => {
        // already granted permission
        sensorPermissionGranted = true;
      })
  } else {
    // Non-iOS13 device so no worries
    sensorPermissionGranted = true;
  }
}

function requestAccess() {
  DeviceOrientationEvent.requestPermission()
    .then(response => {
      if (response == 'granted') {
        // User has granted permission to access sensors
        sensorPermissionGranted = true;
      } else {
        // User has denied permission to access sensors
        sensorPermissionGranted = false;
      }
    })
    .catch(console.error);
  this.remove(); // kills button after user interaction
}

function windowResized() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  resizeCanvas(w, h);
}