let colorBack = {
  rBk: 24,
  gBk: 2,
  bBk: 12
}

let colorBox = {
  rB: 99,
  gB: 75,
  bB: 102
}

let colorRib = {
  rR: 149,
  gR: 144,
  bR: 168
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
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
  rotateX(rotationX * 0.1);
  rotateY(rotationY * 0.1);
  rotateZ(rotationZ * 0.1);

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

function touchMoved() {
  return false;
}

function touchEnded() {
  DeviceOrientationEvent.requestPermission();
}
