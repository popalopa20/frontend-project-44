import greeting from '../cli.js';
import { numbers } from '../math.js';
import { questionForUser, checkUsersAnswer } from '../index.js';

export const letsCalc = (x, y, sign) => {
  let result = 0;
  if (sign === '+') result = x + y;
  if (sign === '-') result = x - y;
  if (sign === '*') result = x * y;
  return result;
};

export const operation = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  const operator = arr[index];
  return operator;
};

export default () => {
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
