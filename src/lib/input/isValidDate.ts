export function isValidDate(date: any): boolean {
  if (date instanceof Date) {
    const dateString = new Date(date).toDateString();
    return dateString !== "Invalid Date" && false === isNaN(Date.parse(dateString));
  } else if (typeof date === "string") {
    const parsedDate = Date.parse(date);
    const numDate = Number.parseInt(date);
    if (0 > numDate) {
      return false;
    }
    return (
      false === isNaN(parsedDate) &&
      (parsedDate !== null || parsedDate !== undefined || parsedDate !== "" || parsedDate !== 0)
    );
  } else if (typeof date === "number") {
    if (0 > date) {
      return false;
    }
    date = new Date(date);
    if (isNaN(date.getTime())) {
      return false;
    }
  }
  return false;
}

export default isValidDate;
