let font;
let tSize = 150;////size of the text
let tposX = 350;////// X position of text
let tposY = 500;/////// Y position of text
let pointCount = 0.9; /// between 0 - 1 particle count

let speed = 10;/// speed of particles
let comebackSpeed = 100;////// lower numbers less strenght
let dia = 50;////diameter of interaction
let randomPos = true;///starting positions - true or false
let pointsDirection = "general";/////left right up down general 
let interactionDirection = -1;///// between -1 and 1

let textPoints = [];

function preload() {
  font = loadFont("AvenirNextLTPro-Demi.otf");
}

function setup() {
  createCanvas(1000, 1000);

  textFont(font);

  let points = font.textToPoints("LABA", tposX, tposY, tSize, {
    sampleFactor: pointCount,
  });

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];

    let textPoint = new Interact(
      pt.x,
      pt.y,
      speed,
      dia,
      randomPos,
      comebackSpeed,
      pointsDirection,
      interactionDirection
    );
    textPoints.push(textPoint);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < textPoints.length; i++) {
    let v = textPoints[i];
    v.update();
    v.show();
    v.behaviors();
  }
}
