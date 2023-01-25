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
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
};
