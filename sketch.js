var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/sky background.jpg")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
birdImg = loadImage("assets/bird.png")
starImg = loadImage("assets/star.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
//background image
/*bg = createSprite(width/2,height/2,1,1);
bg.addImage(bgImg);
bg.scale = 2*/



//creating top and bottom grounds
bottomGround = createSprite(width/2,height-100,width,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(500,20,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 2;



}

function draw() {

  background("blue");
  imageMode(CENTER)
  image(bgImg,width/2, height/2,width,height)
       balloon.collide(bottomGround)
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -10;
            
          }

          //adding gravity
          drawSprites();
           balloon.velocityY = balloon.velocityY + 2;
  /* if (balloon.isTouching(bottomGround)) {
     text("GAME OVER:(",150,100)
   }*/
   spawnBirds()
   spawnStars()
        
        
}

function spawnStars () {
  if (frameCount % 150 == 0) {
    var star = createSprite (width,190,40,10);
    star.y = Math.round(random(100,500))
    star.addImage(starImg)
    star.velocityX = -15
    star.lifetime = width/15
  }
}

function spawnBirds () {
  if (frameCount % 250 == 0) {
  var bird = createSprite(width,120,40,10);
    bird.y = Math.round(random(100,500));
    bird.addImage(birdImg);
    bird.velocityX = -10;
    bird.scale = 1
  bird.lifetime = width/15
}

}