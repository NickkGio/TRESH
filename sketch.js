let video;
var bg;
let canva;
let black;
let white;
let img;
let ditherType = 'bayer';


function setup() {
  canva = createCanvas(1280 / 2.5, 1920 / 4);
  video = createCapture(VIDEO);
  video.size(AUTO,AUTO);
  pixelDensity(1);
  video.hide()
  black = new Riso('black');
  bg = color(255,255,255);

}



function draw() {
  
  background(bg);
  let threshold = map(200, 0, width, 0, 300);
  clearRiso();
  let dithered = ditherImage(video, ditherType, threshold);
 black.image(dithered, 0, 0);
  drawRiso();
  ;
}

function mouseClicked() {
  // exportRiso();
}

function keyReleased() {
  if (key == 1) ditherType = 'atkinson';
  else if (key == 2) ditherType = 'floydsteinberg';
  else if (key == 3) ditherType = 'bayer';
  else if (key == 4) ditherType = 'none';
}

