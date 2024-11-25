function preload() {
  frog = loadImage("https://www.pbs.org/wnet/nature/files/2021/05/frog-1280x720.png");
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
  
  pixelsWide = 60
  pixelsTall = 60
  
  rowWidth = (int) (width/pixelsWide)
  rowHeight = int(height/pixelsTall)
  
  for(i = 0;i<pixelsWide;i++){
    for(j = 0; j<pixelsTall;j++)
      {
        x = i*rowWidth
        y = j*rowHeight
        noStroke(0)
        //fill the rect with the color at the center of each rectangle
        fill(frog.get(x+rowWidth/2,y+rowHeight/2))
        rect(x,y, rowWidth,rowHeight)
      }
  }
}
