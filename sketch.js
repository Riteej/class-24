const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,pig1,log1;
var box1,box2,ground1;



function setup(){
     createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(800,300,50,50);
box2= new Box(1000,300,50,50)
ground1=new ground(600,390,1200,30);
pig1=new Pig(900,300); 
log1=new Log(900,250,280,PI/2);
  
box3= new Box(800,200,50,50);
box4= new Box(1000,200,50,50);
pig2=new Pig(900,200); 
log2=new Log(900,190,280,PI/2);
box5=new Box(900,180,50,50);
log3=new Log(850,150,120,PI/7)
log4=new Log(950,150,120,-PI/7)
bird=new Bird(120,150);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground1.display();
   box1.display();
box2.display();
pig1.display();
log1.display();

box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display();
}
