import readLineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (gDescription, gData) => {
  console.log('Welcome to the Brain Games!');
  const name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gDescription);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = gData();
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGame;
