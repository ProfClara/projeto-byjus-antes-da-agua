var cenario;
var posA = 1300;
var posB = 800;

function preload(){

 ceu1 = loadImage("images/ceu_ceu.png")
 ceu2 = loadImage("images/ceu.png")
 ceu3 = loadImage("images/sunny_sky.png")
 ceu4 = loadImage("images/ceu_rosa.png")
 ceu5 = loadImage("images/sunset.png")
 ceu6 = loadImage("images/por_do_sol.png")
 balao = loadImage("images/hot_air_baloon_true.png")
 aviao = loadImage("images/airplane.png")
}
function Controls(){
   
  if (keyIsDown (LEFT_ARROW)){
  
    player.velocityX = -1
   }
   if (keyIsDown (RIGHT_ARROW)){
  
    player.velocityX = 1
   }
   if (keyIsDown (UP_ARROW)){
  
    player.velocityY = -1
   }
   if (keyIsDown (DOWN_ARROW)){
  
    player.velocityY = 1
   }
  
  


 }
function setup(){
createCanvas(windowWidth,windowHeight);


player = createSprite(5,60,0.4,0.5);
player.addImage('player',balao);
player.scale =0.1;

} 


function zoomIn(){
  if(player.scale < 1){
    player.scale = player.scale + 0.02;
    posA += 7;
    posB += 7;
     }
     else{
      player.velocityX =0;
      player.velocityY =0;

      text("Enfim chegou a grande enchente... [...]", 600,150);
      
     }
   console.log(player.scale);
   
}

function draw(){
background('white');
push ()
imageMode (CENTER);
cenario = image (ceu3,0,0,posA,posB);
pop ()

//camera.x = player.x;
//camera.y = player.y;

if(player.x>=100){
    zoomIn();
}
Controls();

drawSprites();
}
