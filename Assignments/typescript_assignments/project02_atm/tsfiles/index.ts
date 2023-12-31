#! /usr/bin/env node
import inquirer from "inquirer";
import banner from "node-banner";
import { accounts } from "./accounts.js";
import { questionsBank } from "./questionsBank.js";
import chalk from 'chalk'

await banner("HBL BANK", "Welcome to HBL ATM Machine", 'red', 'blue')
var pinAnswer = await inquirer.prompt(questionsBank.pinQuestion)
let foundObject = accounts.find(ac => ac.pin === pinAnswer.pin)
foundObject ? await homeMenu() : console.log(chalk.red("Invalid pin entered"));


async function homeMenu() {
    var homeChoiceAnswer = await inquirer.prompt(questionsBank.homeChoiceQuestion(foundObject.name))
    if (homeChoiceAnswer.menu === "Check balance") {
        console.log(chalk.blue("Your balance is:" + "$"+foundObject.balance))
        var confirmResponse = await inquirer.prompt(questionsBank.confirmQuestion)
        confirmResponse.confirm ? (await homeMenu()) : console.log(chalk.green("Transaction successful. Thank you for banking with us. Goodbye!"));

    } else if (homeChoiceAnswer.menu === "Withdraw") {
        let withDraw = await inquirer.prompt(questionsBank.withDrawQuestion)
        let remaining = foundObject.balance - withDraw.withdrawAmount;
        foundObject.balance = remaining
        console.log(chalk.green(`Withdrawal successful. Your remaining balance is: $${remaining}`));
        var confirmResponse = await inquirer.prompt(questionsBank.confirmQuestion)
        confirmResponse.confirm ? (await homeMenu()) : console.log(chalk.green("Transaction successful. Thank you for banking with us. Goodbye!"));
    } else if (homeChoiceAnswer.menu === "Transfer") {
        let transferAccountNo = await inquirer.prompt(questionsBank.transferQuestion)
        let accountNoMatch = accounts.find(ac => ac.accountNumber === transferAccountNo.accountNumber)
        if (accountNoMatch) {
            let transferAmount = await inquirer.prompt(questionsBank.transferAmount)
            let remaining = foundObject.balance - transferAmount.transferAmount;
            foundObject.balance = remaining
            console.log(chalk.green(`Money transfer successful. Your remaining balance is: $${remaining}`));

            var confirmResponse = await inquirer.prompt(questionsBank.confirmQuestion)
            confirmResponse.confirm ? (await homeMenu()) :console.log(chalk.green("Transaction successful. Thank you for banking with us. Goodbye!"));
        } else {
            console.log(chalk.red(`Invalid Account Number: ${transferAccountNo.accountNumber}`));

        }
    }
    else {console.log(chalk.green(" Thank you for banking with us. Goodbye!"));}
}

