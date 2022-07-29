export function isString(v: unknown): v is string {
  return typeof v === 'string';
}

export function assertString(v: unknown): asserts v is string {
  if (!isString(v)) {
    throw new Error('Should be string');
  }
}
