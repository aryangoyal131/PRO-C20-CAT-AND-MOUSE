var backgroundImage;
var cat;
var mouse;
var catImage1,catImage2,mouseImage1,mouseImage2;
var catImage4,mouseImage4;

function preload() {
    backgroundImage = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImage4 = loadAnimation("images/cat4.png");
    mouseImage4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    

    mouse = createSprite(200,550);
    
    mouse.addAnimation("mouseImage", mouseImage1);
    //mouse.addAnimation("mouseteasing",mouseImage2);

    cat = createSprite(600,550);
    cat.addAnimation("catImage1",catImage1);
    
    cat.scale = 0.2;
    
    cat.debug = true
    mouse.debug = true

    mouse.scale = 0.2;
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width -  mouse.width)/2){
      mouse.addAnimation("mouseImage4",mouseImage4);
      cat.addAnimation("catImage4",catImage4);

        mouse.changeAnimation("mouseImage4",mouseImage4);
        cat.changeAnimation("catImage4",catImage4);
        console.log("collider");

        cat.velocityX = 0;
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
    console.log("Moving left");

    cat.addAnimation("cat2",catImage2);
    cat.changeAnimation("cat2",catImage2);


    mouse.addAnimation("mouseteasing",mouseImage2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseteasing",mouseImage2);
    cat.velocityX = -5;
    
  }

}
