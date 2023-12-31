Setting Up a Node.js Project with TypeScript
This guide will walk you through the steps to set up a Node.js project with TypeScript. Follow these instructions to get started.

Prerequisites
Install Node.js version 18.17.1 LTS from the official Node.js website: Node.js.
Install TypeScript globally using the following command:
npm install -g typescript
Getting Started
Create a new folder for your project and open it in your preferred code editor.
Inside the folder, create a file named index.ts.
Initialize TypeScript Configuration
Initialize TypeScript configuration by running:
tsc --init
Generate JavaScript files from TypeScript:
tsc
Initialize Node.js Project
Initialize a Node.js project by running:
npm init -y
Install Node.js Type Definitions
Install type definitions for Node.js using the following command:

npm i @types/node -D
Configure tsconfig.json and package.json
Adjust the tsconfig.json file according to the instructions from the official TypeScript documentation:

Set "target": "ES2022"
Set "module": "NodeNext"
Set "moduleResolution": "NodeNext"
If using JSON files, uncomment "resolveJsonModule": true
Set "outDir": "./dist" to specify an output folder for emitted files.
In the package.json file, add "type": "module" under the project's name.

Create .gitignore File
Create a file named .gitignore.
Inside the .gitignore file, write:
node_modules
This will exclude the node_modules directory from version control.

Now you're ready to start building your Node.js project using TypeScript! Happy coding!
