import greeting from '../src/cli.js';
import { numbers, letsCalc, operation } from '../src/math.js';
import { questionForUser, checkUsersAnswer } from '../src/dop.js';

const calc = () => {
  const name = greeting('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const oper = operation(['+', '-', '*']);
    const x = numbers(1, 10);
    const y = numbers(1, 10);
    const primer = `${x} ${oper} ${y}`;
    const userAnswer = questionForUser(primer);
    let correctAnswer = 0;
    switch (oper) {
      case '+':
        correctAnswer = letsCalc(x, y, '+');
        break;

      case '-':
        correctAnswer = letsCalc(x, y, '-');
        break;
      case '*':
        correctAnswer = letsCalc(x, y, '*');
        break;
      default:
    }
    if (!checkUsersAnswer(userAnswer, name, i, correctAnswer)) break;
  }
};
calc();
export default calc;
