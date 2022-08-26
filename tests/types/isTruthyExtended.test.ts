import isTruthyExtended from "../../src/lib/types/isTruthyExtended";
describe("isTruthyExtended", () => {
  it("should return false for empty array", () => {
    expect(isTruthyExtended([])).toBe(false);
  });
  it("should return false for empty object", () => {
    expect(isTruthyExtended({})).toBe(false);
  });
  it("should return false for empty string", () => {
    expect(isTruthyExtended("")).toBe(false);
  });
  it("should return false for null", () => {
    expect(isTruthyExtended(null)).toBe(false);
  });
  it("should return false for undefined", () => {
    expect(isTruthyExtended(undefined)).toBe(false);
  });
  it("should return false for NaN", () => {
    expect(isTruthyExtended(NaN)).toBe(false);
  });
  it("should return false for 0", () => {
    expect(isTruthyExtended(0)).toBe(false);
  });
  it("should return true for true", () => {
    expect(isTruthyExtended(true)).toBe(true);
  });
  it("should return false for false", () => {
    expect(isTruthyExtended(false)).toBe(false);
  });
  it("should return true for 1", () => {
    expect(isTruthyExtended(1)).toBe(true);
  });
  it("should return true for 'a'", () => {
    expect(isTruthyExtended("a")).toBe(true);
  });
  it("should return true for [1]", () => {
    expect(isTruthyExtended([1])).toBe(true);
  });
  it("should return true for {a:1}", () => {
    expect(isTruthyExtended({ a: 1 })).toBe(true);
  });
  it("should return false for [{},{}]", () => {
    expect(isTruthyExtended([{}, {}])).toBe(false);
  });
  it("should return true for [{a:1},{b:2}]", () => {
    expect(isTruthyExtended([{ a: 1 }, { b: 2 }])).toBe(true);
  });
  it("should return false for [{a:1},{b:2},null]", () => {
    expect(isTruthyExtended([{ a: 1 }, { b: 2 }, null])).toBe(false);
  });
  it("should return true for [{a:1},{b:2},undefined]", () => {
    expect(isTruthyExtended([{ a: 1 }, { b: 2 }, undefined])).toBe(false);
  });
});
