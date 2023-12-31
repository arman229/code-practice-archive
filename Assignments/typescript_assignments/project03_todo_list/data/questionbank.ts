


export const todoInquirerQuestions = {
    mainMenuQuestion: [
        {
            name: 'todoMenuItem',
            type: 'list',
            choices: [
                'Add a new todo',
                'Edit a todo',
                'Delete a todo',
                'View all todos',
                'Exit',
            ],
            message: 'Please select a todo menu option',
        },
    ],
    addTodoQuestion: [
        {
            name: 'todoName',
            type: 'input',
            message: "Please enter the todo's name",
        },
        {
            name: 'todoDescription',
            type: 'input',
            message: "Please enter a description for the todo",
        },
        {
            name: 'todoStatus',
            type: 'confirm',
            message: "Is the task completed?",
            default: false,
        },
    ],

    editTodoMenu: [
        {
            name: 'todoToEdit',
            type: 'list',
            choices: [],
            message: 'Please select a todo to edit',
        },
    ],
    editTodoQuestion: [
        {
            name: 'newTodoName',
            type: 'string',
            message: "Please enter the updated todo's name",
        },
        {
            name: 'newTodoDescription',
            type: 'string',
            message: "Please enter the updated description for the todo",
        },
        {
            name: 'todoStatus',
            type: 'confirm',
            message: "Is the task completed?",
            default: false,
        },
    ],
    deleteTodoMenu: [
        {
            name: 'todoToDelete',
            type: 'list',
            choices: [],
            message: 'Please select a todo to delete',
        },
    ],
};
