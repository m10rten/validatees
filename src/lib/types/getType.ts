import { allTypes, TYPE } from "./enums/type";
/**
 * If you want to do your own type checking, you can use this function to get the type of a value.
 * @param value {any} any value
 * @returns {TYPE} type of value
 */
export function getType<T>(value: allTypes<T>): TYPE {
  const type: typeof value = typeof value;
  if (TYPE.UNDEFINED === type) {
    return TYPE.UNDEFINED;
  } else if (null === value) {
    return TYPE.NULL;
  } else if (TYPE.STRING === type) {
    return TYPE.STRING;
  } else if (TYPE.NUMBER === type) {
    return TYPE.NUMBER;
  } else if (TYPE.BOOLEAN === type) {
    return TYPE.BOOLEAN;
  } else if (Array.isArray(value)) {
    return TYPE.ARRAY;
  } else if (value instanceof Date) {
    return TYPE.DATE;
  } else if (value instanceof RegExp) {
    return TYPE.REGEXP;
  } else if (value instanceof Error) {
    return TYPE.ERROR;
  } else if (value instanceof Promise) {
    return TYPE.PROMISE;
  } else if (value instanceof Buffer) {
    return TYPE.BUFFER;
  } else if (TYPE.FUNCTION === type) {
    return TYPE.FUNCTION;
  } else if (TYPE.OBJECT === type) {
    return TYPE.OBJECT;
  }
  return TYPE.UNKNOWN;
}

export default getType;
