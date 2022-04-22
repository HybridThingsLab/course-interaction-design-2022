class Petal {
  toX;
  toY;

  constructor() {
    this.toX = map(Math.random(), 0, 1, 0, 200);
    this.toY = map(Math.random(), 0, 1, 0, 200);
  }
}
