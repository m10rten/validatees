import { TYPE } from "./enums/type";

export function isBoolean(value: any): boolean {
  return (
    TYPE.BOOLEAN === typeof value ||
    value instanceof Boolean ||
    Boolean === value.constructor ||
    "[object Boolean]" === Object.prototype.toString.call(value)
  );
}

export default isBoolean;
