// Task No:17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



const invitinglist4:string[] = ['sameer', 'mazher', 'tauseef'];
invitinglist4.unshift('sufyan'); 
invitinglist4.splice(2, 0, 'waqas'); 
invitinglist4.push('Qasim');  
invitinglist4.forEach((guest:string)=>{
console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`)
})
console.log(`you can invite only two people for dinner`)

let i:number=invitinglist4.length
while(i > 2){
 
    const removedGuest:string | undefined= invitinglist4.pop();

 
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    i--
  }

invitinglist4.forEach((list:string)=>{
    console.log(`${list} Your are very lucky and invited in this dinner`)

})
 
  invitinglist4.splice(0)
 
 
console.log("Final Guest List:");
console.log(invitinglist4);