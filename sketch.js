function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	fill(mouseX%255);
	ellipse(mouseX,mouseY,10,10);
}
