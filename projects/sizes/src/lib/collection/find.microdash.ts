import { find } from 'micro-dash';
find([1, 2, 3], (n) => n === 2, 1);
find({ a: 1, b: 2, c: 3 }, (n) => n === 2);
