// Task No:18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


const myfavoritecity:string[]=["Lahore", "Karachi", "Islamabad", "Sialkot", "Gujranwala",
"Daska"
];

console.log(`Original order:`)
console.log(myfavoritecity)
  console.log(`\nAlphabetical order:`)
console.log([...myfavoritecity].sort())
 console.log(`Original order after sorting:`)
console.log(myfavoritecity)
  console.log(`\nReverse alphabetical order:`)
console.log([...myfavoritecity].sort().reverse())
  console.log(`Original order after reverse  sorting:`)
console.log(myfavoritecity)

 console.log("\nReversed order:");
myfavoritecity.reverse();
console.log(myfavoritecity)
  console.log("\nOriginal order after second reverse:");
myfavoritecity.reverse();
console.log(myfavoritecity)


myfavoritecity.sort();
  console.log("\nSorted in alphabetical order:");
console.log(myfavoritecity)

  console.log("\nSorted in reverse alphabetical order:");
  myfavoritecity.sort((a, b) => b.localeCompare(a));
   console.log(myfavoritecity)
console.log(`OR second Method`)
myfavoritecity.sort().reverse()

console.log(myfavoritecity)