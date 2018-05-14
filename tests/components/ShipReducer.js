import ShipReducer from '../../src/components/ShipReducer';

const testPositions = {
  x: 0,
  y: 0,
  velocityX: 0,
  velocityY: 0,
  rotation: 0,
};

test('it returns the original object if the keyCode is invalid', () => {
  expect(ShipReducer({
    keyCode: 1,
    currentPosition: testPositions,
  })).toEqual(testPositions);
});

test('it always returns a new object', () => {
  expect(ShipReducer({
    keyCode: 1,
    currentPosition: testPositions,
  })).not.toBe(testPositions);
});

test('it moves the ship forward', () => {
  expect(ShipReducer({
    keyCode: 38,
    currentPosition: testPositions,
  })).toEqual({
    x: 0,
    y: 0.08,
    velocityX: 0,
    velocityY: 0.0792,
    rotation: 0,
  });
});

test('it moves the ship left', () => {
  expect(ShipReducer({
    keyCode: 37,
    currentPosition: testPositions,
  })).toEqual({
    x: 0,
    y: 0,
    velocityX: 0,
    velocityY: 0,
    rotation: -4,
  });
});

test('it moves the ship right', () => {
  expect(ShipReducer({
    keyCode: 39,
    currentPosition: testPositions,
  })).toEqual({
    x: 0,
    y: 0,
    velocityX: 0,
    velocityY: 0,
    rotation: 4,
  });
});
