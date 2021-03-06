import Ship from './Ship';
import Asteroid from './Asteroid';
import Bullet from './Bullet';
import Drawer from './Drawer';
import createReducers from './RootReducer';

const validMoveKeyCodes = [37, 38, 39];

function isValidKeyCode(keyCode) {
  return validMoveKeyCodes.includes(keyCode);
}

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
    this.bullets = [];
    window.requestAnimationFrame(this.renderGame.bind(this));
  }

  handleFire() {
    this.bullets = [...this.bullets, new Bullet(this.ship.position)];
  }

  onKeyDown(ev) {
    ev.preventDefault();
    const { keyCode } = ev;
    const isContained = this.keys.includes(keyCode);

    if (keyCode === 32) {
      this.handleFire();
    }

    if (!isValidKeyCode(keyCode) || isContained) {
      return;
    }

    this.keys.push(keyCode);
  }

  onKeyUp(ev) {
    ev.preventDefault();
    const { keyCode } = ev;
    const index = this.keys.findIndex(code => keyCode === code);

    if (!isValidKeyCode(keyCode)) {
      return;
    }

    this.keys = [...this.keys.slice(0, index), ...this.keys.slice(index + 1)];
  }

  move() {
    this.ship.position = this.keys.reduce((position, keyCode) => (
      this.reducer('ship', {
        keyCode,
        currentPosition: position,
      })
    ), this.ship.position);

    this.asteroids = this.asteroids.map(asteroid => (
      Object.assign({}, asteroid, {
        position: this.reducer('asteroid', {
          currentPosition: asteroid.position,
        }),
      })
    ));

    this.bullets = this.bullets.map(bullet => (
      Object.assign({}, bullet, {
        position: this.reducer('bullet', {
          currentPosition: bullet.position,
        }),
      })
    ));
  }

  renderGame() {
    this.ship.position = this.reducer('ship', {
      keyCode: 0,
      currentPosition: this.ship.position,
    });

    this.move();
    this.drawer.drawShip(this.ship.position);
    this.asteroids.forEach(asteroid => this.drawer.drawAsteroid(asteroid.position));
    this.bullets.forEach(bullet => this.drawer.drawBullet(bullet.position));

    window.requestAnimationFrame(this.renderGame.bind(this));
  }
}

