import { allTypes } from "./enums/type";

export function isNullish<T>(value: allTypes<T>): boolean {
  return null === value || undefined === value;
}

export default isNullish;
