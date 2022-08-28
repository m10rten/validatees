import { allTypes } from "../types/enums/type";

/**
 * Intensive task to compare two values with deep search.
 * {await} is needed to compare Promises.
 * @param val1 {any} any value
 * @param val2 {any} any value
 * @returns {boolean} true if val1 is a deep match with val2
 */
export function isDeepMatch<T>(val1: allTypes<T>, val2: allTypes<T>): boolean | Promise<boolean> {
  if (val1 === val2) {
    return true;
  } else if ("function" === typeof val1 && "function" === typeof val2) {
    return isDeepMatch(val1(), val2());
  } else if (val1 instanceof Promise && val2 instanceof Promise) {
    return (async () => {
      const result1 = await val1;
      const result2 = await val2;
      return isDeepMatch(result1, result2);
    })();
  } else if (val1 && val2 && typeof val1 === "object" && typeof val2 === "object") {
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (val1.length !== val2.length) {
        return false;
      }
      for (let i = 0; i < val1.length; i++) {
        if (!isDeepMatch(val1[i], val2[i])) {
          return false;
        }
      }
      return true;
    } else if (Array.isArray(val1) || Array.isArray(val2)) {
      return false;
    } else if (val1 instanceof Date && val2 instanceof Date) {
      return val1.getTime() === val2.getTime();
    } else if (val1 instanceof RegExp && val2 instanceof RegExp) {
      return val1.toString() === val2.toString();
    } else if (val1 instanceof Error && val2 instanceof Error) {
      return val1.message === val2.message;
    } else if (val1 instanceof Buffer && val2 instanceof Buffer) {
      return val1.equals(val2);
    } else if (val1 instanceof Object && val2 instanceof Object) {
      const keys1 = Object.keys(val1);
      const keys2 = Object.keys(val2);
      if (keys1.length !== keys2.length) {
        return false;
      }
      for (const key of keys1) {
        if (!keys2.includes(key)) {
          return false;
        }
      }
      for (const key of keys1) {
        if (!isDeepMatch(val1[key], val2[key])) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}

export default isDeepMatch;
