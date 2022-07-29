import { assertFillString } from './fillString';
import { Nominal } from './nominal';

export type FirstName = Nominal<string, 'FirstName'>;

export function firstName(v: unknown): FirstName {
  assertFillString<FirstName>(v);
  return v;
}
