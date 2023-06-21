export const sortByAlphabet = (x, y) => {
  if (x.country < y.country) return -1;
  if (x.country > y.country) return 1;
  return 0;
}