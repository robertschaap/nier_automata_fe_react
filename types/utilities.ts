/**
 * Takes a type `T` and returns a union type of its keys. Syntactic sugar for `keyof T`.
 */
export type Keys<T> = keyof T;

/**
 * Takes a type `T` and returns a union type of its values. Syntactic sugar for `T[keyof T]`
 */
export type Values<T> = T[keyof T];
