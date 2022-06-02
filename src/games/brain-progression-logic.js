import getRandomNum from '../getRandom.js';
import runGame from '../index.js';

const gDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};

const gData = () => {
  const start = getRandomNum(0, 50);
  const step = getRandomNum(1, 10);
  const length = getRandomNum(8, 10);
  const progression = getProgression(start, step, length);
  const hidenNumber = getRandomNum(0, progression.length - 1);
  const correctNumber = `${progression[hidenNumber]}`;
  progression[hidenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctNumber];
};

const startGame = () => runGame(gDescription, gData);

export default startGame;
