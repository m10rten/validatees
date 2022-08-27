import { types } from "./enums/type";

export function isString<T>(value: types<T>): boolean {
  return (
    "string" === typeof value ||
    value instanceof String ||
    String === value?.constructor ||
    "[object String]" === Object.prototype.toString.call(value)
  );
}

export default isString;
