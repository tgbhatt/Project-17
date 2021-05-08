
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var ground, ground_moving
var survivalTime = 0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);
  monkey = createSprite(100,335,50,50);
  monkey.addAnimation("monkey_run",monkey_running);
  monkey.scale  = 0.125;
  
  ground = createSprite(300,385,1200,30);
  ground.velocityX = -2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background(100,200,170);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground);
  
  food();
  obstacles();
  drawSprites(); 
  
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: ",score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(500,250,20,20);
    banana.addImage("bananaImages",bananaImage);
    banana.scale = 0.1;
    banana.y = (random(250,200));
    banana.velocityX = -4;
    banana.lifetime = 150;
    bananaGroup.add(banana);
  }
  
}

function obstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(500,345,50,50);
    obstacle.addImage("obstacleImages",obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }
}






