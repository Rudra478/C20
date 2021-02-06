var a,b;


function setup() {
  createCanvas(800,400);
a = createSprite(400, 200, 50, 50);
b = createSprite(300, 200, 50, 50);
a.shapeColor = "green";
b.shapeColor = "green";
}

function draw() {
  background(255,255,255);
  b.x = mouseX;
  b.y = mouseY;
  console.log(a.x - b.x);

  if(a.x-b.x < 49 && b.x - a.x < 49 && a.y-b.y < 49 && b.y-a.y <49){
    a.shapeColor = "red";
    b.shapeColor = "red";

  }
  else {
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  drawSprites();
}