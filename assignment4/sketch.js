function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255, 248, 220);

  noStroke();
  fill(0, 0, 139);
  square(95, 120, 150, 20);
  square(200, 120, 150, 20);
  square(300, 120, 150, 20);
  square(350, 120, 150, 20);
  triangle(320, 80, 150, 240, 300, 240);

  stroke(139, 69, 19);
  strokeWeight(5);
  line(200, 118, 225, 200);
  line(200, 118, 175, 200);
  line(400, 118, 375, 200);
  line(400, 118, 425, 200);

  let wheelSize = 100 + sin(frameCount * 0.06) * 12;

  noStroke();
  fill(255, 0, 0);
  ellipse(200, 240, wheelSize, wheelSize);
  ellipse(400, 240, wheelSize, wheelSize);

  fill(255);
  ellipse(200, 240, wheelSize * 0.5, wheelSize * 0.5);
  ellipse(400, 240, wheelSize * 0.5, wheelSize * 0.5);

  fill(34, 139, 34);
  arc(170, 123, 70, 50, radians(198), radians(20));
  arc(230, 123, 70, 50, radians(160), radians(343));
  arc(370, 123, 70, 50, radians(198), radians(20));
  arc(430, 123, 70, 50, radians(160), radians(343));

  let winColor = color(230 + sin(frameCount * 0.05) * 135, 206, 250);

  stroke(255);
  strokeWeight(3);
  fill(winColor);
  rect(110, 150, 20, 30);
  rect(145, 150, 25, 30);
  rect(294, 150, 40, 30);
  rect(227, 150, 56, 30);
  rect(347, 150, 20, 30);
  rect(430, 150, 55, 30);
  
  let cloudX = width - (frameCount * 2.5) % (width + 100);

  let a1 = color(0, 80, 200);
  let a2 = color(180, 220, 255);
  
  let b = map(cloudX, 0, width, 0, 1);
  let a = lerpColor(a1, a2, b);

  noStroke();
  fill(a);
  circle(cloudX - 50, 30, 30);
  circle(cloudX - 28, 30, 30);
  circle(cloudX - 63, 44, 33);
  circle(cloudX - 40, 50, 33);
  circle(cloudX - 16, 44, 33);

  strokeWeight(5);
  for (let i = -100; i < width + 100; i += 100) {

  stroke(135);
  line(i - (frameCount * 4 % 100),300, i + 40 - (frameCount * 4 % 100),300);
    
  stroke(220);
  line(i + 50 - (frameCount * 4 % 100),300,i + 90 - (frameCount * 4 % 100),300);
}
}
function keyTyped() {
  if (key === 'q') {
    saveGif('AA', 10);
  }
}