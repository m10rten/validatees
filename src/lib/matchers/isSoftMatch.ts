export function isSoftMatch(val1: any, val2: any): boolean {
  if (val1 === val2) {
    return true;
  } else if ((null === val1 && undefined === val2) || (undefined === val1 && null === val2)) {
    return true;
  } else if ("boolean" === typeof val1 && "boolean" === typeof val2) {
    return val1 === val2;
  } else if ("string" === typeof val1 && "string" === typeof val2) {
    return val1.toString().toLowerCase() === val2.toString().toLowerCase();
  } else if ("number" === typeof val1 && "number" === typeof val2) {
    return val1 === val2;
  } else if (Array.isArray(val1) && Array.isArray(val2)) {
    if (0 === val1.length && 0 === val2.length) {
      return true;
    }
    return val1.length === val2.length && val1.every((val, i) => isSoftMatch(val, val2[i]));
  } else if (
    (Array.isArray(val1) && "object" === typeof val2 && false === Array.isArray(val2)) ||
    ("object" === typeof val1 && false === Array.isArray(val1) && Array.isArray(val2))
  ) {
    console.log("isSoftMatch:", val1, val2);

    return false;
  } else if ("object" === typeof val1 && "object" === typeof val2) {
    console.log(val1, val2);

    return (
      Object.keys(val1).length === Object.keys(val2).length &&
      Object.keys(val1).every((key) => isSoftMatch(val1[key], val2[key]))
    );
  }
  return false;
}

export default isSoftMatch;
