const caesarCipher = require("./caesarCipher");

describe("caesarCipher", () => {
  test("abc, 3, simple", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
  });
  test("abc, 4, simple", () => {
    expect(caesarCipher("abc", 4)).toBe("efg");
  });
  test("HeLLo, 3, case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("Hello, World!, 3, punctuation preservation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("xyz, 3, test wrap", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
});
