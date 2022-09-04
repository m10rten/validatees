import isValidEmail from "../../src/lib/input/isValidEmail";
describe("isValidEmail", () => {
  it("should return true for test@test.test", () => {
    expect(isValidEmail("test@test.test")).toBe(true);
  });
  it("should return false for test", () => {
    expect(isValidEmail("test")).toBe(false);
  });
  it("should return false for test@test", () => {
    expect(isValidEmail("test@test")).toBe(false);
  });
  it("should throw an error for a number", () => {
    expect(() => isValidEmail(123 as unknown as string)).toThrow("Invalid argument");
  });
  it("should throw an error for an object", () => {
    expect(() => isValidEmail({} as unknown as string)).toThrow("Invalid argument");
  });
  it("should throw an error for an array", () => {
    expect(() => isValidEmail([] as unknown as string)).toThrow("Invalid argument");
  });
  it("should throw an error for a boolean", () => {
    expect(() => isValidEmail(true as unknown as string)).toThrow("Invalid argument");
  });
  it("should return false for null", () => {
    expect(isValidEmail(null as unknown as string)).toBe(false);
  });
  it("should return false for undefined", () => {
    expect(isValidEmail(undefined as unknown as string)).toBe(false);
  });
  it("should return false for an empty string", () => {
    expect(isValidEmail("")).toBe(false);
  });
  it("should return false for a string longer than 254 characters", () => {
    expect(isValidEmail("a".repeat(255))).toBe(false);
  });
  it("should return false for a string with a space", () => {
    expect(isValidEmail(" ")).toBe(false);
  });
  it("should return false for test@test.t", () => {
    expect(isValidEmail("test@test.t")).toBe(false);
  });
});
