var mar, barco;
var imgMar, barcoImg;

function preload(){
barcoImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
imgMar=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  mar=createSprite(400,200);
  barco=createSprite(130,200,30,30);
  mar.addImage(imgMar);
  barco.addAnimation("b",barcoImg);
  barco.scale=0.25;
  mar.scale=0.3;
  mar.velocityX=-5;
}

function draw() {
  background("blue");
 drawSprites();
}