const { isAnagram } = require('../../src/solve/anagram');

describe("isAnagram",()=> {
  test('isAnagram should return true for anagram strings', () => {
    const sourceStr = 'listen';
    const targetStr = 'silent';
    expect(isAnagram(sourceStr, targetStr)).toBe(true);
  });
  
  test('isAnagram should return false for non-anagram strings', () => {
    const sourceStr = 'hello';
    const targetStr = 'world';
    expect(isAnagram(sourceStr, targetStr)).toBe(false);
  });
  
  test('isAnagram should return true for empty strings', () => {
    const sourceStr = '';
    const targetStr = '';
    expect(isAnagram(sourceStr, targetStr)).toBe(true);
  });
  
  test('isAnagram should return false for strings with different lengths', () => {
    const sourceStr = 'abc';
    const targetStr = 'abcd';
    expect(isAnagram(sourceStr, targetStr)).toBe(false);
  });
});
