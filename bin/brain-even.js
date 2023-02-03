import greeting from '../src/cli.js';
import { numbers } from '../src/math.js';
import { questionForUser, checkUsersAnswer } from '../src/dop.js';

const evenGame = () => {
  const name = greeting('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const magicNumbers = numbers();
    const userAnswer = questionForUser(magicNumbers, 'string');
    const correct = magicNumbers % 2 === 0 ? 'yes' : 'no';
    if (!checkUsersAnswer(userAnswer, name, i, correct)) break;
  }
};

evenGame();
export default evenGame;
