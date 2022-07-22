var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);
pista = createSprite(200, 200);
pista.addImage(pathImg);
pista.velocityY = 4
pista.scale = 1.2
// Movendo o fundo 




//Criando menino que corre 
boy = createSprite(180, 340, 30, 30)
boy.scale = 0.08
boy. addAnimation("corree", boyImg)
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(410, 0, 100, 800);
rightBoundary.visible = false;
}


function draw() {
background(0);
pista.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);
boy.x =World.mouseX;


 //Reiniciar o fundo
 if(pista.y > 400){
    pista.y = height / 2
 }



 drawSprites();

 }




