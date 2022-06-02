#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomInt, primeNumber } from '../src/index.js';

console.log(`Hi ${userName}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

for (let i = 1; i < 4; i += 1) {
  const question = getRandomInt(100);

  console.log(`Question: ${question}`);
  const correctAnswer = `${primeNumber(question)}`;
  const yourAnswer = readlineSync.question('Your answer: ');

  if (yourAnswer === correctAnswer) console.log('Correct!');
  if (yourAnswer !== correctAnswer) {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    break;
  }
  if (i === 3) console.log(`Congratulations, ${userName}!`);
}
