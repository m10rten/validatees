import isValidPassword from "../../src/lib/input/isValidPassword";
describe("isValidPassword", () => {
  it("should return true for 'testabc123!@#'", () => {
    expect(isValidPassword("testabc123!@#")).toBe(true);
  });
  it("should return false for 'test'", () => {
    expect(isValidPassword("test")).toBe(false);
  });
  it("should return false for 'testabc123'", () => {
    expect(isValidPassword("testabc123")).toBe(false);
  });
  it("should return false for 'testabc!@#'", () => {
    expect(isValidPassword("testabc!@#")).toBe(false);
  });
  it("should return true for 'test123!@#'", () => {
    expect(isValidPassword("test123!@#")).toBe(true);
  });
  it("should throw an error for 123", () => {
    expect(() => isValidPassword(123 as unknown as string)).toThrow("Invalid argument");
  });
  it("should throw an error for an object", () => {
    expect(() => isValidPassword({} as unknown as string)).toThrow("Invalid argument");
  });
  it("should throw an error for an array", () => {
    expect(() => isValidPassword([] as unknown as string)).toThrow("Invalid argument");
  });
  it("should throw an error for a boolean", () => {
    expect(() => isValidPassword(true as unknown as string)).toThrow("Invalid argument");
  });
  it("should return false for undefined", () => {
    expect(isValidPassword(undefined as unknown as string)).toBe(false);
  });
  it("should return false for null", () => {
    expect(isValidPassword(null as unknown as string)).toBe(false);
  });
  it("should return true for 'test1!' with custom options", () => {
    expect(isValidPassword("test1!", { minLength: 4 })).toBe(true);
  });
  it("should return true for 'test1test' with custom options", () => {
    expect(isValidPassword("test1test", { specialChars: 0 })).toBe(true);
  });
  it("should return true for 'test!test' with custom options", () => {
    expect(isValidPassword("test!test", { numbers: 0 })).toBe(true);
  });
});
