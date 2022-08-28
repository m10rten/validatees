import isBoolean from "../../src/lib/types/isBoolean";

describe("isBoolean", () => {
    it("should return true for true", () => {
        expect(isBoolean(true)).toBe(true);
    });
    it("should return true for false", () => {
        expect(isBoolean(false)).toBe(true);
    });
    it("should return true for false", () => {
        expect(isBoolean(false)).toBe(true);
    });
    it("should return true for new Boolean(true)", () => {
        expect(isBoolean(new Boolean(true))).toBe(true);
    });
    it("should return true for new Boolean(false)", () => {
        expect(isBoolean(new Boolean(false))).toBe(true);
    });
    it("should return true for Boolean(true)", () => {
        expect(isBoolean(Boolean(true))).toBe(true);
    });
    it("should return true for Boolean(false)", () => {
        expect(isBoolean(Boolean(false))).toBe(true);
    });
    it("should return true for Boolean()", () => {
        expect(isBoolean(new Boolean())).toBe(true);
    });
    it("should return true for Boolean('true')", () => {
        expect(isBoolean(new Boolean('true'))).toBe(true);
    });
    it("should return false for 'true'", () => {
        expect(isBoolean('true')).toBe(false);
    });
    it("should return false for 'false'", () => {
        expect(isBoolean('false')).toBe(false);
    });
    it("should return false for [new Boolean(true)]", () => {
        expect(isBoolean([new Boolean(true)])).toBe(false);
    });
    it("should return false for [new Boolean(true)]", () => {
        expect(isBoolean([new Boolean(false)])).toBe(false);
    });
    it("should return false for ''", () => {
        expect(isBoolean("")).toBe(false);
    });
    it("should return false for number", () => {
        expect(isBoolean(1)).toBe(false);
    });
    it("should return false for new Error()", () => {
        expect(isBoolean(new Error())).toBe(false);
    });
});
