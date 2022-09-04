import isString from "../types/isString";
import { allTypes } from "../types/enums/type";

export function isValidPassword<T>(
  value: allTypes<T>,
  options?: { minLength?: number; numbers?: number; specialChars?: number; maxLength?: number },
): boolean {
  const { minLength, numbers, specialChars, maxLength } = {
    minLength: options?.minLength ?? 8,
    maxLength: options?.maxLength ?? 32,
    numbers: options?.numbers ?? 1,
    specialChars: options?.specialChars ?? 1,
  };
  if (null === value || undefined === value || "" === value) {
    return false;
  } else if (false === isString(value)) {
    throw new Error("Invalid argument");
  } else if (value.length < minLength || value.length > maxLength) {
    return false;
  }
  const regex = new RegExp(
    `^(?=.*[0-9]{${numbers},})(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]{${specialChars},}).*$`,
  );
  return regex.test(value);
}

export default isValidPassword;
