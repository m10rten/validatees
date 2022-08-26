export function isString(value: any): boolean {
  console.log("[object String]" === Object.prototype.toString.call(value));
  console.log(String === value.constructor);

  return (
    "string" === typeof value ||
    value instanceof String ||
    String === value.constructor ||
    "[object String]" === Object.prototype.toString.call(value)
  );
}

export default isString;
