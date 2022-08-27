export enum TYPE {
  STRING = "string",
  NUMBER = "number",
  BOOLEAN = "boolean",
  OBJECT = "object",
  ARRAY = "array",
  UNDEFINED = "undefined",
  NULL = "null",
  FUNCTION = "function",
  SYMBOL = "symbol",
  DATE = "date",
  REGEXP = "regexp",
  ERROR = "error",
  PROMISE = "promise",
  BUFFER = "buffer",
  BIGINT = "bigint",
  ANY = "any",
  UNKNOWN = "unknown",
  NEVER = "never",
  VOID = "void",
}
export type types<T = any> =
  | string
  | number
  | symbol
  | Array<T>
  | object
  | null
  | undefined
  | boolean
  | (() => T)
  | bigint
  | Date
  | RegExp;
