class Attractor {
  constructor(x, y) {
    this.position = createVector(x, y);
    //{!1} How strong is the repeller?
    this.power = 150;
  }
  
  move(value) {
    this.position.y -= value;
  }
  
  setPower(value) {
    this.power = map(value, 0, width, -300, 300);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(255, 0, 0);
  // 화면 가운데 위치 계산
    let centerX = width / 2;

  // 양 옆으로 왔다갔다 움직이는 효과를 주기 위해 sin 함수 사용
    let offset = 20 * sin(frameCount * 0.1);
  
  // 화면 가운데 위치에 움직임을 더하여 원을 그림
    circle(centerX + offset, this.position.y, 32);
  }

  pull(particle) {
    //{!6 .code-wide} This is the same repel algorithm we used in Chapter 2: forces based on gravitational attraction.
    let force = p5.Vector.sub(this.position, particle.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 50);
    let strength = this.power / (distance * distance);
    force.setMag(strength);
    return force;
  }
}
