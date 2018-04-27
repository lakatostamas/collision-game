export default function asteroidReducer({ currentPosition }) {
  let { x, y, velocityX, rotation, velocityY } = currentPosition;

  const speed = 0.01;

  velocityX += Math.sin(-rotation * Math.PI / 180) * speed;
  velocityY += Math.cos(-rotation * Math.PI / 180) * speed;

  console.log(velocityX, velocityY, rotation);

  return Object.assign({}, currentPosition, {
    x: x + velocityX,
    y: y + velocityY,
    velocityX,
    velocityY,
    rotation: Math.random() > 0.5 ? -20 : 20,
  });
}

function randomNumBetween(min, max) {
  return Math.random() * (max - min + 1) + min;
};
