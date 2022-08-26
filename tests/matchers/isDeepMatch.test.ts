import isDeepMatch from "../../src/lib/matchers/isDeepMatch";
describe("isDeepMatch", () => {
  it("should return true for 1 and 1", () => {
    expect(isDeepMatch(1, 1)).toBe(true);
  });
  it("should return true for 1 and 1.0", () => {
    expect(isDeepMatch(1, 1.0)).toBe(true);
  });
  it("should return true for 'foo' and 'foo'", () => {
    expect(isDeepMatch("foo", "foo")).toBe(true);
  });
  it("should return true for true and true", () => {
    expect(isDeepMatch(true, true)).toBe(true);
  });
  it("should return true for false and false", () => {
    expect(isDeepMatch(false, false)).toBe(true);
  });
  it("should return true for null and null", () => {
    expect(isDeepMatch(null, null)).toBe(true);
  });
  it("should return true for undefined and undefined", () => {
    expect(isDeepMatch(undefined, undefined)).toBe(true);
  });
  it("should return true for [] and []", () => {
    expect(isDeepMatch([], [])).toBe(true);
  });
  it("should return true for [1] and [1]", () => {
    expect(isDeepMatch([1], [1])).toBe(true);
  });
  it("should return true for [1, 2] and [1, 2]", () => {
    expect(isDeepMatch([1, 2], [1, 2])).toBe(true);
  });
  it("should return false for [1, 2] and [1, 2, 3]", () => {
    expect(isDeepMatch([1, 2], [1, 2, 3])).toBe(false);
  });
  it("should return false for [1, 2, 3] and [1, 2]", () => {
    expect(isDeepMatch([1, 2, 3], [1, 2])).toBe(false);
  });
  it("should return true for [1, 2, 3] and [1, 2, 3]", () => {
    expect(isDeepMatch([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  it("should return false for [] and {}", () => {
    expect(isDeepMatch([], {})).toBe(false);
  });
  it("should return false for {} and []", () => {
    expect(isDeepMatch({}, [])).toBe(false);
  });
  it("should return true for {} and {}", () => {
    expect(isDeepMatch({}, {})).toBe(true);
  });
  it("should return true for {a: 1} and {a: 1}", () => {
    expect(isDeepMatch({ a: 1 }, { a: 1 })).toBe(true);
  });
  it("should return true for {a: 1, b: 2} and {a: 1, b: 2}", () => {
    expect(isDeepMatch({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
  });
  it("should return false for {a: 1, b: 2} and {a: 1, b: 3}", () => {
    expect(isDeepMatch({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
  });
  it("should return false for {a: 1, b: 2} and {a: 1, b: 2, c: 3}", () => {
    expect(isDeepMatch({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toBe(false);
  });
  it("should return false for [1, 2, 3] and {0: 1, 1: 2, 2: 3}", () => {
    expect(isDeepMatch([1, 2, 3], { 0: 1, 1: 2, 2: 3 })).toBe(false);
  });
  it("should return false for new Error('foo') and new Error('foo')", () => {
    expect(isDeepMatch(new Error("foo"), new Error("bar"))).toBe(false);
  });
  it("should return true for new Error('foo') and new Error('foo')", () => {
    expect(isDeepMatch(new Error("foo"), new Error("foo"))).toBe(true);
  });
  it("should return true for new Date(0) and new Date(0)", () => {
    expect(isDeepMatch(new Date(0), new Date(0))).toBe(true);
  });
  it("should return false for new Date(0) and new Date(1)", () => {
    expect(isDeepMatch(new Date(0), new Date(1))).toBe(false);
  });
  it("should return true for /foo/ and /foo/", () => {
    expect(isDeepMatch(/foo/, /foo/)).toBe(true);
  });
  it("should return false for /foo/ and /bar/", () => {
    expect(isDeepMatch(/foo/, /bar/)).toBe(false);
  });
  it("should return true for deep nested objects", () => {
    expect(isDeepMatch({ a: 1, b: { c: 2, d: { e: 3 } } }, { a: 1, b: { c: 2, d: { e: 3 } } })).toBe(true);
  });
  it("should return true for deep nested objects within an array", () => {
    expect(isDeepMatch([{ a: 1, b: { c: 2, d: { e: 3 } } }], [{ a: 1, b: { c: 2, d: { e: 3 } } }])).toBe(true);
  });
  it("should return false for deep nested objects within an array that don't match", () => {
    expect(isDeepMatch([{ a: 1, b: { c: 2, d: { e: 3 } } }], [{ a: 1, b: { c: 2, d: { e: 4 } } }])).toBe(false);
  });
  it("should return false for deep nested objects within an array that don't match", () => {
    expect(isDeepMatch([{ a: 1, b: { c: 2, d: { e: 3 } } }], [{ a: 1, b: { c: 2, d: { f: 3 } } }])).toBe(false);
  });
  it("should return true for objects with an array that matches", () => {
    expect(isDeepMatch({ a: [1, 2, 3] }, { a: [1, 2, 3] })).toBe(true);
  });
  it("should return false for objects with an array that don't match", () => {
    expect(isDeepMatch({ a: [1, 2, 3] }, { a: [1, 2, 4] })).toBe(false);
  });
  it("should return true for Promises that resolve to the same value", async () => {
    expect(await isDeepMatch(Promise.resolve(1), Promise.resolve(1))).toBe(true); // notice the await
  });
  it("should return false for Promises that resolve to different values", async () => {
    expect(await isDeepMatch(Promise.resolve(1), Promise.resolve(2))).toBe(false); // notice the await
  });
  it("should return true for functions that return the same value", async () => {
    expect(
      isDeepMatch(
        () => 1,
        () => 1,
      ),
    ).toBe(true);
  });
  it("should return false for functions that return different values", async () => {
    expect(
      isDeepMatch(
        () => 1,
        () => 2,
      ),
    ).toBe(false);
  });
  it("should return true for a Buffer and a Buffer with the same value", () => {
    expect(isDeepMatch(Buffer.from("foo"), Buffer.from("foo"))).toBe(true);
  });
  it("should return false for a Buffer and a Buffer with a different value", () => {
    expect(isDeepMatch(Buffer.from("foo"), Buffer.from("bar"))).toBe(false);
  });
});
