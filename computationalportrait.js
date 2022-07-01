function preload() {
  img = loadImage("keenan.jpg");
}

let img;
function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  frameRate(24) 
}

function draw() {
  paintWithPixels()
    paintWithPixels()
  paintWithPixels()
  paintWithPixels()

}

function paintWithPixels()
{
  x = random(0,width)
  y = random(0,height)
  noStroke()
  fill(img.get(x,y))
  push()
  translate(x,y)
  circle(0,0,20)
  pop()
  
}


