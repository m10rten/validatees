import isFalsy from "../lib/isFalsy";
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
  it("should return true for 0n", () => {
    expect(isFalsy(0n)).toBe(true);
  });
  it("should return true for -0n", () => {
    expect(isFalsy(-0n)).toBe(true);
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
  xit("should return true for Symbol('')", () => {
    expect(isFalsy(Symbol(""))).toBe(true);
  });
  it("should return true for []", () => {
    expect(isFalsy([])).toBe(true);
  });
  it("should return true for {}", () => {
    expect(isFalsy({})).toBe(true);
  });
  it("should return true for false", () => {
    expect(isFalsy(false)).toBe(true);
  });
  it("should return true for () => {}", () => {
    expect(isFalsy(() => {})).toBe(true);
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
  it("should return true for () => []", () => {
    expect(isFalsy(() => [])).toBe(true);
  });
});
