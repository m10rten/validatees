import isString from "../types/isString";
import { allTypes } from "../types/enums/type";

// write jsdoc comments for this function
/**
 *
 * @param value any
 * @returns {boolean} boolean
 *
 * put in a string based URL and it will return true or false if it is a valid URL.
 *
 * IPv4 and IPv6 addresses are not supported.
 */
export function isValidUrl<T>(value: allTypes<T>): boolean {
  if (null === value || undefined === value || "" === value) {
    return false;
  } else if (false === isString(value)) {
    throw new Error("Invalid argument");
  }
  const url = new RegExp(
    "^((ft|htt)ps?:\\/\\/)?(www\\.)?([a-zA-Z0-9]+([\\-\\.]{1}[a-zA-Z0-9]+)*\\.[a-zA-Z]{2,5}|localhost)(:[0-9]{1,5})?(\\/.*)?$",
  );

  return url.test(value);
}

export default isValidUrl;
