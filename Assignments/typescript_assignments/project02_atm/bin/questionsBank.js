export const questionsBank = {
    pinQuestion: [
        {
            name: "pin",
            type: "number",
            message: "Please enter your 4-digit PIN code:"
        }
    ],
    confirmQuestion: [
        {
            name: "confirm",
            type: "confirm",
            message: "Do you want to perform another transaction?"
        }
    ],
    homeChoiceQuestion: (name) => {
        return [
            {
                name: "menu",
                type: "list",
                message: `Welcome, ${name}! Your account has been successfully authenticated. `,
                choices: ["Check balance", "Withdraw", "Transfer", "Exit"]
            }
        ];
    },
    withDrawQuestion: [
        {
            name: "withdrawAmount",
            type: "number",
            message: "Please enter your withdrawal amount:"
        }
    ],
    transferQuestion: [
        {
            name: "accountNumber",
            type: "string",
            message: "Please enter the account number to which you want to transfer funds:"
        }
    ],
    transferAmount: [
        {
            name: "transferAmount",
            type: "number",
            message: "Please enter the transfer amount:"
        }
    ],
};
//# sourceMappingURL=questionsBank.js.map