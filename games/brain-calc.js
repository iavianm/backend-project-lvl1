#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomInt } from '../src/index.js';

console.log(`Hi ${userName}!`);
console.log('What is the result of the expression?');

for (let i = 1; i < 4; i += 1) {
  const operations = ['+', '-', '*'];
  const rand = getRandomInt(operations.length);
  const operation = operations[rand];
  const firstNumber = getRandomInt(10);
  const secondNumber = getRandomInt(10);
  const question = (`${firstNumber} ${operation} ${secondNumber}`);
  console.log(`Question: ${question}`);

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

  const yourAnswer = Number(readlineSync.question('Your answer: '));

  if (yourAnswer === correctAnswer) console.log('Correct!');
  if (yourAnswer !== correctAnswer) {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    break;
  }
  if (i === 3) console.log(`Congratulations, ${userName}!`);
}
