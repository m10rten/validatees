import isFalsy from "../../src/lib/types/isFalsy";
describe("isFalsy", () => {
  it("should return true for undefined", () => {
    expect(isFalsy(undefined)).toBe(true);
  });
  it("should return true for null", () => {
    expect(isFalsy(null)).toBe(true);
  });
  it("should return true for NaN", () => {
    expect(isFalsy(NaN)).toBe(true);
  });
  it("should return true for 0", () => {
    expect(isFalsy(0)).toBe(true);
  });
  it("should return true for -0", () => {
    expect(isFalsy(-0)).toBe(true);
  });
  it("should return true for ''", () => {
    expect(isFalsy("")).toBe(true);
  });
  it("should return true for ``", () => {
    expect(isFalsy(``)).toBe(true);
  });
  it("should return true for ' '", () => {
    expect(isFalsy(" ")).toBe(true);
  });
  it("should return true for '0'", () => {
    expect(isFalsy("0")).toBe(true);
  });
  it("should return false for []", () => {
    expect(isFalsy([])).toBe(false);
  });
  it("should return false for {}", () => {
    expect(isFalsy({})).toBe(false);
  });
  it("should return true for false", () => {
    expect(isFalsy(false)).toBe(true);
  });
  it("should return false for true", () => {
    expect(isFalsy(true)).toBe(false);
  });
  it("should return true for () => 0", () => {
    expect(isFalsy(() => 0)).toBe(true);
  });
  it("should return true for () => ''", () => {
    expect(isFalsy(() => "")).toBe(true);
  });
  it("should return true for () => false", () => {
    expect(isFalsy(() => false)).toBe(true);
  });
  it("should return false for () => []", () => {
    expect(isFalsy(() => [])).toBe(false);
  });
  it("should return true for () => {}", () => {
    expect(isFalsy(() => {})).toBe(true); // returns undefined since normal function
  });
  it("should return false for [false]", () => {
    expect(isFalsy([false])).toBe(false);
  });
  it("should return false for [0]", () => {
    expect(isFalsy([0])).toBe(false);
  });
  it("should return false for ['']", () => {
    expect(isFalsy([""])).toBe(false);
  });
  it(`should return false for [" "]`, () => {
    expect(isFalsy([" "])).toBe(false);
  });
  it("should return false for [null]", () => {
    expect(isFalsy([null])).toBe(false);
  });
  it("should return false for [undefined]", () => {
    expect(isFalsy([undefined])).toBe(false);
  });
  it("should return false for [NaN]", () => {
    expect(isFalsy([NaN])).toBe(false);
  });
  it("should return false for [{}]", () => {
    expect(isFalsy([{}])).toBe(false);
  });
  it("should return false for [[]]", () => {
    expect(isFalsy([[]])).toBe(false);
  });
});
