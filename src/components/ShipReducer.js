function calculatePosition({currentPosition, velocity, border}) {
  const nextPosition = currentPosition + velocity;

  if (nextPosition < 0) {
    return border;
  }

  if (nextPosition > border) {
    return 0;
  }

  return nextPosition;
}

export default function createShipReducer({ mapWidth, mapHeight}) {
  return ({ keyCode, currentPosition }) => {
    const speed = 0.08;
    const inertia = 0.99;
    let { x, y, rotation, velocityX, velocityY } = currentPosition;

    switch(keyCode) {
      case 37:
        return Object.assign({}, currentPosition, {
          x: calculatePosition({
            currentPosition: x,
            velocity: velocityX / 5,
            border: mapWidth
          }),
          y: calculatePosition({
            currentPosition: y,
            velocity: velocityY / 5,
            border: mapHeight
          }),
          velocityX: velocityX * inertia,
          velocityY: velocityY * inertia,
          rotation: rotation - 4,
        });
      case 39:
        return Object.assign({}, currentPosition, {
          x: calculatePosition({
            currentPosition: x,
            velocity: velocityX / 5,
            border: mapWidth
          }),
          y: calculatePosition({
            currentPosition: y,
            velocity: velocityY / 5,
            border: mapHeight
          }),
          velocityX: velocityX * inertia,
          velocityY: velocityY * inertia,
          rotation: rotation + 4,
        });
      case 38:
        velocityX += Math.sin(-rotation * Math.PI / 180) * speed;
        velocityY += Math.cos(-rotation * Math.PI / 180) * speed

        return Object.assign({}, currentPosition, {
          x: calculatePosition({
            currentPosition: x,
            velocity: velocityX,
            border: mapWidth
          }),
          y: calculatePosition({
            currentPosition: y,
            velocity: velocityY,
            border: mapHeight,
          }),
          velocityX: velocityX * inertia,
          velocityY: velocityY * inertia,
        });
      default:
        return Object.assign({}, currentPosition, {
          x: calculatePosition({
            currentPosition: x,
            velocity: velocityX,
            border: mapWidth
          }),
          y: calculatePosition({
            currentPosition: y,
            velocity: velocityY,
            border: mapHeight,
          }),
          velocityX: velocityX * inertia,
          velocityY: velocityY * inertia,
        });
    }
  }
}

