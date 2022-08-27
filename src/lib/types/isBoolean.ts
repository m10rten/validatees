import { TYPE, types } from "./enums/type";

export function isBoolean<T>(value: types<T>): boolean {
  return (
    TYPE.BOOLEAN === typeof value ||
    value instanceof Boolean ||
    Boolean === value?.constructor ||
    "[object Boolean]" === Object.prototype.toString.call(value)
  );
}

export default isBoolean;
