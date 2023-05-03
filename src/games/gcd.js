import { numbers } from '../math.js';
import { runEngine } from '../index.js';

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
  const rules = 'Find the greatest common divisor of given numbers.';
  const generateRound = () => {
    const a = numbers();
    const b = numbers();
    const example = `${a} ${b}`;
    const correctGcd = nod(a, b);
    return [example, correctGcd.toString()];
  };
  runEngine(rules, generateRound);
};
