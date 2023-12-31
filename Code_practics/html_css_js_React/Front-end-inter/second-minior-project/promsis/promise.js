import React, { useEffect } from "react";

const MyComponent = () => {
  // Define a function that returns a Promise
  const generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
      // Generate a random number between 0 and 99
      let randomNumber = Math.floor(Math.random() * 100);
      console.log(`Generated random number is ${randomNumber}`);

      // Check if the number is even or odd
      if (randomNumber % 2 === 0) {
        console.log(`This is an even number`);
        resolve(randomNumber); // Resolve the promise for even numbers
      } else {
        console.log(`This is an odd number`);
        reject(randomNumber); // Reject the promise for odd numbers
      }
    });
  };

  useEffect(() => {
    // Call the generateRandomNumber function inside the useEffect hook
    generateRandomNumber()
      .then((number) => {
        console.log(`This is the success callback. Even number: ${number}`);
      })
      .catch((error) => {
        console.log(`This is the error callback. Odd number: ${error}`);
      });
  }, []);

  return (
    <div>
      <p>This is a React component that demonstrates asynchronous operations using Promises.</p>
    </div>
  );
};

export default MyComponent;
