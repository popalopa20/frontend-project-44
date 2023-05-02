import greeting from '../cli.js';
import { numbers } from '../math.js';
import { questionForUser, checkUsersAnswer } from '../index.js';

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

export default () => {
  const name = greeting('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const a = numbers();
    const b = numbers();
    const example = `${a} ${b}`;
    const userAnswer = questionForUser(example);
    const correct = nod(a, b);

    if (!checkUsersAnswer(userAnswer, name, i, correct)) break;
  }
};
