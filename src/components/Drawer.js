export default class Drawer {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.makeCanvasFullScreen(canvas);
  }

  initializeCanvas() {
    this.context.fillStyle = '#000';
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  makeCanvasFullScreen() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  drawShip({ x, y, rotation }) {
    this.initializeCanvas();
    this.context.save();
    this.context.fillStyle = '#fff';
    this.context.translate(x, y);
    this.context.rotate((rotation * Math.PI) / 180);
    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.lineTo(50, 0);
    this.context.lineTo(25, 25);
    this.context.fill();
    this.context.restore();
  }

  drawAsteroid({ x, y }) {
    this.context.beginPath();
    this.context.arc(x, y, 10, 0, 2 * Math.PI, false);
    this.context.fillStyle = 'green';
    this.context.fill();
    this.context.lineWidth = 5;
    this.context.strokeStyle = '#003300';
    this.context.stroke();
  }

  drawBullet({ x, y }) {
    this.context.beginPath();
    this.context.arc(x, y, 3, 0, 2 * Math.PI, false);
    this.context.fillStyle = '#fff';
    this.context.fill();
    this.context.lineWidth = 5;
    this.context.strokeStyle = '#fff';
    this.context.stroke();
  }
}

