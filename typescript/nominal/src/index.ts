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

function assertFillString<T = FillString>(v: unknown): asserts v is T {
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

type FirstName = Nominal<string, 'FirstName'>;
type LastName = Nominal<string, 'LastName'>;

function firstName(v: unknown): FirstName {
  assertFillString<FirstName>(v);
  return v;
}
function lastName(v: unknown): LastName {
  assertFillString<LastName>(v);
  return v;
}

function outputName(firstName: FirstName, lastName: LastName) {
  console.log(`${firstName} ${lastName}`);
}

const first = firstName('Bob');
const last = lastName('Alice');

outputName(first, last);

// @ts-expect-error : tscエラーになる.
outputName(last, first);
