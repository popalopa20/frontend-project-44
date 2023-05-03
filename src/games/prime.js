import { numbers } from '../math.js';
import { runEngine } from '../index.js';

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const generateRound = () => {
    const a = numbers(2, 100);
    const correctPrime = isPrime(a) ? 'yes' : 'no';
    return [a, correctPrime];
  };
  runEngine(rules, generateRound);
};
