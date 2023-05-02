import greeting from '../cli.js';
import { numbers } from '../math.js';
import { questionForUser, checkUsersAnswer } from '../index.js';

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

export const isProgressing = (n, a) => {
  const d = numbers(1, 30);
  const hidden = numbers(1, n - 1);
  let result = '';
  for (let i = 0; i < n; i += 1) {
    result += (hidden === i) ? '.. ' : `${a + d * i} `;
  }
  return result;
};

export default () => {
  const name = greeting('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const n = numbers(5, 10);
    const a = numbers(2, 25);
    const ex = isProgressing(n, a);
    const userAnswer = questionForUser(ex, 'string');
    const correctProgressing = pass(ex);
    if (!checkUsersAnswer(userAnswer, name, i, correctProgressing)) break;
  }
};
