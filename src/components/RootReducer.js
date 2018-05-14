import ShipReducer from './ShipReducer';
import AsteroidReducer from './AsteroidReducer';
import BulletReducer from './BulletReducer';

const reducers = {
  ship: ShipReducer,
  asteroid: AsteroidReducer,
  bullet: BulletReducer,
};
const excludeFromAdjust = ['bullet'];

function calculateCord(position, border) {
  if (position > border) {
    return 0;
  }

  if (position < 0) {
    return border;
  }

  return position;
}

function adjustNextPosition(type, { width, height }, nextPosition) {
  if (excludeFromAdjust.includes(type)) {
    return nextPosition;
  }

  const { x, y } = nextPosition;
  const adjustedX = calculateCord(x, width);
  const adjustedY = calculateCord(y, height);

  return Object.assign({}, nextPosition, {
    x: adjustedX,
    y: adjustedY,
  });
}

export default function createReducers(borders) {
  return (type, payload) => {
    const nextPosition = reducers[type](payload);
    return adjustNextPosition(type, borders, nextPosition);
  };
}

