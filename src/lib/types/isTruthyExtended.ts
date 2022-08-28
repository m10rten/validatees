import { allTypes } from "./enums/type";
import isFalsyExtended from "./isFalsyExtended";

/**
 * @param value {string | number | symbol | Array<any> | object | null | undefined | boolean | Function | BigInt} any value
 * @functionality isTruthyExtended returns true if value is not falsy(see context)
 * @context refer to `isFalsyExtended`, anything else is considered 'truthy'
 * @returns {boolean} boolean
 * @module isTruthyExtended
 */
export function isTruthyExtended<T>(value: allTypes<T>): boolean {
  return false === isFalsyExtended(value);
}

export default isTruthyExtended;
