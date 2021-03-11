var bullet,wall,speed,weight,thickness,deformation;

function setup() {
  createCanvas(1200,400);
  bullet = createSprite(100, 200, 80, 15);
  bullet.shapeColour=(255)
  wall = createSprite(1200,200,thickness,200);
  weight = random(400,1500);
  speed = random(55,90);
  
  bullet.velocityX = speed
}
thickness = random(22,83)

function draw() {
  background(0);  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0;
    deformation = 0.5*weight*speed*speed/22500
    if(deformation>120){
      wall.shapeColor=("red")
    }
    else if(deformation<120){
      wall.shapeColor=("green")
    }
  }
  drawSprites();
}