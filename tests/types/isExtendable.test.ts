import isExtendable from "../../src/lib/types/isExtendable";
describe("isExtendable", () => {
  test("should return true for an object", () => {
    expect(isExtendable({})).toBe(true);
  });
  test("should return true for an array", () => {
    expect(isExtendable([])).toBe(true);
  });
  test("should return false for a frozen object", () => {
    expect(isExtendable(Object.freeze({}))).toBe(false);
  });
  test("should return false for a sealed object", () => {
    expect(isExtendable(Object.seal({}))).toBe(false);
  });
  test("should return false for a non-extensible object", () => {
    expect(isExtendable(Object.preventExtensions({}))).toBe(false);
  });
  test("should return false for a frozen array", () => {
    expect(isExtendable(Object.freeze([]))).toBe(false);
  });
  test("should return false for a sealed array", () => {
    expect(isExtendable(Object.seal([]))).toBe(false);
  });
  test("should return false for a non-extensible array", () => {
    expect(isExtendable(Object.preventExtensions([]))).toBe(false);
  });
  test("should return false for a function", () => {
    expect(() => isExtendable(() => {})).toThrow("Invalid arguments");
  });
  test("should return false for a string", () => {
    expect(() => isExtendable("")).toThrow("Invalid arguments");
  });
  test("should return false for a number", () => {
    expect(() => isExtendable(0)).toThrow("Invalid arguments");
  });
  test("should return false for a boolean", () => {
    expect(() => isExtendable(true)).toThrow("Invalid arguments");
  });
  test("should return false for null", () => {
    expect(() => isExtendable(null)).toThrow("Invalid arguments");
  });
  test("should return false for undefined", () => {
    expect(() => isExtendable(undefined)).toThrow("Invalid arguments");
  });
});
