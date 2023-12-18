// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y) {
    this.position = createVector(width / 2, 20);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255.0;
  }

  run() {
    this.update();
    this.show();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 5;
    this.acceleration.mult(0);
  }

  // Method to display
  show() {
    stroke(255, this.lifespan);
    strokeWeight(2);
    fill(255, this.lifespan);
    circle(this.position.x, this.position.y, 1);
  }

  // Is the particle still useful?
  isDead() {
    return this.lifespan < 0.0;
  }
}
