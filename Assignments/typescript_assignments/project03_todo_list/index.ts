#! /usr/bin/env node
import inquirer from 'inquirer';
import showBanner from "node-banner";
import chalk from "chalk";
import {todoInquirerQuestions} from "./data/questionbank.js";
import {todos} from "./data/Database.js";
import {Todo} from "./data/Types.js";


async function mainMenu() {
    const main_resp = await inquirer.prompt(todoInquirerQuestions.mainMenuQuestion);
    if (main_resp.todoMenuItem === 'Add a new todo') {
        await new_todo()
    } else if (main_resp.todoMenuItem === 'Edit a todo') {
        await edit_Todo();
    } else if (main_resp.todoMenuItem === 'Delete a todo') {
        await delete_Todo()
    } else if (main_resp.todoMenuItem === 'View all todos') {
        await view_All()
    } else if (main_resp.todoMenuItem === 'Exit') {
        console.log(chalk.green('Goodbye...'));
    }
}

async function new_todo() {
    const todoResponse = await inquirer.prompt(todoInquirerQuestions.addTodoQuestion);
    const todoItem = {
        id: todos.length + 1,
        name: todoResponse.todoName,
        description: todoResponse.todoDescription,
        status: todoResponse.todoStatus,
    };

    todos.push(todoItem);
    console.log(chalk.green('New TODO added!'));
    await mainMenu();
}

async function edit_Todo() {
    const todoNames = todos.map((item) => item.name);
    const firstQuestion = {...todoInquirerQuestions.editTodoMenu[0], choices: todoNames};
    if (todoNames.length !== 0) {
        const edit_todo = await inquirer.prompt([firstQuestion]);
        const selectedTodo: Todo | undefined = todos.find((item) => item.name === edit_todo.todoToEdit)
        if (selectedTodo) {
            const update_todo = await inquirer.prompt(todoInquirerQuestions.editTodoQuestion);

            selectedTodo.name = update_todo.newTodoName;
            selectedTodo.description = update_todo.newTodoDescription;
            selectedTodo.status = update_todo.todoStatus;

            console.log('TODO successfully updated.');
        }

    } else {
        console.log('There are no editable todos available.');

    }

    await mainMenu();
}

async function delete_Todo() {
    let todoNames = todos.map((item_name) => item_name.name)

    if (todoNames.length !== 0) {
        let firstQuestion = {...todoInquirerQuestions.deleteTodoMenu[0], choices: todoNames}

        const delete_todo = await inquirer.prompt([firstQuestion]);
        const delete_index = todos.findIndex((todo) => todo.name === delete_todo.todoToDelete);
        todos.splice(delete_index, 1);

    } else {
        console.log(chalk.red("There are no remaining items that you want to delete."));


    }
    await mainMenu();

}

async function view_All() {
    console.table(todos);
    await mainMenu();
}

await showBanner('Todo', "Welcome to Todo's Node project", 'red', 'blue');
await mainMenu()