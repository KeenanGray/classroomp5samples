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
  background(220)
  //image(frog, 0, 0, width, height);
  
  //draw a grid over the image
  
  nW = 10
  nH = 10
  
  rW = width/nW
  rH = height/nH
  
  for(i = 0;i<nW;i++){
    for(j = 0; j<nH;j++)
      {
        x = i*rW
        y = j*rH
        noStroke()
        //fill the rect with the color at the center of each rectangle
        fill(frog.get(x+rW/2,y+rH/2))
        rect(x,y, rW,rH)
      }
  }
}

function paintWithPixels()
{

  
}


