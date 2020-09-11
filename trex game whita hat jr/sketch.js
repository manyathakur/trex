var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudgroup,cloudimg
var obstaclegroup,a,b,c,d,e,f

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudimg = loadImage("cloud.png");
  groundImage = loadImage("ground2.png")
  a = loadImage("obstacle1.png");
  b = loadImage("obstacle2.png");
  c = loadImage("obstacle3.png");
  d = loadImage("obstacle4.png");
  e = loadImage("obstacle5.png");
  f = loadImage("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);
  cloudgroup=new Group();
  obstaclegroup=new Group();
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(250);    
  spawnClouds();
  spawnObstacles();
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  text (mouseX+","+mouseY,mouseX,mouseY)
  drawSprites();
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(550,165,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round( random(1,6));
     switch(rand){
          case 1 :obstacle.addImage ("a",a)
         break;
          case 2 :obstacle.addImage ("b",b)
         break;
          case 3 :obstacle.addImage ("c",c)
         break;
          case 4 :obstacle.addImage ("d",d)
         break;
          case 5 :obstacle.addImage ("e",e)
         break;
          case 6 :obstacle.addImage ("f",f)
         break;
     }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 200;
    obstaclegroup.add( obstacle)
  }
}
function spawnClouds() {
  //write code  here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(550,50,40,10);
    cloud.y = random(50,80);
    cloud.addAnimation("cloud",cloudimg);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}