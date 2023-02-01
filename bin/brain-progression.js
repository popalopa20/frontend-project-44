import greeting from '../src/cli.js';
import { numbers, itsProgressing, pass } from '../src/math.js';
import { questionForUser, checkUsersAnswer } from '../src/dop.js';

const progressing = () => {
  const name = greeting('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const n = numbers();
    const a = numbers(1, 100);
    const ex = itsProgressing(n, a);
    const userAnswer = questionForUser(ex, 'string');
    const correctProgressing = pass(ex);
    if (!checkUsersAnswer(userAnswer, name, i, correctProgressing)) break;
  }
};
progressing();
export default progressing;
