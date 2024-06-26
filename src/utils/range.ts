export const range = (a: number, b?: number, step = 1) => {
  const output = [];

  const isSingleInput = typeof b === 'undefined';

  const end = isSingleInput ? a : b;
  const start = isSingleInput ? 0 : a;

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
