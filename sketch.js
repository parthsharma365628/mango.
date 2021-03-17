
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1000,100,30);
	mango2=new mango(1200,150,30);
	mango3=new mango(900,200,30);
	mango4=new mango(1000,250,30);
	mango5=new mango(1100,180,30);
	mango6=new mango(1100,90,30);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone1=new stone(200,200,10)

	sling1=new slingShot(stone1.body,{x:240,y:420})

	Engine.run(engine);

}

function draw() {

  background("lightblue");
  //Add code for displaying text here!
  fill("red")
  
  text("perss SPACE to retry",270,150)
  text("DRAG THE STONE AND PLUCK THE MANGOS!!",200,200)
  image(boy ,200,340,200,300);
  

  groundObject.display();
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone1.display()
  sling1.display()


  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango5)
  detectCollision(stone1,mango6)

}






function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})   		
}

function mouseReleased(){
 sling1.fly()
}

function detectCollision(lstone,lmango){
	mbp=lmango.body.position
	sbp=lstone.body.position
	var distance= dist(sbp.x,sbp.y,mbp.x,mbp.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);}
	}

	function keyPressed(){
		if (keyCode===32){
			Matter.Body.setPosition(stone1.body,{x:240,y:420})
			sling1.attach(stone1.body) 
		}
	}
