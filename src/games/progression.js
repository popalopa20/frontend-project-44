import greeting from '../cli.js';
import { numbers, itsProgressing, pass } from '../math.js';
import { questionForUser, checkUsersAnswer } from '../index.js';

const progressing = () => {
  const name = greeting('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const n = numbers(5, 10);
    const a = numbers(2, 25);
    const ex = itsProgressing(n, a);
    const userAnswer = questionForUser(ex, 'string');
    const correctProgressing = pass(ex);
    if (!checkUsersAnswer(userAnswer, name, i, correctProgressing)) break;
  }
};

export default progressing;
