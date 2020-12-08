
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground,dustbin,paper;
var wall;




function setup() {
	 createCanvas(1500, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(750,490,1500,20);
	dustbin= new Dustbin(1354,400);
	paper = new Paper(200,200,30);
	//wall = createSprite(1100,430,20,300);
	//dustbin2= new Dustbin(1100,430,20,100);
//	dustbin3= new Dustbin(1300,430,20,100);

}
function draw() {
 	background("red");
Engine.update(engine);
		ground.display(); 
	  paper.display();
	  dustbin.display();
	
//drawSprites();
	
 }

function keyPressed(){
	 if(keyCode===UP_ARROW&&paper.x<1300){
		 
		Matter.Body.applyForce(paper.body, paper.body.position,{x:235,y:-200})
		
	 }
	 
 }



