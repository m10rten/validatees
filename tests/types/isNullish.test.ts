import isNullish from "../../src/lib/types/isNullish";
describe("isNullish", () => {
  it("should return true for null", () => {
    expect(isNullish(null)).toBe(true);
  });
  it("should return true for undefined", () => {
    expect(isNullish(undefined)).toBe(true);
  });
  it("should return false for 0", () => {
    expect(isNullish(0)).toBe(false);
  });
  it("should return false for a boolean", () => {
    expect(isNullish(false)).toBe(false);
    expect(isNullish(true)).toBe(false);
  });
  it("should return false for a number", () => {
    expect(isNullish(0)).toBe(false);
    expect(isNullish(1)).toBe(false);
  });
  it("should return false for a string", () => {
    expect(isNullish("")).toBe(false);
    expect(isNullish("test")).toBe(false);
  });
});
