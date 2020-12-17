
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground,stand1;
var box1,box2,box3,bpx4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var striker,slingshot;

function setup() {
	var canvas = createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(1000,690,2000,20);
	stand1=new Ground(410,500,400,15);
	//stand2=new Ground(1200,300,500,15);
	box1=new Box(300,471,30,40);
	box2=new Box(333,471,30,40);
	box3=new Box(366,471,30,40);
	box4=new Box(399,471,30,40);
	box5=new Box(432,471,30,40);
	box6=new Box(465,471,30,40);
	box7=new Box(498,471,30,40);
	box8=new Box(333,430,30,40);
	box9=new Box(366,430,30,40);
	box10=new Box(399,430,30,40);
	box11=new Box(432,430,30,40);
	box12=new Box(465,430,30,40);
	box13=new Box(366,400,30,40);
	box14=new Box(399,400,30,40);
	box15=new Box(432,400,30,40);
	box16=new Box(399,370,30,40);
	striker= createSprite(100,450,50,50);
	World.add(world,striker)
	slingshot=new Chain(this.striker,{x:100,y:450})

	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);
  ground.display();
  stand1.display();
  //stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  striker.display();

  drawSprites();
 
}

/*function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85})
	}
}*/

function mouseDragged(){
	Matter.Body.setPosition(striker.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
		slingshot.fly()
	}
