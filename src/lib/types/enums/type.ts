export type allTypes<T = unknown> =
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
