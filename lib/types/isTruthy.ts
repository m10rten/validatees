import isFalsy from "./isFalsy";

/**
 * @param value {string | number | symbol | Array<any> | object | null | undefined | boolean | Function | BigInt | Promise<any>} any value
 * @functionality isTruthy returns true if value is not falsy(see context)
 * @context refer to `isFalsy`
 * @returns {boolean} boolean
 * @module isTruthy
 */
export function isTruthy(
  value: string | number | symbol | Array<any> | object | null | undefined | boolean | Function | BigInt | Promise<any>,
): boolean {
  return false === isFalsy(value);
}

export default isTruthy;
