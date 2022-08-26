export function isString(value: any): boolean {
  return (
    "string" === typeof value ||
    value instanceof String ||
    String === value.constructor ||
    "[object String]" === Object.prototype.toString.call(value)
  );
}

export default isString;
