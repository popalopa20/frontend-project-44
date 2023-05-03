import readlineSync from 'readline-sync';

export const type = (str) => {
  console.log(str);
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
  console.log(`Congratulations, ${userName}!`);
};
