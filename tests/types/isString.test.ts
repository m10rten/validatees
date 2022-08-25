import isString from "../../src/lib/types/isString";
describe("isString", () => {
  it("should return true for 'string'", () => {
    expect(isString("string")).toBe(true);
  });
  it("should return true for ''", () => {
    expect(isString("")).toBe(true);
  });
  it("should return true for `string`", () => {
    expect(isString(`string`)).toBe(true);
  });
  it("should return true for ``", () => {
    expect(isString(``)).toBe(true);
  });
  it("should return true for new String('string')", () => {
    expect(isString(new String("string"))).toBe(true);
  });
  it("should return true for new String('')", () => {
    expect(isString(new String(""))).toBe(true);
  });
  it("should return true for new String(`string`)", () => {
    expect(isString(new String(`string`))).toBe(true);
  });
  it("should return true for new String(``)", () => {
    expect(isString(new String(``))).toBe(true);
  });
  it("should return true for String('string')", () => {
    expect(isString(String("string"))).toBe(true);
  });
  it("should return true for String('')", () => {
    expect(isString(String(""))).toBe(true);
  });
  it("should return true for String(`string`)", () => {
    expect(isString(String(`string`))).toBe(true);
  });
  it("should return true for String(``)", () => {
    expect(isString(String(``))).toBe(true);
  });
  it("should return false for [String('string')]", () => {
    expect(isString([String("string")])).toBe(false);
  });
  it("should return false for [String('')]", () => {
    expect(isString([String("")])).toBe(false);
  });
  it("should return false for [String(`string`)]", () => {
    expect(isString([String(`string`)])).toBe(false);
  });
  it("should return false for [String(``)]", () => {
    expect(isString([String(``)])).toBe(false);
  });
  it("should return false for [String('string'), String('')]", () => {
    expect(isString([String("string")])).toBe(false);
  });
  it("should return false for [String(''), String('string')]", () => {
    expect(isString([String(""), String("")])).toBe(false);
  });
});
