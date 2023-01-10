import { Nominal } from './nominal';
import { isString } from './string';

export type FillString = Nominal<string, 'FillString'>;

export function isFillString(v: unknown): v is FillString {
  return isString(v) && v !== '';
}

export function assertFillString<T = FillString>(v: unknown): asserts v is T {
  if (!isFillString(v)) {
    throw new Error('Should be not empty string');
  }
}

export function fillString(v: unknown): FillString {
  assertFillString(v);
  return v;
}
