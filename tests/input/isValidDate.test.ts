import isValidDate from "../../src/lib/input/isValidDate";
describe("isValidDate", () => {
  it("should return false for 1", () => {
    expect(isValidDate(1)).toBe(false);
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
});
