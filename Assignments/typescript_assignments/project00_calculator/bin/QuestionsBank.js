export const QuestionsBank = {
    "numberEntryQuestion": [
        {
            name: "num1",
            type: "number",
            message: "Enter the first number:",
        },
        {
            name: "num2",
            type: "number",
            message: "Enter the second number:",
        },
        {
            name: "operator",
            type: "list",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remainder", "Average"],
            message: "Select the operation:",
        },
    ],
    "confirmationQuestion": [
        {
            name: "again",
            type: "confirm",
            message: "Do you want to calculate another expression?",
        },
    ]
};
