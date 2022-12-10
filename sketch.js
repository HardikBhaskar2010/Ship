var sea,ship;
var sea,ship;

function preload(){
  sea = loadImage("sea.png");
  ship =loadAnimation("ship-1.png","ship-2.png")


}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea = createSprite(400,200);
  sea.addImage(sea,"sea.png");
  sea.scale=5;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation(movingShip, "ship-1.png");
  ship.scale =0.25;
  
}

function draw() {
  background("white");
  
//Uncomment the correct line to make the background move to create a forward moving effect for the boat.
  //sea.x = -3;
  //sea.velocityX = -3;
  sea.velocityX = 3;
  

  
    
  drawSprites();
}
