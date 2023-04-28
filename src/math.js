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
  const d = numbers(1, 30);
  const hidden = numbers(1, n - 1);
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += (hidden === i) ? '.. ' : `${a + d * i} `;
  }
  return result;
};

export const pass = (str) => {
  const prog = str.split(' ');
  const indOfHidden = prog.indexOf('..');
  let result = 0;
  const firstTwo = [parseInt(prog[0], 10), parseInt(prog[1], 10)];
  const lastTwo = [parseInt(prog[prog.length - 3], 10), parseInt(prog[prog.length - 2], 10)];
  if (indOfHidden > 1) {
    result = firstTwo[0] + ((firstTwo[1] - firstTwo[0]) * indOfHidden);
  } else {
    result = lastTwo[1] - ((lastTwo[1] - lastTwo[0]) * (prog.length - indOfHidden - 2));
  }
  return `${result}`;
};

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
