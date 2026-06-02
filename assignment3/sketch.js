let a = 0;
let l = 0;
let s = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {

  if (s) {
    background(255, 230, 235); 
  } else {
    background(224, 255, 255);
  }

  noStroke();

  fill(59, 34, 34);
  circle(300, 115, 185);
  rect(207, 120, 90, 190);
  rect(308, 120, 85, 190);

  fill(255, 235, 205);
  ellipse(300, 150, 143, 175);
  rect(280, 180, 40, 80);

  arc(243, 155, 60, 63, radians(65), radians(260));
  arc(358, 155, 60, 63, radians(280), radians(120));

  fill(59, 34, 34);
  arc(300, 120, 140, 150, radians(180), radians(360));

  fill(255, 235, 205);
  triangle(295, 80, 220, 150, 340, 200);

  a = map(mouseX, 0, width, -5, 5);
  l = map(mouseY, 0, height, -3, 3);

  fill(0);
  arc(260, 132, 40, 15, radians(150), radians(370));

  fill(255);
  ellipse(260, 140, 40, 25);

  fill(59, 34, 34);
  ellipse(263 + a, 143 + l, 20, 23);

  fill(255);
  ellipse(265 + a, 139 + l, 5, 5);

  fill(0);
  arc(337, 132, 40, 15, radians(150), radians(370));

  fill(255);
  ellipse(337, 140, 40, 25);

  fill(59, 34, 34);
  ellipse(333 + a, 143 + l, 20, 23);

  fill(255);
  ellipse(336 + a, 139 + l, 5, 5);

  if (s) {
    fill(240, 128, 128);
    arc(300, 205, 60, 45, radians(0), radians(180));
  } else {
    fill(240, 128, 128);
    arc(300, 200, 50, 30, radians(360), radians(180));
  }

  fill(80);
  square(185, 260, 230, 70);

  fill(135, 206, 250);
  ellipse(300, 350, 10, 10);
  ellipse(300, 370, 10, 10);

  if (s) {
    fill(255, 190, 190);
  } else {
    fill(255, 245, 250);
  }

  ellipse(245, 163, 30, 16);
  ellipse(355, 163, 30, 16);

  stroke(0);
  strokeWeight(3);
  line(300, 160, 290, 180);
  line(290, 180, 300, 185);
  line(240, 133, 236, 130);
  line(357, 133, 363, 130);

  noStroke();
  fill(255);
  circle(228, 182, 7);
  circle(372, 182, 7);

  fill(255, 77, 77);
  arc(300, 70, 130, 70, radians(180), radians(360));

  fill(59, 34, 34);
  arc(300, 80, 140, 75, radians(180), radians(360));

  fill(255, 235, 205);
  triangle(350, 260, 250, 260, 300, 300);

  noStroke();
  fill(135, 206, 250);
  triangle(270, 325, 250, 260, 300, 300);
  triangle(330, 325, 350, 260, 300, 300);
}

function keyPressed() {
  s = true;
}

function keyReleased() {
  s = false;
}

function keyTyped() {
  if (key === 'q') {
    saveGif('AA', 10);
  }
}