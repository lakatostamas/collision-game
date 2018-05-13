export default function AsteroidReducer({ currentPosition }) {
  let { x, y, velocityX, rotation, velocityY } = currentPosition;

  const speed = 1.5;

  velocityX = Math.sin(-rotation * Math.PI / 180) * speed;
  velocityY = Math.cos(-rotation * Math.PI / 180) * speed;

  return Object.assign({}, currentPosition, {
    x: x + velocityX,
    y: y + velocityY,
    velocityX,
    velocityY,
    rotation,
  });
}

function randomNumBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
};
