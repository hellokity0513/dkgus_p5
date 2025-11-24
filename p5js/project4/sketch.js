let t = 0;
let basePetalColors = [];
let sparkles = [];
let centerDots = [];

let scaleFactor = 0.5;

function setup() {
  createCanvas(300, 200);
  angleMode(DEGREES);

  basePetalColors = [
    color(255, 182, 193, 180),
    color(173, 216, 230, 180),
    color(255, 255, 153, 180),
    color(144, 238, 144, 180),
    color(221, 160, 221, 180)
  ];

  for (let i = 0; i < 60; i++) {
    sparkles.push({
      x: random(width),
      y: random(height),
      size: random(2, 6),
      alpha: random(120, 200)
    });
  }

  for (let i = 0; i < 20; i++) {
    centerDots.push({
      x: random(-20, 20),
      y: random(-20, 20),
      dx: random(-0.2, 0.2),
      dy: random(-0.2, 0.2),
      s: random(3, 7),
      col: basePetalColors[int(random(basePetalColors.length))]
    });
  }

  saveGif("flower_animation_small.gif", 10);
}

function draw() {
  background(250, 245, 255);
  t++;

  push();
  scale(scaleFactor);

  let cx = 600 / 2;
  let cy = 400 / 2 - 20;

  let rotOffset = sin(t * 2) * 8;
  let scaleSize = 1 + sin(t * 1.5) * 0.07;

  for (let layer = 0; layer < 2; layer++) {
    let rad = 130 - layer * 30;

    for (let i = 0; i < 12; i++) {
      let angle = i * 30;

      push();
      translate(cx, cy);
      rotate(angle + layer * 15 + rotOffset);
      scale(scaleSize);

      colorMode(HSB);
      let b = basePetalColors[i % basePetalColors.length];
      let newHue = (hue(b) + t * 3) % 360;
      let c = color(newHue, 40, 95, 0.45);
      colorMode(RGB);

      fill(c);
      stroke(0, 130);
      strokeWeight(1.7);
      ellipse(0, -rad, 80, 140);

      pop();
    }
  }

  stroke(0, 120);
  strokeWeight(2);
  fill(255, 230, 180);
  ellipse(cx, cy, 100, 100);

  noStroke();
  for (let d of centerDots) {
    d.x += d.dx;
    d.y += d.dy;

    if (abs(d.x) > 45) d.dx *= -1;
    if (abs(d.y) > 45) d.dy *= -1;

    fill(d.col);
    ellipse(cx + d.x, cy + d.y, d.s);
  }

  noStroke();
  fill(144, 238, 144);
  rect(cx - 10, cy + 50, 20, 160);

  for (let s of sparkles) {
    s.alpha = 110 + sin(t * 0.8 + s.x) * 80;
    fill(255, 255, 255, s.alpha);
    ellipse(s.x, s.y, s.size);
  }

  noFill();
  stroke(80, 80, 120, 180);
  strokeWeight(8);
  rect(5, 5, 600 - 10, 400 - 10);

  pop();
}
