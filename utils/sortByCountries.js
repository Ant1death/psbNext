/* const countries = ['Nederland', 'Moldova', 'Hong Kong', 'USA', 'canada']; const products = [{ c: 'Hong Kong' }, { c: 'USA' }, { c: 'Nederland' }, { c: 'Hong Kong' }, { c: 'Nederland' }, { c: 'Africa' }];
products.sort((a, b) => {
  const indexA = countries.indexOf(a.c);
  const indexB = countries.indexOf(b.c);
if (indexA === -1 && indexB === -1) { return 0; }
else if (indexA === -1) { return 1; }
else if (indexB === -1) { return -1; }
else { return indexA - indexB; } });
console.log(products); // [{c:'Nederland'},{c:'Nederland'},{c:'Hong Kong'},{c:'Hong Kong'},{c:'USA'},{c:'Africa'}]
 */
const countries = [
  'Netherlands',
  'Moldova',
  'Hong Kong',
  'USA',
  'Germany',
  'Canada',
  'Great Britain',
  'Turkey',
]

export const sortByCountries = (x, y) => {
  const indexA = countries.indexOf(x.country);
  const indexB = countries.indexOf(y.country);

  if (indexA === -1 && indexB === -1) {
    return 0;
  } else if (indexA === -1) {
    return 1;
  } else if (indexB === -1) {
    return -1;
  } else {
    return indexA - indexB;
  }
}