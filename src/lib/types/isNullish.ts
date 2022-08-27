import { types } from "./enums/type";

export function isNullish(value: types): boolean {
  return null === value || undefined === value;
}

export default isNullish;
