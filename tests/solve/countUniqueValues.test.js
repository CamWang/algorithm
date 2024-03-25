const { countUniqueValues } = require('../../src/solve/countUniqueValues');

describe('countUniqueValues', () => {
  test('should return the correct count of unique values in a sorted array', () => {
    // Test case 1: Array with positive numbers
    const arr1 = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6];
    expect(countUniqueValues(arr1)).toBe(6);

    // Test case 2: Array with negative numbers
    const arr2 = [-5, -3, -3, -1, 0, 1, 1, 2, 3, 4];
    expect(countUniqueValues(arr2)).toBe(8);

    // Test case 3: Array with both positive and negative numbers
    const arr3 = [-2, -1, 0, 1, 2, 3, 4, 4, 5, 5];
    expect(countUniqueValues(arr3)).toBe(8);
  });
});
