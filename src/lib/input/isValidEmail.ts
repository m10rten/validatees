import isString from "../types/isString";

export function isValidEmail(email: string): boolean {
  if (null === email || undefined === email || "" === email) {
    return false;
  } else if (false === isString(email)) {
    throw new Error("Invalid argument");
  } else if (email.length > 254) {
    return false;
  }
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
}

export default isValidEmail;
