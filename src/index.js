import readlineSync from 'readline-sync';

export const type = (str) => {
  console.log(str);
};

export const questionForUser = (variant, dataType) => {
  const result = readlineSync.question(`Question: ${variant} \nYour answer: `);
  if (dataType === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const checkUsersAnswer = (userAnswer, userName, i, correct) => {
  if (userAnswer === correct) {
    type('Correct!');
  } else {
    type(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'. \nLet's try again, ${userName}!`);
    return false;
  }
  if (i === 2) type(`Congratulations, ${userName}!`);
  return true;
};

export const runEngine = (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    const yourAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (yourAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
