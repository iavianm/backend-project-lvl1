import getRandomNum from '../getRandom.js';
import runGame from '../index.js';

const gDescription = 'What is the result of the expression?';

const calc = (firstNumber, secondNumber, operation) => {
  let correctAnswer = 0;
  switch (operation) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
  }
  return correctAnswer;
};

const gData = () => {
  const firstNumber = getRandomNum(1, 50);
  const secondNumber = getRandomNum(1, 50);
  const operators = ['-', '+', '*'];
  const operator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calc(firstNumber, secondNumber, operator).toString();
  return [question, correctAnswer];
};

const startGame = () => runGame(gDescription, gData);

export default startGame;
