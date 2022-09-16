/**
 * check if a value is a Date instance

 * does not check if the value is a valid date, to do that use [isValidDate](../input/isValidDate.ts).
 */
export function isDate(value: any): value is Date {
  return value instanceof Date || Object.prototype.toString.call(value) === "[object Date]";
}

export default isDate;
