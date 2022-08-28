import isValidDate from "../../src/lib/input/isValidDate";
describe("isValidDate", () => {
  it("should return true for '2020-01-01'", () => {
    expect(isValidDate("2020-01-01")).toBe(true);
  });
  it("should return true for '2020-01-01T00:00:00.000Z'", () => {
    expect(isValidDate("2020-01-01T00:00:00.000Z")).toBe(true);
  });
  it("should return true for new Date(1)", () => {
    expect(isValidDate(new Date(1))).toBe(true);
  });
  it("should return false for NaN", () => {
    expect(isValidDate(NaN)).toBe(false);
  });
  it("should return true for 1", () => {
    expect(isValidDate(1)).toBe(true);
  });
  it("should return true for '1'", () => {
    expect(isValidDate("1")).toBe(true);
  });
  it("should return true for '1-1-1'", () => {
    expect(isValidDate("1-1-1")).toBe(true);
  });
  it("should return true for '1/1/1'", () => {
    expect(isValidDate("1/1/1")).toBe(true);
  });
  it("should return true for '1.1.1'", () => {
    expect(isValidDate("1.1.1")).toBe(true);
  });
  it("should return true for new Date()", () => {
    expect(isValidDate(new Date())).toBe(true);
  });
  it("should return false for -1", () => {
    expect(isValidDate(-1)).toBe(false);
  });
  it("should return false for '-1'", () => {
    expect(isValidDate("-1")).toBe(false);
  });
  it("should return false for '-1-1-1'", () => {
    expect(isValidDate("-1-1-1")).toBe(false);
  });
  it("should return false for classA", () => {
    class classA {}
    expect(isValidDate(classA)).toBe(false);
  });
  it("should return false for new Error", () => {
    expect(isValidDate(new Error())).toBe(false);
  });
});
