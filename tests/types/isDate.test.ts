import isDate from "../../src/lib/types/isDate";

describe("isDate", () => {
  it("should return true when value is a Date instance", () => {
    expect(isDate(new Date())).toBe(true);
  });
  it("should return false when value is a Date, not initialized", () => {
    expect(isDate(Date)).toBe(false);
  });
  it("should return false when value is not a Date instance", () => {
    expect(isDate("")).toBe(false);
    expect(isDate(1)).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(() => {})).toBe(false);
    expect(isDate(/./)).toBe(false);
    expect(isDate(new RegExp(""))).toBe(false);
    expect(isDate(new String(""))).toBe(false);
    expect(isDate(new Number(1))).toBe(false);
    expect(isDate(new Boolean(true))).toBe(false);
  });
});
