// GUI
let pSlider, nSlider;

let tValue = 10;
let tValueMin = 0;
let tValueMax = 100;
let tValueStep = 2;
let gui;

let params = {
  testValue : 10,
  testValueMin : 0,
  testValueMax : 100,
  testValueStep : 2,
  move : 1,
  moveMin : 0,
  moveMax : 10,
  moveStep : 0.1,
  tColor : [0, 200, 0],
  tChoice : ['pineapple', 'melon', 'peach','watermelon']
}

// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let att;

function setup() {
  createCanvas(300, 300);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 2, 350);
  att = new Attractor(20, height/2);
  
  pSlider = createSlider(0, 500, 100);
  pSlider.position(10, 10);
  nSlider = createSlider(0, 100, 0);
  nSlider.position(10, 340);
  
  gui = createGui('test slider');
  // sliderRange(0, 100, 2);
  // gui.addGlobals('tValue');
  
  gui.addObject(params);
  gui.setPosition(310, 10);
}

function draw() {
  background(255);
    
  repeller.setPower(params.testValue);
  repeller.move(params.move);
  
  for (let i=0; i<nSlider.value(); i++) {
    emitter.addParticle(params.tColor);  
  }
  
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.run();

  repeller.show();
  att.show();
}
