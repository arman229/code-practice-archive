#!/usr/bin/env node
// console.log('hello world');
// @ts-ignore
import inquirer from "inquirer";
import chalk from 'chalk';
import showBanner from 'node-banner';
import { QuestionsBank } from './QuestionsBank.js';
await showBanner('Calculator', 'Welcome to the Number Calculator', 'red', 'blue');
async function myCalculator() {
    const { num1, num2, operator } = await inquirer.prompt(QuestionsBank.numberEntryQuestion);
    if (!(isNaN(num1) || isNaN(num2))) {
        switch (operator) {
            case "Addition":
                console.log(chalk.green(`The sum of ${num1} and ${num2} is ${num1 + num2}`));
                break;
            case "Subtraction":
                console.log(chalk.green(`The subtraction of ${num1} and ${num2} is ${num1 - num2}`));
                break;
            case "Multiplication":
                console.log(chalk.green(`The multiplication of ${num1} and ${num2} is ${num1 * num2}`));
                break;
            case "Division":
                if (num2 === 0) {
                    console.log(chalk.red(`Division by 0 is not allowed in mathematics`));
                }
                else {
                    console.log(chalk.green(`The division of ${num1} and ${num2} is ${num1 / num2}`));
                }
                break;
            case "Remainder":
                console.log(chalk.green(`The remainder of ${num1} divided by ${num2} is ${num1 % num2}`));
                break;
            case "Average":
                console.log(chalk.green(`The average of ${num1} and ${num2} is ${(num1 + num2) / 2}`));
                break;
        }
    }
    else {
        console.log(chalk.red("You entered invalid inputs"));
    }
    const answer = await inquirer.prompt(QuestionsBank.confirmationQuestion);
    if (answer.again) {
        await myCalculator();
    }
    else {
        console.log(chalk.blue("Goodbye!"));
    }
}
await myCalculator();
