// Task No:29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favorite_fruits:string[] = ['Apple', 'peach', 'Manago']
if(favorite_fruits.includes('Apple')){
    console.log(`You really like apples!`);
}
if(favorite_fruits.includes('cherry')){
    console.log(`You really like cherry!`);
}

if(favorite_fruits.includes('peach')){
    console.log(`You really like peach!`);
}

if(favorite_fruits.includes('bannana')){
    console.log(`You really like bannana!`);
}

if(favorite_fruits.includes('Manago')){
    console.log(`You really like Manago!`);
}

