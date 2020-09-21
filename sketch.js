var car1, wall1;
var speed, height;


function setup() {
  createCanvas(1600,400);
 
  speed = random (55, 90);
  weight = random (400, 1500);

  car1 = createSprite (50, 200, 50, 50);
  car1.velocityX = speed;
  wall1 = createSprite (1500, 200, 60, height/2);
  wall1.shapeColor = color (80, 80, 80);

  

}

function draw() {
  background("black");  

  if(wall1.x - car1.x < (car1.width+wall1.width)/2) {

    car1.velocityX = 0;
    var deformation  = 0.5 * width * speed * speed / 22509;
    if (deformation > 180) {
      car1.shapeColor = color (255, 0, 0);
    }
    if(deformation < 180 && deformation > 100){
      car1.shapeColor = color(230, 230, 0);
    }
    if(deformation<100){
      car1.shapeColor = color (0, 250, 0);
    }
  }

  
  drawSprites();
}