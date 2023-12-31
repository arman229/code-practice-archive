#! /usr/bin/env node
// @ts-ignore
import inquirer from "inquirer";
import showBanner from 'node-banner'
import chalk from 'chalk'

await showBanner(' Currency Converter ', 'Welcome to the Currency Converter', 'red', 'blue');
async function myCalculator() {
     
        let currencyRate = {
            USD: {
                USD: 1,
                PKR: 288.21,
                CAD: 1.34,
                EUR: 0.94,
                GBP: 0.82,
                JPY: 148.23,
            },
    CAD: {
        CAD: 1,
        PKR: 214.41,
        USD: 0.74,
        EUR: 0.70,
        GBP: 0.61,
        JPY: 110.26,
       
    },
    PKR: {
        PKR: 1,
        USD: 0.0035,
        CAD: 0.0047,
        EUR: 0.0033,
        GBP: 0.0028,
        JPY: 0.51,
        
    },
    EUR: {
        EUR: 1,
        USD: 1.07,
        CAD: 1.43,
        PKR: 306.94,
        GBP: 0.87,
        JPY: 157.88,
        
    },
    GBP: {
        GBP: 1,
        USD: 1.23,
        CAD: 1.65,
        PKR: 353.04,
        EUR: 1.15,
        JPY: 181.58,
    },
    JPY: {
        JPY: 1,
        USD: 0.0067,
        CAD: 0.0091,
        PKR: 1.94,
        EUR: 0.0063,
        GBP: 0.0055,
        
    },
   
}
inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "CAD", "PKR", "EUR", "GBP", "JPY"],
        message: "Select the source currency:",
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "CAD", "PKR", "EUR", "GBP", "JPY"],
        message: "Select the target currency for conversion:",
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:",
    },
])
.then(async (answers: {
    from: "USD" | "CAD" | "PKR" | "EUR" | "GBP" | "JPY";
    to: "USD" | "CAD" | "PKR" | "EUR" | "GBP" | "JPY";
    amount: number;
}) => {
    const { from, to, amount } = answers;
    if (from && to && amount) {
        var finalResult = currencyRate[from][to] * amount;

        console.log(chalk.green(`Converted ${amount} ${from} to ${to}  is equal to ${finalResult} ${to}.`));

    } else {
        console.log(chalk.red("You entered invalid inputs"));
    }
    inquirer.prompt([
        {
            name: "playAgain",
            type: "confirm",
            message: "Do you want to calculate another conversion?",
        },
    ]).then((answer:any) => {
        if (answer.playAgain) {
            myCalculator();  
        } else {
            console.log(chalk.blue("Goodbye!"));
        }
    });
});
}
await myCalculator();
