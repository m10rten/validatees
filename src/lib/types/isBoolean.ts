import { allTypes } from "./enums/type";

export function isBoolean<T>(value: allTypes<T>): boolean {
  return (
    "boolean" === typeof value ||
    value instanceof Boolean ||
    Boolean === value.constructor ||
    "[object Boolean]" === Object.prototype.toString.call(value)
  );
}

export default isBoolean;
