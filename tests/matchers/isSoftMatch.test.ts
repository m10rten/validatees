import isSoftMatch from "../../src/lib/matchers/isSoftMatch";
describe("isSoftMatch", () => {
  it("should return true for 'a' and 'a'", () => {
    expect(isSoftMatch("a", "a")).toBe(true);
  });
  it("should return true for 'a' and 'A'", () => {
    expect(isSoftMatch("a", "A")).toBe(true);
  });
  it("should return true for 1 and 1", () => {
    expect(isSoftMatch(1, 1)).toBe(true);
  });
  it("should return true for 1 and 1.0", () => {
    expect(isSoftMatch(1, 1.0)).toBe(true);
  });
  it("should return true for undefined and undefined", () => {
    expect(isSoftMatch(undefined, undefined)).toBe(true);
  });
  it("should return true for null and null", () => {
    expect(isSoftMatch(null, null)).toBe(true);
  });
  it("should return true for true and true", () => {
    expect(isSoftMatch(true, true)).toBe(true);
  });
  it("should return true for false and false", () => {
    expect(isSoftMatch(false, false)).toBe(true);
  });
  it("should return false for 'a' and ['a']", () => {
    expect(isSoftMatch("a", ["a"])).toBe(false);
  });
  it("should return false for 'a' and ['a', 'b']", () => {
    expect(isSoftMatch("a", ["a", "b"])).toBe(false);
  });
  it("should return true for ['a', 'b'] and ['a', 'b']", () => {
    expect(isSoftMatch(["a", "b"], ["a", "b"])).toBe(true);
  });
  it("should return false for [] and {}", () => {
    expect(isSoftMatch([], {})).toBe(false);
  });
  it("should return true for [] and []", () => {
    expect(isSoftMatch([], [])).toBe(true);
  });
  it("should return true for {} and {}", () => {
    expect(isSoftMatch({}, {})).toBe(true);
  });
  it("should return false for {} and {a:1}", () => {
    expect(isSoftMatch({}, { a: 1 })).toBe(false);
  });
  it("should return true for {a:1} and {a:1}", () => {
    expect(isSoftMatch({ a: 1 }, { a: 1 })).toBe(true);
  });
  it("should return false for {a:1} and {a:2}", () => {
    expect(isSoftMatch({ a: 1 }, { a: 2 })).toBe(false);
  });
  it("should return true for {a:1, b:2} and {a:1, b:2}", () => {
    expect(isSoftMatch({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  });
  it("should return false for {a:1, b:2} and {a:1, b:3}", () => {
    expect(isSoftMatch({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
  });
  it("should return true for [undefined, null] and [null, undefined]", () => {
    expect(isSoftMatch([undefined, null], [null, undefined])).toBe(true);
  });
  it("should return true for [null, undefined] and [undefined, null]", () => {
    expect(isSoftMatch([null, undefined], [undefined, null])).toBe(true);
  });
  it("should return true for [null, undefined] and [null, null]", () => {
    expect(isSoftMatch([null, undefined], [null, null])).toBe(true);
  });
  it("should return true for [null, undefined] and [undefined, undefined]", () => {
    expect(isSoftMatch([null, undefined], [undefined, undefined])).toBe(true);
  });
  it("should return false for 'a' and 1", () => {
    expect(isSoftMatch("a", 1)).toBe(false);
  });
  it("should return false for 'a' and 1.0", () => {
    expect(isSoftMatch("a", 1.0)).toBe(false);
  });
  it("should return false for 'a' and true", () => {
    expect(isSoftMatch("a", true)).toBe(false);
  });
  it("should return false for 'a' and false", () => {
    expect(isSoftMatch("a", false)).toBe(false);
  });
  it("should return false for true and false", () => {
    expect(isSoftMatch(true, false)).toBe(false);
  });
  it("should return false for ClassA and ClassB", () => {
    class ClassA {
      public a: string = "a";
    }
    class ClassB {
      public b: string = "b";
    }
    expect(isSoftMatch(new ClassA(), new ClassB())).toBe(false);
  });
  it("should return true for ClassA and ClassB without properties", () => {
    class ClassA {}
    class ClassB {}
    expect(isSoftMatch(new ClassA(), new ClassB())).toBe(true);
  });
});
