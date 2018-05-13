import Ship from './Ship';
import Asteroid from './Asteroid';
import Drawer from './Drawer';
import createReducers from './RootReducer';

const validMoveKeyCodes = [37, 38, 39];

export default class Game {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.context = this.canvas.getContext('2d');
    this.drawer = new Drawer(this.canvas);
    this.drawer.initializeCanvas();
    this.reducer = createReducers({
      width: this.canvas.width,
      height: this.canvas.height,
    });
 }

  initialize() {
    this.canvas.addEventListener('keydown', this.onKeyDown.bind(this));
    this.canvas.addEventListener('keyup', this.onKeyUp.bind(this));
    this.keys = [];
    this.ship = new Ship();
    this.asteroids = [...Array(10)].map(() => new Asteroid());

    window.requestAnimationFrame(this.renderGame.bind(this));
  }

  isValidKeyCode(keyCode) {
    return validMoveKeyCodes.includes(keyCode);
  }

  onKeyDown(ev) {
    ev.preventDefault();
    const { keyCode } = ev;

    if (!this.isValidKeyCode(keyCode)) {
      return;
    }

    const isContained = this.keys.includes(keyCode);

    if(!isContained) {
      this.keys.push(keyCode);
    }
  }

  onKeyUp(ev) {
    ev.preventDefault();
    const { keyCode } = ev;
    const index = this.keys.findIndex(code => keyCode === code);

    this.keys = [...this.keys.slice(0, index) ,...this.keys.slice(index + 1)];
  }

  move() {
    this.ship.position = this.keys.reduce((position, keyCode) => {
      return this.reducer('ship', {
        keyCode,
        currentPosition: position,
      })
    }, this.ship.position);

    this.asteroids = this.asteroids.map(asteroid => {
      return Object.assign({}, asteroid, {
        position: this.reducer('asteroid', {
          currentPosition: asteroid.position,
        }),
      });
    });
  }

  renderGame() {
    this.ship.position = this.reducer('ship', {
      keyCode: 0,
      currentPosition: this.ship.position
    });

    this.move();
    this.drawer.drawShip(this.ship.position);
    this.asteroids.forEach(asteroid => {
      return this.drawer.drawAsteroid(asteroid.position);
    });

    window.requestAnimationFrame(this.renderGame.bind(this));
  }
}

