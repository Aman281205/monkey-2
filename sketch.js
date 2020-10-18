
var player,ground,bananaGroup,stoneGroup,backImage,backGr,score

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png")
}




function setup() {
  createCanvas(800, 400);
  backGr = createSprite(0,0,800,400);
  backGr.addImage(backImage);
  backGr.scale = 1.5;
  backGr.x = backGr.width/2;
  backGr.velocityX = -4;
  
   player = createSprite(100,340,20,50);
player.addAnimation("running",player_running);
player.scale=0.1;

  ground = createSprite(400,350,800,10);
ground.velocityX = -4;
ground.x=ground.width/2;
  ground.visible = false;
  
  stoneGroup = new Group();
  bananaGroup = new Group();
  score = 0;
  
  
}

function draw() {
  background(220);
   
    if (ground.x<0) {
    ground.x=ground.width/2;
  }
   if (backGr.x<0) {
    backGr.x=backGr.width/2;
  }

    
      
       if(keyDown("space")){          
      player.velocityY = -15 ;
   
    }
    
     player.velocityY = player.velocityY + 0.8;
    
   player.collide(ground);
  
    
  
 
  
   if (stoneGroup.isTouching(player)) {
 
 }
spawnStone();
spawnBanana();

    
  
  if (bananaGroup.isTouching(player)) {
    bananaGroup.destroyEach();
   score =  score + 1;
  }
  
  
 
drawSprites();
    
   textSize(20);
fill("black");
text("Score:"+ score, 20,30);
    
}

function spawnStone(){

if(frameCount % 250 === 0) {
    var stone = createSprite(800,350,10,40);
    stone.velocityX =  -6;
stone.addImage(obstacle_img);
stone.scale=0.15;
stone.lifetime=134;
stoneGroup.add(stone);

}

  
}

function spawnBanana(){
  
  
  
  if(frameCount % 80 === 0) {
    var banana = createSprite(800,250,40,10);
    banana.velocityX =  -7;
banana.addImage(bananaImage);
banana.scale=0.05;
banana.lifetime=115;
bananaGroup.add(banana);

}
  
}