import isTruthy from "../../src/lib/types/isTruthy";
describe("isTruthy", () => {
  it("should return true for 1", () => {
    expect(isTruthy(1)).toBe(true);
  });
  it("should return true for 'test'", () => {
    expect(isTruthy("test")).toBe(true);
  });
  it("should return true for true", () => {
    expect(isTruthy(true)).toBe(true);
  });
  it("should return true for () => 1", () => {
    expect(isTruthy(() => 1)).toBe(true);
  });
  it("should return true for () => 'test'", () => {
    expect(isTruthy(() => "test")).toBe(true);
  });
  it("should return true for () => true", () => {
    expect(isTruthy(() => true)).toBe(true);
  });
  it("should return true for [true]", () => {
    expect(isTruthy([true])).toBe(true);
  });
  it("should return true for [1]", () => {
    expect(isTruthy([1])).toBe(true);
  });
  it("should return true for ['test']", () => {
    expect(isTruthy(["test"])).toBe(true);
  });
  it("should return true for { a: true }", () => {
    expect(isTruthy({ a: true })).toBe(true);
  });
  it("should return true for { a: 1 }", () => {
    expect(isTruthy({ a: 1 })).toBe(true);
  });
  it("should return true for { a: 'test' }", () => {
    expect(isTruthy({ a: "test" })).toBe(true);
  });
  it("should return true for { a: () => true }", () => {
    expect(isTruthy({ a: () => true })).toBe(true);
  });
  it("should return true for { a: () => 1 }", () => {
    expect(isTruthy({ a: () => 1 })).toBe(true);
  });
  it("should return true for { a: () => 'test' }", () => {
    expect(isTruthy({ a: () => "test" })).toBe(true);
  });
  it("should return true for { a: () => 0 }", () => {
    expect(isTruthy({ a: () => 0 })).toBe(true);
  });
});
