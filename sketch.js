const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2
function setup(){
    var canvas = createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,200,50,50);
    box2 = new Box(800,200,50,50); 
  
    pig1 = new Pig(700,200);
   //pig2 = new Box(500,100); 
  
   log1 = new Log(650,100,200,PI/2)
   
   angrybird = new Bird(200, 300)
 ground1 = new Ground(200,height,1500,20);
  
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    angrybird.display();
    ground1.display();
}