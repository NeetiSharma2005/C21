const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground=new Wall(200,390,400,20);
  right=new Wall(390,200,20,400);
  left=new Wall(10,200,20,400);
  top=new Wall(200,10,400,20);
ball = new ball(200,100);
  btn1 = createImg("right.png")
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(Hforce)
  btn2 = createImg("up.png")
  btn2.position(220,30)
  btn2.size(50,50)
  btn2.mouseClicked(Vforce)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
  right.display()
  left.display()
  top.display()
ball.display()


}
function Hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function Vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
