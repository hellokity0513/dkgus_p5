function setup() {
  createCanvas(600, 400); // 캔버스 크기 변경
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  background(250, 245, 255);

  let petals = [
    color(255, 182, 193, 180), // 연핑크
    color(173, 216, 230, 180), // 하늘
    color(255, 255, 153, 180), // 노랑
    color(144, 238, 144, 180), // 민트
    color(221, 160, 221, 180)  // 연보라
  ];

  for (let layer = 0; layer < 2; layer++) {
    let radius = 130 - layer * 30; 
    for (let a = 0; a < 360; a += 30) {
      push();
      translate(width/2, height/2 - 20); // 화면 중앙에 위치
      rotate(a + layer * 15);
      fill(random(petals));
      ellipse(0, -radius, 80, 140);
      pop();
    }
  }

  fill(255, 230, 180);
  ellipse(width/2, height/2 - 20, 100, 100);

  for (let i = 0; i < 20; i++) {
    let angle = random(360);
    let r = random(15, 50);
    let x = width/2 + cos(angle) * r;
    let y = height/2 - 20 + sin(angle) * r;
    fill(random(petals));
    noStroke();
    ellipse(x, y, random(5, 15));
  }

  noStroke();
  fill(144, 238, 144);
  rect(width/2 - 10, height/2 + 30, 20, 160);

  noStroke();
  for (let i = 0; i < 80; i++) {
    fill(255, 255, 255, 180);
    ellipse(random(width), random(height), random(3, 10));
  }

  noFill();
  stroke(80, 80, 120, 150);
  strokeWeight(8);
  rect(5, 5, width-10, height-10);
}
