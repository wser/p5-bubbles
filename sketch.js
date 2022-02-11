var bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
   var b = new Bubble(mouseX, mouseY);
   bubbles.push(b);
}

function draw() {
  background(0);
  for(var i = bubbles.length-1; i >= 0; i--){
    bubbles[i].show()
    //bubbles[i].shake()
    bubbles[i].grow()
    if(bubbles[i].live < 0) {bubbles.splice(i,1)}
   
  }
}

function Bubble(x, y) {
  this.x = x;
  this.y = y;
  this.s = 35
  this.live = 100;
  
  this.r = random(0,100)
  this.b = random(140,255)
  this.g = random(240, 255)
  
  this.show = function(){
    noStroke()
    fill(this.r, this.b, this.g, 70)
    ellipse(this.x, this.y, this.s, this.s)
    this.live--
  }
  
  this.shake = function(){
    this.x += random(-2, 2)
    this.y += random(-2, 2)
  }
  
  this.grow = function(){
    this.s +=.5
  }
  
};
