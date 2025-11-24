let crying = false;
let blinking = false;
let tearY = 210;
let puddle = 0;
let t = 0;
let autoPlay = false;
let bg;
let eyeOpen = 1.0;

function setup() {
  createCanvas(600, 400);
  bg = color(255, 255, 200);
}

function draw() {
  if (autoPlay) {
    t++;

    if (t < 150) {
      crying = false;
      bg = color(255, 255, 180);
      if (t % 45 == 0) blinking = true;
      if (t % 55 == 0) blinking = false;
      eyeOpen = 1.0;
    }

    else if (t < 210) {
      crying = false;
      blinking = true;
      eyeOpen = 0.0;
      bg = color(210, 210, 210);
    }

    else if (t < 270) {
      crying = true;
      blinking = false;
      let p = map(t, 210, 270, 0, 1);
      eyeOpen = p;
      bg = lerpColor(color(210, 210, 210), color(180, 220, 255), p);
    }

    else if (t < 510) {
      crying = true;
      blinking = false;
      eyeOpen = 1.0;
      bg = color(180, 220, 255);
    }

    else if (t < 600) {
      let p = map(t, 510, 600, 0, 1);
      crying = false;
      blinking = false;
      eyeOpen = 1.0;
      bg = lerpColor(color(180, 220, 255), color(255, 255, 200), p);
    }
  }

  background(bg);

  if (crying && !blinking && eyeOpen > 0.7) {
    tearY += 2.5;
    if (tearY > 260) {
      tearY = 210;
      puddle += 2;
      if (puddle > 40) puddle = 40;
    }
  } else {
    tearY = 210;
    puddle = 0;
  }

  drawFace();
  drawPuddle();
}

function drawFace() {
  noStroke();
  if (!crying) {
    fill(0);
    ellipse(300, 200, 240, 280);
  }

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

  if (!crying) {
    fill(0);
    noStroke();
    arc(300, 150, 180, 120, PI, TWO_PI, CHORD);
  }

  if (blinking) {
    stroke(0);
    strokeWeight(3);
    line(235, 185, 285, 185);
    line(315, 185, 365, 185);
  } else {
    stroke(0);
    strokeWeight(2);
    fill(255);
    ellipse(260, 185, 48, 55 * eyeOpen);
    ellipse(340, 185, 48, 55 * eyeOpen);

    fill(0);
    noStroke();
    ellipse(260, 185, 22, 28 * eyeOpen);
    ellipse(340, 185, 22, 28 * eyeOpen);

    fill(255);
    ellipse(253, 175 - 10 * (1 - eyeOpen), 7, 7 * eyeOpen);
    ellipse(333, 175 - 10 * (1 - eyeOpen), 7, 7 * eyeOpen);
  }

  stroke(0);
  strokeWeight(2);
  line(300, 192, 300, 202);

  noFill();
  stroke(150, 0, 50);
  strokeWeight(2.4);
  if (crying) arc(300, 240, 50, 20, PI, TWO_PI);
  else arc(300, 220, 50, 20, 0, PI);

  if (crying && !blinking && eyeOpen > 0.7) {
    noStroke();
    fill(100, 150, 255, 200);
    ellipse(260, tearY, 8, 14);
    ellipse(340, tearY, 8, 14);
  }
}

function drawPuddle() {
  if (crying) {
    noStroke();
    fill(100, 150, 255, 150);
    ellipse(300, 280, 60 + puddle, 15 + puddle / 3);
  }
}

function mousePressed() { blinking = true; }
function mouseReleased() { blinking = false; }
function keyPressed() {
  if (key == ' ') crying = !crying;

  if (key == 's' || key == 'S') {
    autoPlay = true;
    t = 0;
    saveGif('myCaricature', 10);
    setTimeout(() => { autoPlay = false; }, 10000);
  }
}
