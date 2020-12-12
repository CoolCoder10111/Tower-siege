const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground1,ground2,ground3;


function preload(){
    polygonimg = loadImage("polygon.png");
}

function setup() {
    createCanvas(1000, 700);

	engine = Engine.create();
    world = engine.world;

    box1 = new Box(450,490,30,40);
    box2 = new Box(480,490,30,40);
    box3 = new Box(510,490,30,40);
    box4 = new Box(540,490,30,40);

    box5 = new Box(465,410,30,40);
    box6 = new Box(495,410,30,40);
    box7 = new Box(525,410,30,40);

    box8 = new Box(495,380,30,40);

    box9 = new Box(785,390,30,40);
    box10 = new Box(815,390,30,40);
    box11 = new Box(800,300,30,40);

    ground1 = new Ground(500,690,1000,20);

    ground2 = new Ground(500,500,200,20);
    ground3 = new Ground(800,400,100,20);

    polygon = Bodies.circle(50,400,20);
    World.add(world,polygon);

    Slingshot = new SlingShot(this.polygon,{x:100,y:400});
}

function draw() {
    background(255);
    Engine.update(engine);
    rectMode(CENTER);

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

    ground1.display();
    ground2.display();
    ground3.display();

    imageMode(CENTER);
    image(polygonimg ,polygon.position.x ,polygon.position.y ,40 ,40);
    Slingshot.display();

    drawSprites()
}

function keyPressed(){
    if(keyCode===32){
        Slingshot.attach(polygon.body);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}

