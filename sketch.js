const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;
var backgroundImg,platform;
var bird, SlingShot1;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    floar1=new Ground(400,250,200,20);
    floar2=new Ground(800,200,200,20); 
    block1=new Box(330,235,30,40);
    block2=new Box(360,235,30,40);
    block3=new Box(390,235,30,40);
    block4=new Box(420,235,30,40);
    block5=new Box(450,235,30,40);
    block6=new Box(360,195,30,40);
    block7=new Box(390,195,30,40);
    block8=new Box(420,195,30,40);         
    block9=new Box(390,155,30,40);  



    bird = new Bird(200,100);

    //log6 = new Log(230,180,80, PI/2);
     SlingShot1= new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
  block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();



    bird.display();
    SlingShot1.display();    
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    SlingShot1.fly();
}