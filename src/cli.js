import readlineSync from 'readline-sync';

const greeting = (description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  if (description !== undefined) console.log(description);
  return userName;
};

export default greeting;
