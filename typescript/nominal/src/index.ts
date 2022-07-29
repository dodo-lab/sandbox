import { fillString } from './types/fillString';
import { firstName, FirstName } from './types/firstName';
import { lastName, LastName } from './types/lastName';

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

function outputName(firstName: FirstName, lastName: LastName) {
  console.log(`${firstName} ${lastName}`);
}

const first = firstName('Bob');
const last = lastName('Alice');

outputName(first, last);

// @ts-expect-error : tscエラーになる.
outputName(last, first);
