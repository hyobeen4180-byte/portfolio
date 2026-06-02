function setup() {
  createCanvas(600, 400);
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
  
  stroke(135);
  strokeWeight(5);
  line(50, 300, 10, 300);
  line(150, 300, 113, 300);
  line(250, 300, 210, 300);
  line(350, 300, 310, 300);
  line(450, 300, 410, 300);
  line(550, 300, 510, 300);
  
  stroke(200);
  strokeWeight(5);
  line(100, 300, 60, 300);
  line(200, 300, 160, 300);
  line(300, 300, 260, 300);
  line(400, 300, 360, 300);
  line(500, 300, 460, 300);
  line(593, 300, 560, 300);

  noStroke();  
  fill(255, 0, 0);
  ellipse(200, 240, 100, 100);
  ellipse(400, 240, 100, 100);

  noStroke();
  fill(34, 139, 34);
  arc(170, 123, 70, 50, radians(198), radians(20));
  arc(230, 123, 70, 50, radians(160), radians(343));
  arc(370, 123, 70, 50, radians(198), radians(20));
  arc(430, 123, 70, 50, radians(160), radians(343));
  
  fill(255);
  arc(400, 220, 70, 50, radians(260), radians(90));
  arc(200, 220, 70, 50, radians(260), radians(90));
  
  fill(255, 0, 0);
  ellipse(398, 233, 80, 70); 
  ellipse(198, 233, 80, 70); 
  
  stroke(255);
  strokeWeight(3);
  fill(176, 226, 255);
  rect(110, 150, 20, 30);
  rect(145, 150, 25, 30);
  rect(294, 150, 40, 30);
  
  fill(135, 206, 235);
  rect(227, 150, 56, 30);
  rect(347, 150, 20, 30);
  rect(430, 150, 55, 30);
  
  noStroke();
  fill(135, 206, 250);
  circle(53, 30, 30);
  circle(75, 30, 30);
  circle(40, 44, 33);
  circle(63, 50, 33);
  circle(87, 44, 33);
  
  fill(255);
  ellipse(200, 240, 40, 40);
  ellipse(400, 240, 40, 40);
  
  
}