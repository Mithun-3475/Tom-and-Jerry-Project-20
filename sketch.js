var mouse,mouseImg,mousewait,mousehappy;
var cat1,catImg,catrun,cathappy;
var bg,bgImg;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    mouseImg = loadImage("images/mouse1.png");
    mousewait = loadAnimation("images/mouse2.png","images/mouse3.png");
    mousehappy = loadAnimation("images/mouse4.png");
    catImg = loadImage("images/cat1.png");
    catrun = loadAnimation("images/cat2.png","images/cat3.png");
    cathappy = loadAnimation("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,400,10,10);
    bg.addImage("background",bgImg);

    mouse = createSprite(150,600,10,10);
    mouse.addImage("mouse",mouseImg);
    mouse.scale = 0.12;

    cat = createSprite(750,600,10,10);
    cat.addImage("cat",catImg);
    cat.scale = 0.12;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.x = cat.x + 100;
        cat.velocityX = 0;
        cat.addAnimation("cathappy",cathappy);
        cat.changeAnimation("cathappy");
        mouse.addAnimation("mousehappy",mousehappy);
        mouse.changeAnimation("mousehappy"); 
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catrunning",catrun);
      cat.changeAnimation("catrunning");
      mouse.addAnimation("mousewaiting",mousewait);
      mouse.changeAnimation("mousewaiting");
  }


}
