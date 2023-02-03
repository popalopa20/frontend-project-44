export const numbers = (min = 1, max = 100) => {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
  return randomNumber;
};

export const letsCalc = (x, y, sign) => {
  let result = 0;
  if (sign === '+') result = x + y;
  if (sign === '-') result = x - y;
  if (sign === '*') result = x * y;
  return result;
};

export const operation = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  const operator = arr[index];
  return operator;
};

export const nod = (x, y) => {
  let a = x;
  let b = y;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

export const itsProgressing = (n, a) => {
  let result = '';
  const length = numbers(5, 10);
  const hidden = numbers(1, length - 1);
  for (let d = 0; d < length; d += 1) {
    const num = (n + (a * d));
    result += (d !== hidden) ? `${num} ` : '.. ';
  }
  return result;
};

export const pass = (arr) => {
  const sort = arr.split(' ');
  const index = sort.indexOf('..');
  const prev = parseInt(sort[index - 1], 10);
  const next = parseInt(sort[index + 1], 10);
  const solve = (prev + next) / 2;
  if (index === [arr.length - 2])
  return `${solve}`;
};
