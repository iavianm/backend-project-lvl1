#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomInt, NOD } from '../src/index.js';

console.log(`Hi ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');

for (let i = 1; i < 4; i += 1) {
  const firstNum = getRandomInt(100);
  const secondNum = getRandomInt(100);
  const question = (`${firstNum} ${secondNum}`);
  console.log(`Question: ${question}`);
  const correctAnswer = `${NOD(firstNum, secondNum)}`;
  const yourAnswer = readlineSync.question('Your answer: ');

  if (yourAnswer === correctAnswer) console.log('Correct!');
  if (yourAnswer !== correctAnswer) {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    break;
  }
  if (i === 3) console.log(`Congratulations, ${userName}!`);
}
