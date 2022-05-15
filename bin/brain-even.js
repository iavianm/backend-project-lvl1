#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInt = (max) => Math.floor(Math.random() * max);

for (let i = 1; i < 4; i += 1) {
  const randomNum = getRandomInt(100);
  console.log(randomNum);
  const yourAnswer = readlineSync.question('Your answer: ');
  let correctAnswer = '';
  switch (randomNum % 2) {
    case 0:
      correctAnswer = 'yes';
      break;
    case 1:
      correctAnswer = 'no';
      break;
    default:
  }

  if (yourAnswer === correctAnswer) console.log('Correct!');
  if (yourAnswer !== correctAnswer) {
    console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
    break;
  }
  if (i === 3) console.log(`Congratulations, ${userName}!`);
}
