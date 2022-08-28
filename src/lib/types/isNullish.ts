export function isNullish(value: any): boolean {
  return null === value || undefined === value || "undefined" === typeof value || null === typeof value;
}

export default isNullish;
