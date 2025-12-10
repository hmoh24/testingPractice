import analyzeArray from "../src/analyzeArray";

describe("analyze array", () => {
  test("1", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("2", () => {
    expect(analyzeArray([-5, 0, 10, 15])).toEqual({
      average: 5,
      min: -5,
      max: 15,
      length: 4,
    });
  });
});
