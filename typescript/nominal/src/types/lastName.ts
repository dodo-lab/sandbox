import { assertFillString, FillString } from './fillString';
import { Nominal } from './nominal';

export type LastName = Nominal<FillString, 'LastName'>;

export function lastName(v: unknown): LastName {
  assertFillString<LastName>(v);
  return v;
}
