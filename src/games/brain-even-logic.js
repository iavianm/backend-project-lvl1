import getRandomNum from '../getRandom.js';
import runGame from '../index.js';

const gDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;
const gData = () => {
  const question = getRandomNum(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => runGame(gDescription, gData);

export default startGame;
