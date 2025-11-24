function setup() {
  createCanvas(600, 400);
  background(240);

  noStroke();
  fill(0);
  ellipse(300, 200, 240, 280);

  fill(255, 245, 230);
  stroke(0);
  strokeWeight(2);
  ellipse(300, 180, 150, 170);

  noStroke();
  fill(255, 245, 230);
  ellipse(225, 185, 26, 36);
  ellipse(375, 185, 26, 36);

  fill(255, 200, 0);
  ellipse(225, 200, 10, 10);
  ellipse(375, 200, 10, 10);

  fill(0);
  noStroke();
  arc(300, 150, 180, 120, PI, TWO_PI, CHORD); 

  stroke(0);
  strokeWeight(2);
  fill(255);
  ellipse(260, 185, 48, 55);
  ellipse(340, 185, 48, 55); 

  fill(0);
  noStroke();
  ellipse(260, 185, 22, 28);
  ellipse(340, 185, 22, 28);

  fill(255);
  ellipse(253, 175, 7, 7);
  ellipse(333, 175, 7, 7);

  noFill();
  stroke(0);
  strokeWeight(2.5);
  arc(260, 160, 50, 30, PI, TWO_PI); 
  arc(340, 160, 50, 30, PI, TWO_PI); 

  stroke(0);
  strokeWeight(2);
  line(300, 192, 300, 202);

  noFill();
  stroke(150, 0, 50);
  strokeWeight(2.4);
  arc(300, 220, 40, 12, 0.05, PI - 0.05);
}
