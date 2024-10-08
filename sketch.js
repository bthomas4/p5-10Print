let x = 0;
let y = 0;
let spacing = 10;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  if (y < height) {
    stroke(255);
    if (random(1) < 0.75) {
      line(x, y, x + spacing, y + spacing);
    } else {
      line(x, y + spacing, x + spacing, y);
    }
    x += spacing;
    if (x >= width) {
      x = 0;
      y += spacing;
    }
  }
}
