import isFalsy from "../types/isFalsy";
import isDeepMatch from "./isDeepMatch";
import isSoftMatch from "./isSoftMatch";

export function isUnique<T>(group: Array<T> | Record<any, any>, value: T): boolean {
  if (isFalsy(group)) {
    throw new Error("isUnique expects an array or object to match against");
  } else if (Array.isArray(group) && typeof value !== typeof group[0]) {
    throw new Error("isUnique expects the value to be the same type as the group");
  } else if (
    "object" === typeof group &&
    false === Array.isArray(group) &&
    typeof value !== typeof { [Object.keys(group)[0]]: [Object.values(group)[0]] }
  ) {
    throw new Error("isUnique expects the value to be the same type as the group");
  } else if (Array.isArray(group)) {
    return group.every((item: T) => false === isDeepMatch(item, value));
  } else if ("object" === typeof group) {
    if ("object" === typeof value) {
      const hasMatchingKey: boolean = Object.keys(group).some((key: any) =>
        isSoftMatch(key, Object.keys(value as Record<any, any>)[0]),
      );
      if (hasMatchingKey) {
        return false;
      }
    }
    return Object.keys(group).every(
      (key: string) =>
        false === isDeepMatch(key, value) &&
        false === isDeepMatch(group[key], value) &&
        false === isDeepMatch({ [key]: group[key] }, value),
    );
  } else {
    throw new Error("isUnique expects an array or object to match against");
  }
}

export default isUnique;
