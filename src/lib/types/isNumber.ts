export function isNumber(value: any): boolean {
  return (
    (typeof value === "number" ||
      value instanceof Number ||
      Number === value.constructor ||
      "[object Number]" === Object.prototype.toString.call(value)) &&
    false === Number.isNaN(value)
  );
}

export default isNumber;
