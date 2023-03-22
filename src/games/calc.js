import greeting from '../cli.js';
import { numbers, letsCalc, operation } from '../math.js';
import { questionForUser, checkUsersAnswer } from '../index.js';

const calc = () => {
  const name = greeting('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const oper = operation(['+', '-', '*']);
    const x = numbers(1, 20);
    const y = numbers(1, 20);
    const primer = `${x} ${oper} ${y}`;
    const userAnswer = questionForUser(primer);
    const correctAnswer = letsCalc(x, y, oper);
    if (!checkUsersAnswer(userAnswer, name, i, correctAnswer)) break;
  }
};

export default calc;
