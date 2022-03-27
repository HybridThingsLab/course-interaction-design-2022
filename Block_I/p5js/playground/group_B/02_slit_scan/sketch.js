  // see also https://editor.p5js.org/codingtrain/sketches/B1L5j8uk4 by Daniel Shiffman
  // Tutorial 1: https://www.youtube.com/watch?v=WCJM9WIoudI
  // Tutorial 2: https://www.youtube.com/watch?v=YqVbuMPIRwY

  // webcam capture
  let capture;
  let camWidth = 640;
  let camHeight = 480;

  // slit scan
  let x = 0;
  let intervalCapture = 50; // each 50ms = 20 times per seconds


  function setup() {

    // init canvas
    canvas = createCanvas(1200, 480).parent('canvas');
    pixelDensity(1);

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

    // backroung
    background(0);

    // set interval frame buffer
    setInterval(function () {
      updateScreen();
    }, intervalCapture);

  }

  function draw() {

    // we use update screen instead

  }

  function updateScreen() {

    capture.loadPixels();
    let w = capture.width;
    let h = capture.height;
    copy(capture, w / 2, 0, 1, h, x, 0, 1, h);
    x = x + 1;
    if (x > width) {
      x = 0;
    }

  }