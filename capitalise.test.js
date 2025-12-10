// @ts-check
/// <reference types="jest" />

const capitalise = require("./capitalise");

describe("capitalise", () => {
  test.each([
    ["hello", "Hello"],
    ["what's good", "What's good"],
    ["a", "A"],
    ["", ""],
  ])('capitalise("%s") -> "%s"', (input, expected) => {
    expect(capitalise(input)).toBe(expected);
  });
});
