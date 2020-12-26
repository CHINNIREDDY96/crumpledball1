
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var box1, box2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

  	engine = Engine.create();
   world = engine.world;
    box1 = new dustbin(490,325,20,120);
   box2 = new dustbin(600,370,200,30);
   box3 = new dustbin(708,325,20,120);
   ground1 = new ground(400,390,800,20);
   paper1 = new paper(140,385,10,30);

	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  paper1.display();
  box1.display();
 box2.display();
 box3.display();
}


function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x : 20, y: -20})
	}
}