export function isRegExp(value: any): value is RegExp {
  return (
    Object.prototype.toString.call(value) === "[object RegExp]" ||
    value instanceof RegExp ||
    "[object VRegExp]" === Object.prototype.toString.call(value) ||
    "[object RegExp]" === Object.prototype.toString.call(value)
  );
}

export default isRegExp;
