var Patricia ;
var Patriciaimg;
var fundo;
var fundoimg;
var chaoinvisivel;
var zumbi;
var zumbiimg;
var moon; 
var luaimg; 
var lapide; 
var lapideimg1;
var lapideimg2; 
var GrupoLapide;
var die; 
var gameState = "jogar"
var zumbiParado;
function preload(){
 die= loadImage("imagens/die.png"); 
  Patriciaimg = loadAnimation("imagens/run1.png","imagens/run2.png","imagens/run3.png","imagens/run4.png","imagens/run5.png",
  "imagens/run6.png","imagens/run7.png","imagens/run8.png","imagens/run9.png","imagens/run10.png")
  fundoimg = loadImage ("imagens/fundo.png");
  luaimg= loadImage ("imagens/lua.png"); 
  lapideimg1 = loadImage ("imagens/lapide.png");
  lapideimg2 = loadImage ("imagens/lapide2.png");
  zumbiimg = loadAnimation ("imagens/walk1.png","imagens/wlak2.png","imagens/walk3.png","imagens/walk4.png","imagens/walk5.png","imagens/walk6.png");
  zumbiParado = loadImage ("imagens/walk1.png");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
 

 GrupoLapide = new Group  ()

  fundo = createSprite (width/2,height/2-100)
 fundo.addImage (fundoimg)
 moon = createSprite (width-200,100)
 moon.addImage (luaimg)
 moon.scale = 0.8; 


zumbi = createSprite (100,500)
  zumbi.addAnimation ("correndo",zumbiimg)
zumbi.scale = 0.3;
 zumbi.debug = false 
 zumbi. setCollider ("rectangle",100,0,500,500)
 zumbi.addImage ("parado",zumbiParado);

 Patricia =createSprite(250,500)
  Patricia.addAnimation ("correndo",Patriciaimg)
  Patricia.scale = 0.3;
  chaoinvisivel = createSprite (width/2,height-20,width,20)
  chaoinvisivel.visible = false 
  Patricia.debug = false  
 Patricia. setCollider ("rectangle",0,0,300,500)
 Patricia.addImage("die",die)
}

function draw(){
  background('white');
  drawSprites ();
 if (gameState==="jogar"){
   fundo.velocityX = -5
    if (fundo.x < 0 ){
   fundo.x =fundo.width/2 
 }
  Patricia. velocityY += 1
 zumbi.velocityY += 1
Patricia.collide (chaoinvisivel)

 if (keyDown("space")){
   Patricia.velocityY = -15 

  }

 zumbi.velocityY +=1 
 zumbi.collide (chaoinvisivel) 
 
 gerarObstaculos ()
 if (Patricia. isTouching(GrupoLapide)) {
  gameState="perder"
   
 }
 if(zumbi.isTouching(GrupoLapide)&& !Patricia.isTouching(GrupoLapide)){
  zumbi.velocityY = -10 
}
 }
 else if (gameState==="perder"){
   fundo.velocityX = 0 
   GrupoLapide.setVelocityXEach (0)
    zumbi.velocityY = 0
   zumbi.x= Patricia.x - 50 
   Patricia.changeAnimation ("die")
   Patricia.y = 650;
   zumbi.changeAnimation ("parado") 

 }
  

 

 
 
}

function gerarObstaculos (){
  if (frameCount%60===0){
    lapide= createSprite (width+10,height-60)
    lapide.velocityX = -10 
   var numero = Math.round (random (1,2)) 
   if (numero===1){
      lapide.addImage (lapideimg1 )
      
    }
    else {
   lapide.addImage (lapideimg2)   
    }
    GrupoLapide.add(lapide)   
  }
 
}

