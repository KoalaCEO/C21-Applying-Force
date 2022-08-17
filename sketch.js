const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var Upimg;
var Rightimg;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  
  var ballOptions = {
    restitution:0.75
  }

  ball = Bodies.circle(200,200,25,ballOptions);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  Rightimg = createImg("right.png");
  Rightimg.position(250,40);
  Rightimg.size(50,50);
  Rightimg.mouseClicked(rForce);

  Upimg = createImg("up.png");
  Upimg.position(50,40);
  Upimg.size(50,50);
  Upimg.mouseClicked(vForce);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
}

function rForce() {

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function vForce() {

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}