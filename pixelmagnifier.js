function preload() {
  frog = loadImage("https://assets.editor.p5js.org/5e3187eff3594000177d90e2/28c8bbe2-9e10-47a1-8cde-a49ef72c23c2.png");
}

let img;
function setup() {
  createCanvas(frog.width, frog.height);
  pixelDensity(1);
  frameRate(24) 
}

function draw() {
  image(frog, 0, 0, width, height);
  paintWithPixels()
}

function paintWithPixels()
{
  x = mouseX
  y = mouseY
  fill(frog.get(x,y))
  push()
  translate(x,y)
  circle(-20,-20,80)
  fill("white")
  circle(0,0,10)
  pop()
  
}


