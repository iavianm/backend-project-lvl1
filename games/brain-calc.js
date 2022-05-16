#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import { getRandomInt } from '../src/index.js';

console.log(`Hi ${userName}!`);
console.log('What is the result of the expression?');

for (let i = 1; i < 4; i += 1) {
  const arr = ['+', '-', '*'];
  const rand = getRandomInt(arr.length);
  const rValue = arr[rand];
  const question = (`${getRandomInt(10)} ${rValue} ${getRandomInt(10)}`);
  console.log(`Question: ${question}`);
  const correctAnswer = `${eval(question)}`;
  const yourAnswer = readlineSync.question('Your answer: ');

  if (yourAnswer === correctAnswer) console.log('Correct!');
  if (yourAnswer !== correctAnswer) {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    break;
  }
  if (i === 3) console.log(`Congratulations, ${userName}!`);
}
