let sunrise, sunset;

function setup() {
  navigator.geolocation.getCurrentPosition(function(data){ // use the geolocation api (the browser will ask you, if it's ok to use location!)
    let lat = data.coords.latitude; // get the latitude from the geolocation api
    let long = data.coords.longitude; // get the longitude from the geolocation api

    fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`) // use the fetch api to get the times form an external site (sunrise-sunset.org)
      .then(data => data.json()) // then keyword tells the function what to do, when the fetch is done. In this case, take the data and return the json() version of it
      .then(res => { // then, pass the result as res into the next then block
        sunrise = res.results.sunrise; // set the sunrise from data
        sunset = res.results.sunset; // set the sunset from data

        createCanvas(windowWidth, windowHeight); // when everything is done, create the canvas (no need to create the canvas, if we don't have the location, yet)
        textAlign(CENTER, CENTER); // set the text alignment
      })
  });
}

function draw() {
  background("white");
  textSize(18);
  noStroke();
  fill("black");
  rect(0, windowHeight / 2, windowWidth, windowHeight / 2);
  text(`Sunrise at your location: ${sunrise}`, windowWidth / 2, windowHeight / 2 - 40);
  fill("white");
  text(`Sunset at your location: ${sunset}`, windowWidth / 2, windowHeight / 2 + 40);
}