const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var polygon;
var chain;

function setup(){
  createCanvas(1600,400);
  engine= Engine.create()
  world=engine.world;
  ground = new Ground(width/2,height-20,width,20);
  stand = new Ground(390,height-100,600,20);

  box1 = new Box (330,235,30,40);
  box2 = new Box (360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box (420,235,30,40);
  box5 = new Box (450,235,30,40);

  box6 = new Box (360,195,30,40);
  box7 = new Box (390,195,30,40);
  box8 = new Box (420,195,30,40);
  
  box9 = new Box(390,155,30,40);
  polygon = new Polygon(1000,100,50,50)
  chain = new SlingShot(polygon.body,{x:950,y:70})
}
function draw() {
  //camera.zoom=camera.zoom+1
  background(255);  
  Engine.update(engine)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground.display();
  stand.display();
  polygon.display();
  chain.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.fly()
}