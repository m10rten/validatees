import isFalsyExtended from "../../src/lib/types/isFalsyExtended";
describe("isFalsyExtended", () => {
  it("should return true for empty array", () => {
    expect(isFalsyExtended([])).toBe(true);
  });
  it("should return true for empty object", () => {
    expect(isFalsyExtended({})).toBe(true);
  });
  it("should return true for empty string", () => {
    expect(isFalsyExtended("")).toBe(true);
  });
  it("should return true for null", () => {
    expect(isFalsyExtended(null)).toBe(true);
  });
  it("should return true for undefined", () => {
    expect(isFalsyExtended(undefined)).toBe(true);
  });
  it("should return true for NaN", () => {
    expect(isFalsyExtended(NaN)).toBe(true);
  });
  it("should return true for 0", () => {
    expect(isFalsyExtended(0)).toBe(true);
  });
  it("should return true for false", () => {
    expect(isFalsyExtended(false)).toBe(true);
  });
  it("should return false for true", () => {
    expect(isFalsyExtended(true)).toBe(false);
  });
  it("should return false for 1", () => {
    expect(isFalsyExtended(1)).toBe(false);
  });
  it("should return false for 'a'", () => {
    expect(isFalsyExtended("a")).toBe(false);
  });
  it("should return false for [1]", () => {
    expect(isFalsyExtended([1])).toBe(false);
  });
  it("should return false for {a:1}", () => {
    expect(isFalsyExtended({ a: 1 })).toBe(false);
  });
  it("should return true for [{},{}]", () => {
    expect(isFalsyExtended([{}, {}])).toBe(true);
  });
  it("should return false for [{a:1},{b:2}]", () => {
    expect(isFalsyExtended([{ a: 1 }, { b: 2 }])).toBe(false);
  });
  it("should return true for [{a:1},{b:2},null]", () => {
    expect(isFalsyExtended([{ a: 1 }, { b: 2 }, null])).toBe(true);
  });
  it("should return true for [{a:1},{b:2},undefined]", () => {
    expect(isFalsyExtended([{ a: 1 }, { b: 2 }, undefined])).toBe(true);
  });
  it("should return true for [{a:1},{b:2},NaN]", () => {
    expect(isFalsyExtended([{ a: 1 }, { b: 2 }, NaN])).toBe(true);
  });
  it("should return true for () => {}", () => {
    expect(isFalsyExtended(() => {})).toBe(true);
  });
  it("should return false for () => {return 1}", () => {
    expect(
      isFalsyExtended(() => {
        return 1;
      }),
    ).toBe(false);
  });
  it("should return false for () => {return true}", () => {
    expect(
      isFalsyExtended(() => {
        return true;
      }),
    ).toBe(false);
  });
  it("should return true for () => {return false}", () => {
    expect(
      isFalsyExtended(() => {
        return false;
      }),
    ).toBe(true);
  });
  it("should return false for {a:1,b:2}", () => {
    expect(isFalsyExtended({ a: 1, b: 2 })).toBe(false);
  });
  it("should return true for {a:1,b:2,c:null}", () => {
    expect(isFalsyExtended({ a: 1, b: 2, c: null })).toBe(true);
  });
  it("should return true for {a:1,b:2,c:undefined}", () => {
    expect(isFalsyExtended({ a: 1, b: 2, c: undefined })).toBe(true);
  });
  it("should return true for {a:1,b:2,c:NaN}", () => {
    expect(isFalsyExtended({ a: 1, b: 2, c: NaN })).toBe(true);
  });
  it("should return true for {a:1,b:2,c:0}", () => {
    expect(isFalsyExtended({ a: 1, b: 2, c: 0 })).toBe(true);
  });
  it("should return true for {a:1,b:2,c:false}", () => {
    expect(isFalsyExtended({ a: 1, b: 2, c: false })).toBe(true);
  });
  it("should return true for {}", () => {
    expect(isFalsyExtended({})).toBe(true);
  });
  it("should return false for BigInt(1)", () => {
    expect(isFalsyExtended(BigInt(1))).toBe(false);
  });
  it("should return true for Number.MAX_SAFE_INTEGER + 1", () => {
    expect(isFalsyExtended(Number.MAX_SAFE_INTEGER + 1)).toBe(true);
  });
  it("should return true for Number.MIN_SAFE_INTEGER - 1", () => {
    expect(isFalsyExtended(Number.MIN_SAFE_INTEGER - 1)).toBe(true);
  });
});
