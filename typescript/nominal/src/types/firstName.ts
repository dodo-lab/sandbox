import { assertFillString, FillString } from './fillString';
import { Nominal } from './nominal';

export type FirstName = Nominal<FillString, 'FirstName'>;

export function firstName(v: unknown): FirstName {
  assertFillString<FirstName>(v);
  return v;
}
