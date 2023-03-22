import greeting from '../cli.js';
import { numbers } from '../math.js';
import { questionForUser, checkUsersAnswer } from '../index.js';

const evenGame = () => {
  const name = greeting('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const magicNumbers = numbers();
    const userAnswer = questionForUser(magicNumbers, 'string');
    const correctEven = magicNumbers % 2 === 0 ? 'yes' : 'no';
    if (!checkUsersAnswer(userAnswer, name, i, correctEven)) break;
  }
};

export default evenGame;
