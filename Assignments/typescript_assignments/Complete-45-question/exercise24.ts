// Task No:24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let myage:number =22;
let myedcuation:string='BS'
let myname:string='Arman';
console.log(`I am 22 year old and currently i am in PIAIC after completing the BS`)
console.log(myedcuation==='BS' )
console.log(myedcuation!=='BS' )
 const lowerCase :string=myedcuation.toLowerCase();
 console.log(lowerCase==='bs')
 console.log(lowerCase==='BS')
 const Num1:number = 10;
const Num2:number = 5;

console.log(Num1 === Num2); 
console.log(Num1 !== Num2); 
console.log(Num1 > Num2);   
console.log(Num1 < Num2);   
console.log(Num1 >= Num2);   
console.log(Num1 <= Num2);
 console.log(myname=='Arman' &&  myage==22)
 console.log(myname=='Ahmad' &&  myage==22)
 console.log(myname=='Arman' ||  myage==22)
 console.log(myname=='Ahmad' ||  myage==23)
  
 const iteminarray:number[]=[1,2,3,4,5,7]
 
 console.log(iteminarray.includes(3))
 console.log(iteminarray.includes(6))
 console.log(!iteminarray.includes(3))
 console.log(!iteminarray.includes(6))
 