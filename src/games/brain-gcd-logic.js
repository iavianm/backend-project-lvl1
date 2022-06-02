import getRandomNum from '../getRandom.js';
import runGame from '../index.js';
import getNod from '../getNod.js';

const gDescription = 'Find the greatest common divisor of given numbers.';

const gData = () => {
  const firstNum = getRandomNum(1, 50);
  const secondNum = getRandomNum(1, 50);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = getNod(firstNum, secondNum).toString();

  return [question, correctAnswer];
};

const startGame = () => runGame(gDescription, gData);

export default startGame;
