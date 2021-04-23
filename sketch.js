var x;
var y;
var z;
var a;
function setup() {
  y= random(1,255)
  z= random(130,168)
  a= random(130,168)
  createCanvas(400, 400);
  background(220)
}

function draw() {
  x = 60;
  

  fill(255)
  ellipse(200, 200, 200, 200)
  fill(255)
  ellipse(165, 150, 50, 67)
  fill(255)
  ellipse(235, 150, 50, 67)
  fill(0)
  rect(140, 10, 115, 100)
  line(100, 112, 300, 112)
  line(200, 200, 250, 220)
  line(200, 220, 250, 220)
  point(165, a)
  point(235, z)
  fill(255)
  ellipse(200, 260, 50, 50)
  if (mouseX > 200) {
    x = 40
  }
  ellipse(200, 260, x,x)
  strokeWeight(7)
  fill(120,y,y)
  rect(139, 60, 118, 40)
}