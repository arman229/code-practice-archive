const TryCatchPractice = () => {
    let randomNumber;
  
    try {
      randomNumber = Math.floor(Math.random() * 1000);
      // If the condition in the try block is true, it will execute.
      // If the condition in the try block is false, the catch block will execute.
      if (randomNumber >= 500) {
        console.log(`${randomNumber} is greater than or equal to 500`);
      }
    } catch (error) {
      console.log(`${randomNumber} is less than 500`);
    } finally {
      // The finally block always executes, whether there was an error or not.
      console.log(`The number is: ${randomNumber}`);
    }
  
    return <div>This is a practice of Try, Catch, and Finally.</div>;
  };
  
  export default TryCatchPractice;
  