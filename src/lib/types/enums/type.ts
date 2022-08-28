// export enum TYPE {
//   STRING = "string",
//   NUMBER = "number",
//   BOOLEAN = "boolean",
//   OBJECT = "object",
//   ARRAY = "array",
//   UNDEFINED = "undefined",
//   NULL = "null",
//   FUNCTION = "function",
//   SYMBOL = "symbol",
//   DATE = "date",
//   REGEXP = "regexp",
//   ERROR = "error",
//   PROMISE = "promise",
//   BUFFER = "buffer",
//   BIGINT = "bigint",
//   ANY = "any",
//   UNKNOWN = "unknown",
//   NEVER = "never",
//   VOID = "void",
// }

export declare type allTypes<T> =
  | string
  | number
  | boolean
  | object
  | Array<T>
  | undefined
  | null
  | (() => T)
  | symbol
  | Date
  | RegExp
  | Record<string, T>
  | Error
  | Promise<T>
  | Buffer
  | bigint
  | any
  | unknown
  | never
  | void
  | T
  | Map<string, T>;
