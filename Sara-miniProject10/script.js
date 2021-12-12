let day = false;
let walk = false;
let y2 =0;
let x2=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  translate(0, height / 2);
  if(walk == true){
    let degree = radians(frameCount);
    y2 = sin(frameCount) * 2;
    x2 = (frameCount % width) / 1.25;
  }
  drawScene();
  drawClouds();
  drawPom(x2, y2);
}

function start(){
  walk = true;
}

function stop(){
  walk = false;
}

function drawScene() {
  if(day == true){
    background(135, 206, 235);
  }
  else{
    background(0,0,153);
  }
  fill(126, 200, 80);
  rect(0, 90, width, height / 2);
}

function daytime(){
  day = true;
}

function night(){
  day = false;
}

function drawPom(x, y) {
  noStroke();
  fill(255, 255, 153);
  translate(x - 100, y);
  drawBody(x, y);
  drawEars(x, y);
  drawArms(x, y);
  drawFeet(x, y);
  drawHat(x, y);
  drawFace(x, y);
}
function drawBody(x, y) {
  push();
  translate(x, y);
  ellipse(0, 0, 165, 200);
  pop();
}

function drawEars(x, y) {
  push();
  translate(x - 70, y - 45);
  rotate(QUARTER_PI);
  ellipseMode(CENTER);
  ellipse(0, 0, 50, 100);
  pop();
  push();
  translate(x + 70, y - 45);
  rotate(QUARTER_PI + HALF_PI);
  ellipseMode(CENTER);
  ellipse(0, 0, 50, 100);
  pop();
}

function drawArms(x, y) {
  push();
  translate(x - 80, y + 20);
  rotate(QUARTER_PI);
  ellipseMode(CENTER);
  ellipse(0, 0, 25, 50);
  pop();
  push();
  translate(x + 80, y + 20);
  rotate(QUARTER_PI + HALF_PI);
  ellipseMode(CENTER);
  ellipse(0, 0, 25, 50);
  pop();
}

function drawFeet(x, y) {
  push();
  translate(x - 40, y + 90);
  circle(0, 0, 30);
  pop();
  push();
  translate(x + 40, y + 90);
  circle(0, 0, 30);
  pop();
}

function drawHat(x, y) {
  push();
  stroke(165, 42, 42);
  fill(165, 42, 42);
  translate(x, y - 90);
  ellipse(0, 0, 100, 40);
  strokeWeight(10);
  line(0, 0, -10, -30);
  pop();
}

function drawFace(x, y) {
  fill(0);
  push();
  fill(0);
  translate(x - 35, y - 40);
  circle(0, 0, 10);
  pop();
  push();
  translate(x + 30, y - 40);
  circle(0, 0, 10);
  pop();
  push();
  translate(x, y - 30);
  triangle(0, 10, -10, 0, 10, 0);
  pop();
}
function drawClouds() {
  let x = -((frameCount % width) * 2) + width * 1.5;
  let deg = radians(frameCount);
  let y = -(sin(deg) * 10);
  let y1 = -(noise(sin(deg)) * 10);
  noStroke();
  fill(255);
  ellipse(x - 100, y - 100, 25, 15);
  ellipse(x + 100, y1 - 50, 40, 15);
  ellipse(x, y - 100, 30, 10);
}
