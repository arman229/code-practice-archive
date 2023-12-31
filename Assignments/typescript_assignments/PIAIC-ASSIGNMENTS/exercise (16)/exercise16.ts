
// Task No:16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.



const invitinglist2: string[] = ['sameer', 'mazher', 'tauseef'];

let guestWhoCantMakeIt1: string = invitinglist2[2];
console.log(`${guestWhoCantMakeIt1} can't make it to the dinner.`);

invitinglist2[2] = "Ahmad raza";

invitinglist2.forEach((guest: string) => {
  console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`);
});

console.log("Good news! We found a bigger dinner table!");


  
invitinglist2.unshift( 'sufyan'); 
invitinglist2.splice(2, 0, 'waqas'); 
invitinglist2.push('Qasim');  
invitinglist2.forEach((guest: string)=>{
console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`)
})
