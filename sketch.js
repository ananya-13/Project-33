const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg,snow1,snowImg,character,characterImg;
var engine, world;
function preload() {
  bg=loadImage("snow2.jpg")
  snowImg=loadImage("Snowman.png")
  characterImg=loadImage("Character2.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    if(frameCount%90===0){
      snow1=new Snow(random(width/2-10,width/2+10),10,10)
    }
    charecter=createSprite(540,350,10,10)
    charecter.addImage(characterImg)
    charecter.scale=0.3
    Snowman=createSprite(260,300,10,10)
    Snowman.addImage(snowImg)
}

function draw() {
  background(bg);  
  Engine.update(engine)
  snow1.display();
  drawSprites();
}