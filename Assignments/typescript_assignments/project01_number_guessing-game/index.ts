#! /usr/bin/env node
// @ts-ignore
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from 'node-banner';

(async () => {
  await showBanner('Guess Game', 'Welcome to the number guessing game', 'red', 'blue');
})();

async function mycalculator() {
  console.log("I have randomly generated a number. Please guess it.");

  let flag = true;
  while (flag) {
    let generatedNumber: number = Math.floor(Math.random() * 100) + 1;
    let i;

    for (i = 0; i < 7; i++) { 
      const myValue = await inquirer.prompt([
        {
          name: "num1",
          type: "number",
          message: "Enter your guess:",
        },
      ]);

      if (myValue.num1 === generatedNumber) {
        console.log(chalk.green(`Congratulations! Your guess ${myValue.num1} is correct!\n`));
        break;
      } else if (myValue.num1 > generatedNumber) {
        console.log(chalk.red(`Oops! Your guess ${myValue.num1} is too high.\n`));
      } else {
        console.log(chalk.yellow(`Oops! Your guess ${myValue.num1} is too low.\n`));
      }
    }

    if (i === 7) {
      console.log("Your guessing chances are finished");
    }

    let { again } = await inquirer.prompt([
      {
        name: "again",
        type: "confirm",
        message: "Do you want to play the game again?",
      },
    ]);

    flag = again;
  }
}

setTimeout(() => {
  mycalculator();
}, 1000);
