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

  drawShip({x, y, rotation}) {
    this.initializeCanvas();
    this.context.save();
    this.context.fillStyle = "#fff";
    this.context.translate(x, y);
    this.context.rotate(rotation * Math.PI / 180);
    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.lineTo(50, 0);
    this.context.lineTo(25, 25);
    this.context.fill();
    this.context.restore();
  }
}

