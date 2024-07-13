export type Passed<T> = { ok: true; value: T };
export type Failed<E> = { ok: false; error: E };
export type Result<T, E = Error> = Passed<T> | Failed<E>;

export const pass = <T>(val: T): Passed<T> => ({
  ok: true,
  value: val,
});

export const fail = <E>(val: E): Failed<E> => ({
  ok: false,
  error: val,
});

export const match = <T extends string | number | symbol, R = void>(
  value: T,
  pattern: Partial<Record<T, (value: T) => R>> & { '_': (value: T) => R },
): R => {
  const match = pattern?.[value];

  return match ? match(value) : pattern['_'](value);
};
