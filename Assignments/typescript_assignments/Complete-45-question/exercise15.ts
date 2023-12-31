// Task No:15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.


const invitinglist1:string[]=['sameer', 'mazher','tauseef'] 
let guestWhoCantMakeIt:string = invitinglist1[2];
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
invitinglist1[2] = "Ahmad raza";
invitinglist1.forEach((guest : string) => {
  console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`);
});

