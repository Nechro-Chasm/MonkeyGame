
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var trials = 0;

function preload(){
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
 // Creating monkey Sprite
  monkey = createSprite(80,335,30,30);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = .15;
  
 //Creating Ground
  ground = createSprite(300,390,600,20);
  ground.shapeColor = "brown";
  
  //Creating Groups
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
  
}


function draw() {
background("lightBlue");
  
  if(obstaclesGroup.isTouching(monkey)){
    if(trials === 50){
      monkey.velocityY = 0
      
      obstaclesGroup.setVelocityXEach(0);
      bananaGroup.setVelocityXEach(0);
      obstaclesGroup.setLifetimeEach(-1);
      bananaGroup.setLifetimeEach(-1);
      stroke("black"); 
      textSize(20);
      fill("black");
      text("Game Over! ",290 ,200);
    }
    else
      {trials = trials + 1;               
      }
  }
  
  if(monkey.isTouching(bananaGroup)){
     score = score + 10;
    banana.destroy();      
  }
  
  if(keyDown("space")){ 
  }
  monkey.velocityY += 0.8
  monkey.collide(ground);
  
  spawnBanana();
  spawnObstacles();
  drawSprites()
  
  textSize(20)
  fill("white");
  text("Score: "+ score,290,50);
  text("Trials: "+ trials,290,70);
}

 function spawnBanana(){ 
if(frameCount % 100 === 0){
  banana = createSprite(600,Math.round(random(120,230)),30,10);
  banana.velocityX = -5;
  banana.lifetime = 125;
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  bananaGroup.add(banana);
  monkey.depth = banana.depth+1;
}
 }

function spawnObstacles(){ 
if(frameCount % 200 === 0){
  obstacles = createSprite(600,380,40,40);
 
  obstacles.velocityX = -8;
  obstacles.lifetime = 125;
  obstacles.addImage(obstacleImage);
  obstacles.scale = Math.random(0.3,0.8);
  obstaclesGroup.add(obstacles);
 
}
 }






