import isString from "../types/isString";
import { allTypes } from "../types/enums/type";

export function isValidPassword<T>(
  value: allTypes<T>,
  options?: { minLength?: number; numbers?: number; specialChars?: number },
): boolean {
  const { minLength, numbers, specialChars } = {
    minLength: options?.minLength ?? 8,
    numbers: options?.numbers ?? 1,
    specialChars: options?.specialChars ?? 1,
  };
  if (null === value || undefined === value || "" === value) {
    return false;
  } else if (false === isString(value)) {
    throw new Error("Invalid argument");
  } else if (value.length < minLength) {
    return false;
  }
  const regex = new RegExp(
    `^(?=.*[0-9]{${numbers},})(?=.*[!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?]{${specialChars},}).*$`,
  );
  return regex.test(value);
}

export default isValidPassword;
