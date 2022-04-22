class Rect {
  x;
  y;
  size;

  constructor() {
    this.x = Math.random() * windowWidth;
    this.y = Math.random() * windowHeight;
    this.size = 100;
  }
}
