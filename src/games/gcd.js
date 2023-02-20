import greeting from '../cli.js';
import { numbers, nod } from '../math.js';
import { questionForUser, checkUsersAnswer } from '../dop.js';

const gcdGame = () => {
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

export default gcdGame;
