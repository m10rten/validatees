import isFalsy from "./isFalsy";

export function isFalsyExtended(value: any): boolean {
  if (isFalsy(value)) {
    return true;
  } else if (Array.isArray(value)) {
    return 0 === value.length || value.some(isFalsyExtended);
  } else if ("function" === typeof value) {
    return isFalsy(value());
  } else if ("object" === typeof value) {
    return (
      0 === Object.keys(value).length ||
      0 === Object.values(value).length ||
      true === Object.keys(value).some((key) => true === isFalsy(value[key])) ||
      true === Object.values(value).some((val: any) => true === isFalsy(val)) // check only ifFalsy, else you will iterate over every entry.
    );
  } else if ("number" === typeof value) {
    return Number.isNaN(value) || false === Number.isFinite(value) || Infinity === value || -Infinity === value;
  }
  return false;
}

export default isFalsyExtended;
