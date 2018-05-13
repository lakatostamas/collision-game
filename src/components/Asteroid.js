export default class Asteroid {
  constructor() {
    this.position = {
      x: 300,
      y: 300,
      rotation: (Math.random() * 360) * (Math.floor(Math.random() * 2) === 1 ? 1 : -1),
      velocityX: 0,
      velocityY: 0,
    };
  }
}

