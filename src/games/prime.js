import greeting from '../cli.js';
import { numbers, isPrime } from '../math.js';
import { questionForUser, checkUsersAnswer } from '../index.js';

export default () => {
  const name = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const a = numbers(2, 100);
    const userAnswer = questionForUser(a, 'string');
    const correctPrime = isPrime(a) ? 'yes' : 'no';

    if (!checkUsersAnswer(userAnswer, name, i, correctPrime)) break;
  }
};
