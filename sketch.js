
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(500, 400);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(width/2,300,25);
	bobObject2 = new Bob(width/2-25,300,25);
	bobObject3 = new Bob(width/2-50,300,25);
	bobObject4 = new Bob(width/2+25,300,25);
	bobObject5 = new Bob(width/2+50,300,25);

	roof = new Roof(width/2,50,360,20);

	rope1 = new Rope(bobObject1.body,roof.body,0,0);
	rope2 = new Rope(bobObject2.body,roof.body,-50,0);
	rope3 = new Rope(bobObject3.body,roof.body,-100,0);
	rope4 = new Rope(bobObject4.body,roof.body,50,0);
	rope5 = new Rope(bobObject5.body,roof.body,100,0);

	Engine.run(engine);
  
}

function draw() {
  background("lightgrey");
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject3.body, bobObject3.body.position, {x:20, y:30});
	 }
   }



