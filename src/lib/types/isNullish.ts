import { allTypes } from "./enums/type";

export function isNullish<T>(value: allTypes<T>): value is null | undefined {
  return null === value || undefined === value;
}

export default isNullish;
