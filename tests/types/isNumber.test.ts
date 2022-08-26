import isNumber from "../../src/lib/types/isNumber";

describe("isNumber", () => {
  it("should return true for 1", () => {
    expect(isNumber(1)).toBe(true);
  });
  it("should return true for 0", () => {
    expect(isNumber(0)).toBe(true);
  });
  it("should return true for -1", () => {
    expect(isNumber(-1)).toBe(true);
  });
  it("should return true for 1.1", () => {
    expect(isNumber(1.1)).toBe(true);
  });
  it("should return true for 0.1", () => {
    expect(isNumber(0.1)).toBe(true);
  });
  it("should return true for -1.1", () => {
    expect(isNumber(-1.1)).toBe(true);
  });
  it("should return true for 1e1", () => {
    expect(isNumber(1e1)).toBe(true);
  });
  it("should return true for 0e1", () => {
    expect(isNumber(0e1)).toBe(true);
  });
  it("should return true for -1e1", () => {
    expect(isNumber(-1e1)).toBe(true);
  });
  it("should return false for NaN", () => {
    expect(isNumber(NaN)).toBe(false);
  });
  it("should return true for Infinity", () => {
    expect(isNumber(Infinity)).toBe(true);
  });
  it("should return true for -Infinity", () => {
    expect(isNumber(-Infinity)).toBe(true);
  });
  it("should return false for '1'", () => {
    expect(isNumber("1")).toBe(false);
  });
  it("should return false for '0'", () => {
    expect(isNumber("0")).toBe(false);
  });
  it("should return false for '-1'", () => {
    expect(isNumber("-1")).toBe(false);
  });
  it("should return false for '1.1'", () => {
    expect(isNumber("1.1")).toBe(false);
  });
  it("should return true for new Number(1)", () => {
    expect(isNumber(new Number(1))).toBe(true);
  });
  it("should return true for new Number(0)", () => {
    expect(isNumber(new Number(0))).toBe(true);
  });
  it("should return true for new Number(-1)", () => {
    expect(isNumber(new Number(-1))).toBe(true);
  });
});
