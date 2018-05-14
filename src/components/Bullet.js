export default class Bullet {
  constructor({ x, y, rotation }) {
    this.position = {
      x,
      y,
      rotation,
      velocityX: 0,
      velocityY: 0,
    };
  }
}

