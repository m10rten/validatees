import isUnique from "../../src/lib/matchers/isUnique";
describe("isUnique", () => {
  it("should return true if value is unique in array", () => {
    expect(isUnique([1, 2, 3], 4)).toBe(true);
  });
  it("should return false if value is not unique in array", () => {
    expect(isUnique([1, 2, 3], 3)).toBe(false);
  });
  it("should return true if value is unique in array of objects", () => {
    expect(isUnique([{ a: 1 }, { a: 2 }, { a: 3 }], { a: 4 })).toBe(true);
  });
  it("should return false if value is not unique in array of objects", () => {
    expect(isUnique([{ a: 1 }, { a: 2 }, { a: 3 }], { a: 3 })).toBe(false);
  });
  it("should return true if value is unique in array of arrays", () => {
    expect(isUnique([[1], [2], [3]], [4])).toBe(true);
  });
  it("should return false if value is not unique in array of arrays", () => {
    expect(isUnique([[1], [2], [3]], [3])).toBe(false);
  });
  it("should return true if value is unique within an object", () => {
    expect(isUnique({ a: 1, b: 2, c: 3 }, { d: 4 })).toBe(true);
  });
  it("should return false if value is not unique within an object", () => {
    expect(isUnique({ a: 1, b: 2, c: 3 }, { c: 3 })).toBe(false);
  });
  it("should return false if value is not unique within an object", () => {
    expect(isUnique({ a: 1, b: 2, c: 3 }, { c: 9 })).toBe(false);
  });
  it("should return true if value is unique within an object of objects", () => {
    expect(isUnique({ a: { a: 1 }, b: { b: 2 }, c: { c: 3 } }, { d: { d: 4 } })).toBe(true);
  });
  it("should return false if value is not unique within an object of objects", () => {
    expect(isUnique({ a: { a: 1 }, b: { b: 2 }, c: { c: 3 } }, { c: { c: 3 } })).toBe(false);
  });
  it("should throw an error if group is not an array or object", () => {
    expect(() => isUnique(1 as any, 2)).toThrow("isUnique expects an array or object to match against");
  });
  it("should throw an error if group is null", () => {
    expect(() => isUnique(null as any, 2)).toThrow("isUnique expects an array or object to match against");
  });
  it("should throw an error if group is undefined", () => {
    expect(() => isUnique(undefined as any, 2)).toThrow("isUnique expects an array or object to match against");
  });
  it("should throw an error if group is a string", () => {
    expect(() => isUnique("foo" as any, 2)).toThrow("isUnique expects an array or object to match against");
  });
  it("should throw an error if group is a boolean", () => {
    expect(() => isUnique(true as any, 2)).toThrow("isUnique expects an array or object to match against");
  });
  it("should throw an error if group is a function", () => {
    expect(() => isUnique(() => {}, 2)).toThrow("isUnique expects an array or object to match against");
  });
  it("should throw an error if the value is not the same type as the group", () => {
    expect(() => isUnique([1, 2, 3], "foo" as any)).toThrow(
      "isUnique expects the value to be the same type as the group",
    );
  });
  it("should throw an error if the value is not the same type as the group", () => {
    expect(() => isUnique({ a: 1 }, "bar" as any)).toThrow(
      "isUnique expects the value to be the same type as the group",
    );
  });
  it("should throw an error if the value and the group are not desireable types", () => {
    expect(() => isUnique(1 as any, true as any)).toThrow("isUnique expects an array or object to match against");
  });
});
