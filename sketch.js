
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof= new Roof(400, 100, 600, 20)
	bob1 = new Bob(200, 600, 30)
	bob2 = new Bob(250, 600, 30)
	bob3 = new Bob(300, 600, 30)
	bob4 = new Bob(350, 600, 30)
	bob5 = new Bob(400, 600, 30)
	rope1 = new Rope(bob1.body,{x:200, y:100})
	rope2 = new Rope(bob2.body,{x:270, y:100})
    rope3 = new Rope(bob3.body,{x:340, y:100})
	rope4 = new Rope(bob4.body,{x:400, y:100})
	rope5 = new Rope(bob5.body,{x:470, y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  bob1.display()  
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display()
  rope2.display() 
  rope3.display() 
  rope4.display() 
  rope5.display() 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Body.applyForce(bob1.body, bob1.body.position,{x:-100, y:-100})
	}
}


