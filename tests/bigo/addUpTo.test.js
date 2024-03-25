const { addUpToSimple, addUpToHack } = require("../../src/bigo/addUpTo");

describe("addUpToSimple", () => {
  it("should add numbers from 1 to n", () => {
    expect(addUpToSimple(5)).toBe(15);
    expect(addUpToSimple(10)).toBe(55);
    expect(addUpToSimple(100)).toBe(5050);
    console.log(addUpToSimple(100000000));
  });
});

describe("addUpToHack", () => {
  it("should add numbers from 1 to n", () => {
    expect(addUpToHack(5)).toBe(15);
    expect(addUpToHack(10)).toBe(55);
    expect(addUpToHack(100)).toBe(5050);
    console.log(addUpToHack(100000000));
  });
});

