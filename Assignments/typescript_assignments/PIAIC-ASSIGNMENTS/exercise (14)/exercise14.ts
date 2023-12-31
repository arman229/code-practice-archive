//Task No:14 Guest List: If you could invite anyone, living or deceased,
//  to dinner, who would you invite? Make a list that includes at
//   least three people you’d like to invite to dinner. Then use
//    your list to print a message to each person, inviting them 
//    to dinner.

const invitinglist:string[]=['sameer', 'mazher','tauseef']
invitinglist.forEach((guest: string) => {
    console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`);
  });