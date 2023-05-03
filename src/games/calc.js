import { numbers } from '../math.js';
import { runEngine } from '../index.js';

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
  const rules = 'What is the result of the expression?';
  const generateRound = () => {
    const oper = operation(['+', '-', '*']);
    const x = numbers(1, 20);
    const y = numbers(1, 20);
    const primer = `${x} ${oper} ${y}`;
    const correctCalc = letsCalc(x, y, oper);
    return [primer, correctCalc.toString()];
  };
  runEngine(rules, generateRound);
};
