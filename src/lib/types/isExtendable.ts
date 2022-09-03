import { allTypes } from "./enums/type";

export function isExtendable<T>(value: allTypes<T>): boolean {
  if (
    (Array.isArray(value) || "object" === typeof value) &&
    null !== value &&
    undefined !== value &&
    "undefined" !== typeof value
  ) {
    return false === Object.isFrozen(value) && false === Object.isSealed(value) && true === Object.isExtensible(value);
  }
  throw new Error("Invalid arguments");
}

export default isExtendable;
