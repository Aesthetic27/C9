var box;
var ball;

function setup() {
  createCanvas(500,500);// this is the code to create the output area
  box = createSprite(200,200,30,30);
  
}

function draw() 
{
   background("black");
   
   if (keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5;
   }
   if (keyIsDown(LEFT_ARROW)){
    box.position.x=box.position.x-5;
   }
   if (keyIsDown(UP_ARROW)){
    box.position.y=box.position.y-5;
   }
   if (keyIsDown(DOWN_ARROW)){
    box.position.y=box.position.y+5;
   }
  drawSprites();
}




