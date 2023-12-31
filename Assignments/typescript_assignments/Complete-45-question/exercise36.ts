// Task No:36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


function make_shirt(size: string, message: string) {
    console.log(`The size of my shirt is ${size} and ${message}`);
  }
  
  make_shirt('medium', 'it\'s very comfortable for me.');
  make_shirt('large', 'I really dislike this shirt.');
  