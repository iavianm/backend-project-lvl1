#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomInt } from '../src/index.js';

console.log(`Hi ${userName}!`);
console.log('What number is missing in the progression?');

for (let i = 1; i < 4; i += 1) {
  const progression = [];
  let firstNum = getRandomInt(100);
  const secondNum = getRandomInt(50) + 1;
  for (let t = 0; t < 10; t += 1) {
    progression.push(firstNum);
    firstNum += secondNum;
  }
  const index = getRandomInt(10);
  const correctAnswer = `${progression[index]}`;
  progression[index] = '..';
  const question = progression.join(' ');

  console.log(`Question: ${question}`);

  const yourAnswer = readlineSync.question('Your answer: ');

  if (yourAnswer === correctAnswer) console.log('Correct!');
  if (yourAnswer !== correctAnswer) {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    break;
  }
  if (i === 3) console.log(`Congratulations, ${userName}!`);
}
