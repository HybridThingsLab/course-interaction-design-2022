// webcam capture
let capture;
let camWidth = 640;
let camHeight = 480;

// frame buffer
let frames = [];
let intervalCapture = 100; // each 100ms = 10 times per seconds
let frameWidth = 48;
let frameHeight = 36;
let gridWidth = 30;
let gridHeight = 20;


let frameBuffer;


function setup() {

  // init canvas
  canvas = createCanvas(gridWidth * frameWidth, gridHeight * frameHeight).parent('canvas');

  // init webcam
  let constraints = {
    video: {
      mandatory: {
        maxWidth: camWidth,
        maxHeight: camWidth
      },
      optional: [{
        maxFrameRate: 30
      }]
    },
    audio: false
  };
  capture = createCapture(constraints, function (stream) {
    console.log("capture webcam started");
  });
  capture.hide();

  // init frames buffer
  let numberFrames = gridWidth * gridHeight;
  for (let i = 0; i < numberFrames; i++) {
    let img = createImage(camWidth, camHeight);
    frames.push(img);
  }

  // set interval frame buffer
  setInterval(function () {
    updateFrameBuffer();
  }, intervalCapture);

}

function draw() {

  // background
  background(0);

  // show webcam
  // image(capture, 0, 0, width, height);

  // show frames of buffer as grid
  let posX = 0;
  let posY = 0;
  for (let i = frames.length - 1; i >= 0; i--) {
    // show frame
    image(frames[i], posX, posY, frameWidth, frameHeight);
    // couter position x
    posX += frameWidth;
    // if at end of row next row
    if (posX >= width) {
      posX = 0;
      posY += frameHeight;
    }
  }


  // show FPS(for debugging)
  fill(255);
  noStroke();
  rect(0, 0, 64, 16);
  fill(0);
  text("FPS " + int(frameRate()), 8, 12)

}

// update frame buffer
function updateFrameBuffer() {

  // get current frame
  frames[0].copy(capture, 0, 0, camWidth, camHeight, 0, 0, camWidth, camHeight);

  // shift through frames
  frames[frames.length - 1] = frames[0];
  for (let i = 1; i < frames.length; i++) {
    frames[i - 1] = frames[i];
  }

}