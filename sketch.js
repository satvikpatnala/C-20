var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(100,200,50,50);
  fixedRect.shapeColor = "cyan";
  movingRect = createSprite (200,200,50,80);
  movingRect.shapeColor = "cyan"
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2&&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2&&
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2&&
 fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  movingRect.velocityX=0;
  movingRect.velocityY=0;
  
}else {
  movingRect.shapeColor = "cyan";
  fixedRect.shapeColor ="cyan";
}
  drawSprites();
}