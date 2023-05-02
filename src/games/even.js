import { numbers } from '../math.js';
import { runEngine } from '../index.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateRound = () => {
    const magicNumbers = numbers();
    const userAnswer = magicNumbers;
    const correctEven = magicNumbers % 2 === 0 ? 'yes' : 'no';
    return [userAnswer, correctEven]
  }
runEngine(rules, generateRound)
};
