import isRegExp from "../../src/lib/types/isRegExp";

describe("isRegExp", () => {
  it("should return true for /test/", () => {
    expect(isRegExp(/test/)).toBe(true);
  });
  it("should return true for new RegExp", () => {
    expect(isRegExp(new RegExp("test"))).toBe(true);
  });
  it("should return false for RegExp", () => {
    expect(isRegExp(RegExp)).toBe(false); // RegExp is not initialized.
  });
  it("should return true for new RegExp()", () => {
    expect(isRegExp(new RegExp(""))).toBe(true);
  });
  it("should return true for new RegExp", () => {
    expect(isRegExp(RegExp("test"))).toBe(true);
  });
  it('should return false for "test"', () => {
    expect(isRegExp("test")).toBe(false);
  });
});
