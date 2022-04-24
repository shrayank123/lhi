const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


function preload(){
 
}

function setup() {
  var canvas = createCanvas(1000,800);
  engine  = Engine.create();
  world = engine.world;
 
  ground1=new Ground(100,770,300,30)
  box1 = new Box(280,750,70,70)
  box2 = new Box(350,750,70,70)
  box3 = new Box(420,750,70,70)
  box4 = new Box(350,680,70,70)
  box5 = new Box(420,680,70,70)
  box6 = new Box(420,610,70,70)
  box7 = new Box(670,610,70,70)
  box8 = new Box(970,610,70,70)

  ball1=new Ball(120,300,30,50)

  



  




   
  
   

}

function draw() {
 // background(backgroundImg);  
 background("Blue")
  Engine.update(engine);
  ground1.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  ball1.display()
  
 
 

  
}


function keyPressed()
{

  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:-100})
  }

  if(keyCode === RIGHT_ARROW)
  {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:90,y:0})
  }


  if(keyCode === LEFT_ARROW)
  {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-90,y:0})
  }

}


//function keyPressed()
//{

  //if(keyCode === UP_ARROW)
  //{
    //Matter.Body.applyForce(paper1.body,paper1.body.position,{x:90,y:-100})
  //}

//}


