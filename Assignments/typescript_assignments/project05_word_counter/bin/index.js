#! /usr/bin/env node
// @ts-ignore
import inquirer from "inquirer";
import showBanner from 'node-banner';
import chalk from 'chalk';
(async () => {
    await showBanner(' Word Counter ', 'Welcome to the Word Counter Game', 'red', 'blue');
})();
async function myCalculator() {
    let { paragraph } = await inquirer.prompt([
        {
            name: "paragraph",
            type: "input",
            message: "Enter a Paragraph:",
        },
    ]);
    let WordsCounts = paragraph.trim().split(" ").length;
    let CharacterCounts = paragraph.replace(/ /g, "").length;
    console.log(chalk.green(`
Total number of words= ${WordsCounts} words
Total number of characters= ${CharacterCounts} characters
`));
    inquirer.prompt([
        {
            name: "playAgain",
            type: "confirm",
            message: "Do you want to calculate another conversion?",
        },
    ]).then((answer) => {
        if (answer.playAgain) {
            myCalculator();
        }
        else {
            console.log(chalk.blue("Goodbye!"));
        }
    });
}
setTimeout(() => {
    myCalculator();
}, 1000);
