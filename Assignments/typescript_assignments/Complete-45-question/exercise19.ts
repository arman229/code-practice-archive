// Task No:19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

const invitinglist5:string[]=['sameer', 'mazher','tauseef']
invitinglist5.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`);
  });
  console.log(`Number of People Invited to Dinner ${invitinglist5.length}`)
