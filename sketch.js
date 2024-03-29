// background color
let colorBack = {
  rBk: 24,
  gBk: 2,
  bBk: 12
}

// box color
let colorBox = {
  rB: 99,
  gB: 75,
  bB: 102
}

// ribbon color
let colorRib = {
  rR: 149,
  gR: 144,
  bR: 168
}

// initial scale value
let present = {
  size: 1
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  setShakeThreshold(40);

  normalMaterial();
}

function draw() {
  background(colorBack.rBk, colorBack.gBk, colorBack.bBk);

  drawPresent();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawPresent() {
  // gyroscope to rotate the present
  rotateX(rotationX * 0.1);
  rotateY(rotationY * 0.1);
  rotateZ(rotationZ * 0.1);

  scale(present.size, present.size, present.size);

  // box
  push();
  fill(colorBox.rB, colorBox.gB, colorBox.bB);
  box(80);
  pop();

  // ribbon
  fill(colorRib.rR, colorRib.gR, colorRib.bR);

  push();
  box(85, 10, 85);

  box(10, 85, 85);
  pop();

  push();
  translate(0, 0, 40);
  sphere(8);
  pop();

  push();
  translate(12, 0, 48);
  rotateX(90);
  torus(15, 5, 16, 3);
  pop();

  push();
  translate(-12, 0, 48);
  rotateX(90);
  rotateY(180);
  torus(15, 5, 16, 3);
  pop();
}

function touchStarted() {
  colorBack.rBk = random(0, 100);
  colorBox.rB = random(0, 200);
  colorRib.rR = random(0, 200);
}

function deviceShaken() {
  present.size = random(0.2, 2);
}

function touchMoved() {
  return false;
}

function touchEnded() {
  DeviceOrientationEvent.requestPermission();
}
