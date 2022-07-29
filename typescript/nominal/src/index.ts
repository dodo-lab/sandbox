type Nominal<T, U extends string> = T & { __brand: U };

function isString(v: unknown): v is string {
  return typeof v === 'string';
}

function assertString(v: unknown): asserts v is string {
  if (!isString(v)) {
    throw new Error('Should be string');
  }
}

type FillString = Nominal<string, 'FillString'>;

function isFillString(v: unknown): v is FillString {
  return isString(v) && v !== '';
}

function assertFillString(v: unknown): asserts v is FillString {
  if (!isFillString(v)) {
    throw new Error('Should be not empty string');
  }
}

function fillString(v: unknown): FillString {
  assertFillString(v);
  return v;
}

const fs = fillString('a');
const s = 'a';

console.log('FillString', fs);
console.log('string', s);

if (s === fs) {
  console.log('s === fs');
}

try {
  const fsError = fillString('');
} catch (e) {
  console.log('fillString error');
}
