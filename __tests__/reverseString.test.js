const reverseString = require("../src/reverseString");

describe("reverse string", () => {
  test("Hello", () => {
    expect(reverseString("Hello")).toBe("olleH");
  });
  test("Good Morning", () => {
    expect(reverseString("Good Morning")).toBe("gninroM dooG");
  });
});
