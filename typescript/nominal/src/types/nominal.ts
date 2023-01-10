export type Nominal<T, U extends string> = T & {
  [P in U as `__${P}`]: `${P}`;
};
