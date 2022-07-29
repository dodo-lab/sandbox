import { assertFillString } from './fillString';
import { Nominal } from './nominal';

export type LastName = Nominal<string, 'LastName'>;

export function lastName(v: unknown): LastName {
  assertFillString<LastName>(v);
  return v;
}
