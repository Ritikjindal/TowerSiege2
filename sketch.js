const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var stand1, stand2, ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10, box11, box12, box13, box14, box15,box16,box17,box18,box19,box20,box21;
var box22,box23, box24, box25, box26,box27,box28,box29,box30;


function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
    createCanvas(900,400);
    engine= Engine.create();
    world=engine.world;

    ground=new Ground();
    stand1= new Stand(380,300,270,10);
    stand2=new  Stand(700,200,200,10);
    
    box1=new Box(280,275,30,40);
    box2=new Box(310,275,30,40);
    box3=new Box(340,275,30,40);
    box4=new Box(370,275,30,40);
    box5=new Box(400,275,30,40);
    box6=new Box(430,275,30,40);
    box7=new Box(460,275,30,40);
    box8=new Box(490,275,30,40);

    box9=new Box(310,235,30,40);
    box10=new Box(340,235,30,40);
    box11=new Box(370,235,30,40);
    box12=new Box(400,235,30,40);
    box13=new Box(430,235,30,40);
    box14=new Box(460,235,30,40);
    
    box15=new Box(340,195,30,40);
    box16=new Box(370,195,30,40);
    box17=new Box(400,195,30,40);
    box18=new Box(430,195,30,40);

    box19=new Box(370,155,30,40);
    box20=new Box(400,155,30,40);

    box21=new Box(385,115,30,40);

    box22=new Box(640,175,30,40);
    box23=new Box(670,175,30,40);
    box24=new Box(700,175,30,40);
    box25=new Box(730,175,30,40);
    box26=new Box(760,175,30,40);

    box27=new Box(670,135,30,40);
    box28=new Box(700,135,30,40);
    box29=new Box(730,135,30,40);

    box30=new Box(700,95,30,40);

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot= new SlingShot(this.polygon,{x:100,y:200});
    
    var render=Render.create({
        element: document.body,
        engine:engine,
        options:{
            width: 900,
            height:400,
            wireframes: false
        }
    });

    Engine.run(engine);

}
function draw(){

    background("white");
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();
    fill("lightgreen");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    
    fill("cyan");
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    fill("red");
    
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    fill("orange");
    box19.display();
    box20.display();
    fill("yellow");
    box21.display();

    fill("lightgreen");
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();

    fill("orange");
    box27.display();
    box28.display();
    box29.display();

    fill("yellow");
    box30.display();

    
    textSize(20);
    fill("red");
    text("drag the hexagonal stone and release it , to launch it towards the blocks",200,50);
    fill("yellow");
    textSize(20);
    text("press space to play again",650,250);

    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();


}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon);
    }
}