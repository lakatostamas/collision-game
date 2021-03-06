export default function shipReducer({ keyCode, currentPosition }) {
  const speed = 0.08;
  const inertia = 0.99;
  const {
    x,
    y,
    rotation,
    velocityX,
    velocityY,
  } = currentPosition;

  switch (keyCode) {
    case 37:
      return Object.assign({}, currentPosition, {
        x: x + (velocityX / 5),
        y: y + (velocityY / 5),
        velocityX: velocityX * inertia,
        velocityY: velocityY * inertia,
        rotation: rotation - 4,
      });
    case 39:
      return Object.assign({}, currentPosition, {
        x: x + (velocityX / 5),
        y: y + (velocityY / 5),
        velocityX: velocityX * inertia,
        velocityY: velocityY * inertia,
        rotation: rotation + 4,
      });
    case 38: {
      const increasedVelocityX = velocityX + (Math.sin((-rotation * Math.PI) / 180) * speed);
      const increasedVelocityY = velocityY + (Math.cos((-rotation * Math.PI) / 180) * speed);

      return Object.assign({}, currentPosition, {
        x: x + increasedVelocityX,
        y: y + increasedVelocityY,
        velocityX: increasedVelocityX * inertia,
        velocityY: increasedVelocityY * inertia,
      });
    }
    default:
      return Object.assign({}, currentPosition, {
        x: x + velocityX,
        y: y + velocityY,
        velocityX: velocityX * inertia,
        velocityY: velocityY * inertia,
      });
  }
}

