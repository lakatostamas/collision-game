export default function BulletReducer({ currentPosition }) {
  const {
    x,
    y,
    rotation,
    velocityX,
    velocityY,
  } = currentPosition;
  const speed = 5;
  const increasedVelocityX = velocityX + (Math.sin((-rotation * Math.PI) / 180) * speed);
  const increasedVelocityY = velocityY + (Math.cos((-rotation * Math.PI) / 180) * speed);

  return Object.assign({}, currentPosition, {
    x: x + increasedVelocityX,
    y: y + increasedVelocityY,
    increasedVelocityX,
    increasedVelocityY,
    rotation,
  });
}

