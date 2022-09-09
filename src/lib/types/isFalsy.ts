import { allTypes } from "./enums/type";

/**
 * @param value {string | number | symbol | Array<any> | object | null | undefined | boolean | Function | BigInt} any value
 * @functionality isFalsy returns true if value is falsy(see context)
 * @context `null`, `undefined`, `NaN`, `0`, `""`, `false`, `0n`(is `-0n`), `-0`,  `Symbol()`, `BigInt(0)` <<< 'falsy';
 * @example
 * whenever a value is higher then MAX_SAFE_INTEGER or lower then MIN_SAFE_INTEGER, it is considered 'falsy'
 * // true:
 * isFalsy(null) && isFalsy([]) && isFalsy({}) && isFalsy([false])
 * // false:
 * isFalsy(1) || isFalsy("test")
 * @returns {boolean} boolean
 * @module isFalsy
 */

export function isFalsy<T>(value: allTypes<T>): value is Falsy {
  if ("undefined" === typeof value || undefined === typeof value || value === null || null === typeof value) {
    return true;
  } else if ("bigint" === typeof value) {
    return BigInt(Number.MAX_SAFE_INTEGER) < value || BigInt(Number.MIN_SAFE_INTEGER) > value;
  } else if ("number" === typeof value) {
    return (
      0 === value ||
      Object.is(value, -0) ||
      Number.isNaN(value) ||
      Number.MAX_SAFE_INTEGER < value ||
      Number.MIN_SAFE_INTEGER > value
    );
  } else if ("string" === typeof value) {
    return (
      "" === value ||
      `` === value ||
      " " === value.trim() ||
      "" === value.trim() ||
      0 >= value.length ||
      0 >= value.trim().length ||
      "0" === value.trim() ||
      "0" === value
    );
  } else if ("boolean" === typeof value) {
    return false === value;
  } else if ("function" === typeof value) {
    return isFalsy(value());
  }
  return false;
}

export type Falsy = null | undefined | 0 | "" | false | -0;

export default isFalsy;
