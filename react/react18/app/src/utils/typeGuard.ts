export function isString(v: unknown): v is string {
  return typeof v === 'string';
}

export function assertString(v: unknown, target = ''): asserts v is string {
  if (!isString(v)) {
    throw new Error(`${target} should be string`.trim());
  }
}

export function assertArray(v: unknown, target = ''): asserts v is Array<unknown> {
  if (!Array.isArray(v)) {
    throw new Error(`${target} should be Array`.trim());
  }
}

export function assertNotUndefined<T>(v: T, target = ''): asserts v is Exclude<T, undefined> {
  if (v === undefined) {
    throw new Error(`${target} should be not undefined`.trim());
  }
}
