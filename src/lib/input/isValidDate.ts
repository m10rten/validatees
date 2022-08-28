import isFalsy from "../types/isFalsy";
import { allTypes } from "../types/enums/type";

export function isValidDate<T>(date: allTypes<T>): boolean {
  if (date instanceof Date) {
    const dateString = new Date(date).toDateString();
    return dateString !== "Invalid Date" && false === isNaN(Date.parse(dateString));
  } else if (typeof date === "string") {
    const parsedDate = Date.parse(date);
    const numDate = Number.parseInt(date);
    if (0 > numDate) {
      return false;
    }
    return !isFalsy(parsedDate);
  } else if (typeof date === "number") {
    if (0 > date) {
      return false;
    }
    date = new Date(date);
    return !isFalsy(date.getTime()) && !isFalsy(date);
  }
  return false;
}

export default isValidDate;
