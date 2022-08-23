/**
 * @param value {string | number | symbol | Array<any> | object | null | undefined | boolean | Function | BigInt} any value
 * @functionality isTruthy returns true if value is falsy(see context)
 * @context `null`, `undefined`, `NaN`, `0`, `""`, `false`, `0n`, `-0`, `-0n`, `Symbol()`, `BigInt(0)`, `{}`, `[]` <<< all of these are 'falsy'
 * @example
 * // false:
 * isTruthy(null) && isTruthy([]) && isTruthy({}) && isTruthy([false])
 * // true:
 * isTruthy(1) || isTruthy("test")
 * @returns {boolean} boolean
 * @module isTruthy
 */
export function isTruthy(
  value: string | number | symbol | Array<any> | object | null | undefined | boolean | Function | BigInt,
): boolean {
  if ("undefined" === typeof value || undefined === typeof value || value === null || null === typeof value) {
    return true;
  } else if ("number" === typeof value) {
    return (
      0 !== value &&
      -0 !== value &&
      Number.isNaN(value) &&
      Number.MAX_SAFE_INTEGER > value &&
      Number.MIN_SAFE_INTEGER < value &&
      Number.isFinite(value) &&
      value % 1 === 0
    );
  } else if ("bigint" === typeof value) {
    return (
      0n !== value &&
      -0n !== value &&
      BigInt(Number.MAX_SAFE_INTEGER) > value &&
      BigInt(Number.MIN_SAFE_INTEGER) < value
    );
  } else if ("string" === typeof value) {
    return (
      "" !== value &&
      `` !== value &&
      " " !== value.trim() &&
      "" !== value.trim() &&
      0 <= value.length &&
      0 <= value.trim().length &&
      "0" !== value.trim()
    );
  } else if ("symbol" === typeof value) {
    return (
      Symbol.for("") !== value &&
      "" !== value.toString() &&
      " " !== value.toString() &&
      "0" !== value.toString() &&
      "0" !== value.toString() &&
      "" !== value.toString().trim()
    );
  } else if (Array.isArray(value)) {
    return 0 !== value.length && 0 !== value.filter((v) => isTruthy(v)).length && isTruthy(value[0]);
  } else if ("object" === typeof value) {
    return (
      0 !== Object.keys(value).length &&
      0 !== Object.values(value).length &&
      isTruthy(Object.values(value)[0]) &&
      isTruthy(Object.keys(value)[0])
    );
  } else if ("boolean" === typeof value) {
    return true === value;
  } else if ("function" === typeof value) {
    return isTruthy(value());
  }
  return true;
}

export default isTruthy;
