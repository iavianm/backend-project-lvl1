import getRandomNum from '../getRandom.js';
import runGame from '../index.js';
import getPrimeNumber from '../getPrimeNumber.js';

const gDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gData = () => {
  const question = getRandomNum(2, 100);
  const correctAnswer = getPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => runGame(gDescription, gData);

export default startGame;
