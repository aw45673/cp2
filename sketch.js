
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	paper=loadImage("paper.png")
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="brown"


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(100 , 600 , 5 , {restitution:0.5, isStatic:false, density:1.5,friction:1});
	World.add(world, paperBody);
	console.log(paperBody);

	baseBody = Bodies.rectangle(700,655,150,15,{isStatic:true})
	World.add(world,baseBody);
	leftBody = Bodies.rectangle(650,610,10,85,{isStatic:true})
	World.add(world,leftBody);
	rightBody = Bodies.rectangle(750,610,10,85,{isStatic:true})
	World.add(world,rightBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	console.log(baseBody);

	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(200);
  fill("grey");
  image(dustbin,baseBody.position.x,baseBody.position.y-70,120,150)
  fill("red")
  image(paper,paperBody.position.x,paperBody.position.y,50,50)
  drawSprites()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.applyForce(paperBody,paperBody.position,{x:5,y:-5})
    
  }
}



