import greeting from '../src/cli.js';
import { numbers } from '../src/math.js';
import { questionForUser, checkUsersAnswer } from '../src/dop.js';

const primeGame = () => {
  const name = greeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const a = numbers(2, 3571);
    const b = numbers();
    const c = b !== a;
    const example = `${a}`;
    const userAnswer = questionForUser(example, 'string');
    const correctPrime = a % 2 === 0 && a % c === 0 ? 'no' : 'yes';

    if (!checkUsersAnswer(userAnswer, name, i, correctPrime)) break;
  }
};

primeGame();
export default primeGame;
