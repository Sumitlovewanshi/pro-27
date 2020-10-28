
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//var bobDiameter = 80,rope1;



function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobDiameter = 40;
	bob1 = new Bob(240,550, 40);
	bob2 = new Bob(280,550, 40);
	bob3 = new Bob(320,550, 40);
	bob4 = new Bob(360,550, 40);
	bob5 = new Bob(400,550, 40);
	

	roof1 = new Roof(400,100,500, 30);
	rope1=new Rope(bob1.body,roof1.body,-bobDiameter*2, 0)
	rope2=new Rope(bob2.body,roof1.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,roof1.body,0, 0)
	rope4=new Rope(bob4.body,roof1.body,bobDiameter*1, 0)
	rope5=new Rope(bob5.body,roof1.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
 bob1.display(); 
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof1.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
  drawSprites();
 
}
function keyPressed() {

	if (keyCode === UP_ARROW) {
	console.log("keypressedisworking")
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	
	}
	
}