import isFalsy from "./isFalsy";

export function isFalsyExtended(value: any): boolean {
  const check = isFalsy(value);
  if (true === check) {
    return true;
  } else if (Array.isArray(value)) {
    console.log(value);
    console.log(value.some(isFalsyExtended));

    return 0 === value.length || value.some(isFalsyExtended);
  } else if ("object" === typeof value) {
    return (
      0 === Object.keys(value).length ||
      0 === Object.values(value).length ||
      true === Object.keys(value).some((key) => true === isFalsyExtended(value[key])) ||
      Object.values(value).every(isFalsyExtended)
    );
  } else if ("number" === typeof value) {
    return Number.isNaN(value) || false === Number.isFinite(value) || Infinity === value || -Infinity === value;
  }
  return false;
}

export default isFalsyExtended;
