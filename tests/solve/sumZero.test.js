const { sumZero } = require('../../src/solve/sumZero');

describe("sumZero", () => {
  test('sumZero should return undefined for an empty array', () => {
    expect(sumZero([])).toBeUndefined();
  });
  
  test('sumZero should return undefined if no pair sums to zero', () => {
    expect(sumZero([1, 2, 3, 4, 5])).toBeUndefined();
  });
  
  test('sumZero should return the pair that sums to zero', () => {
    expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4])).toEqual([-4, 4]);
  });
  
  test('sumZero should return the first pair that sums to zero', () => {
    expect(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6])).toEqual([-4, 4]);
  });
});
