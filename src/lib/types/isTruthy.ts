import { allTypes } from "./enums/type";
import isFalsy from "./isFalsy";
/**
 * @param value {string | number | symbol | Array<any> | object | null | undefined | boolean | Function | BigInt} any value
 * @functionality isTruthy returns true if value is not falsy(see context)
 * @context refer to `isFalsy`, anything else is considered 'truthy'
 * @returns {boolean} boolean
 * @module isTruthy
 */
export function isTruthy<T>(value: allTypes<T>): boolean {
  return false === isFalsy(value);
}

export default isTruthy;
