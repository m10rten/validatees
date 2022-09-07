import isValidUrl from "../../src/lib/input/isValidUrl";
describe("isValidUrl", () => {
  it("should return true", () => {
    expect(isValidUrl("https://www.google.com")).toBe(true);
  });
  it("should return false", () => {
    expect(isValidUrl("https://www.google")).toBe(false);
  });
  it("should throw an error for invalid argument", () => {
    expect(() => isValidUrl(123)).toThrowError("Invalid argument");
  });
  it("should return false for null", () => {
    expect(isValidUrl(null)).toBe(false);
  });
  it("should return false for undefined", () => {
    expect(isValidUrl(undefined)).toBe(false);
  });
  it("should return false for empty string", () => {
    expect(isValidUrl("")).toBe(false);
  });
  it("should return true for http://localhost:3000", () => {
    expect(isValidUrl("http://localhost:3000")).toBe(true);
  });
  it("should return true for http://localhost", () => {
    expect(isValidUrl("http://localhost")).toBe(true);
  });
  it("should return true for http://localhost:3000/", () => {
    expect(isValidUrl("http://localhost:3000/")).toBe(true);
  });
  it("should return true for http://localhost:3000/abc", () => {
    expect(isValidUrl("http://localhost:3000/abc")).toBe(true);
  });
  it("should return true for http://www.localhost", () => {
    expect(isValidUrl("http://www.localhost")).toBe(true);
  });
  it("should return true for google.com", () => {
    expect(isValidUrl("google.com")).toBe(true);
  });
  it("should return true for www.google.com", () => {
    expect(isValidUrl("www.google.com")).toBe(true);
  });
  it("should return true for www.google.com:3000", () => {
    expect(isValidUrl("www.google.com:3000")).toBe(true);
  });
  it("should return true for www.google.com:3000/abc", () => {
    expect(isValidUrl("www.google.com:3000/abc")).toBe(true);
  });
  it("should return true for www.google.com:3000/foo?bar=hello", () => {
    expect(isValidUrl("www.google.com:3000/foo?bar=hello")).toBe(true);
  });
  it("should return true for www.google.com:3000/foo?bar=hello#abc", () => {
    expect(isValidUrl("www.google.com:3000/foo?bar=hello#abc")).toBe(true);
  });
  it("should return false for google.:3000", () => {
    expect(isValidUrl("google.:3000")).toBe(false);
  });
  it("should return false for IPv4 address", () => {
    expect(isValidUrl("192.168.1.1")).toBe(false);
  });
  it("should return false for IPv4 address with port", () => {
    expect(isValidUrl("192.168.1.1:3000")).toBe(false);
  });
  it("should return false for a valid IPv6 address", () => {
    expect(isValidUrl("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(false);
  });
});
