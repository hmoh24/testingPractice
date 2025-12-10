const calculator = require("../src/calculator");

describe("calculator", () => {
  test("add", () => {
    expect(calculator.add(5, 3)).toBe(8);
  });

  test("add", () => {
    expect(calculator.add(1, 1203)).toBe(1204);
  });

  test("subtract", () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test("multiply", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });

  test("divide", () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });
});
