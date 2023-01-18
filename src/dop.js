import readlineSync from 'readline-sync';

export const type = (str) => {
  console.log(str)
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
      type('Correct!')
     } else {
      type(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'. \nLet's try again, ${userName}!`);
      return false;
     }
     if (i === 2) type(`Congratulations, ${userName}}!`);
     return true;
};