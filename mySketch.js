let shape = 0;
let width = [10, 25, 50];
let height = [50, 80, 90];


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	
}

function draw() {
	frameRate(10)
	fill(random(int(255)))
	shape = int(random(2))
	if (shape == 1) {
  ellipse((random(windowWidth)), (random(windowHeight)), (random(width)),(random(height)));
	} else { 
	rect((random(windowWidth)), (random(windowHeight)), (random(width)), (random(height)))
	}
}
