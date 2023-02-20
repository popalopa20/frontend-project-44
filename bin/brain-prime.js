import greeting from '../src/cli.js';
import { numbers, isPrime } from '../src/math.js';
import { questionForUser, checkUsersAnswer } from '../src/dop.js';

const primeGame = () => {
  const name = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const a = numbers(2, 100);
    const userAnswer = questionForUser(a, 'string');
    const correctPrime = isPrime(a) ? 'yes' : 'no';

    if (!checkUsersAnswer(userAnswer, name, i, correctPrime)) break;
  }
};

primeGame();
export default primeGame;
