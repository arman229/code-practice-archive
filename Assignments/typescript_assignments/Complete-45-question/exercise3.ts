// Task No 3: Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase,
//   uppercase, and titlecase.

let Myname:string="ARMAN ashraf  ";
let Mynamelowercase:string=Myname.toLowerCase();
let Mynameuppercase:string=Myname.toUpperCase();
 

 const Mynamearray:string[]=Myname.split(" ")
 for (let i = 0; i < Mynamearray.length; i++) {
      Mynamearray[i] = Mynamearray[i].charAt(0).toUpperCase() + Mynamearray[i].slice(1).toLowerCase() ;
    
 }

 let Mynametitlecase:string = Mynamearray.join(" ")
console.log(`Lowercase:${Mynamelowercase}`)

console.log(`Uppercase:${Mynameuppercase}`)

console.log(`Titlecase:${Mynametitlecase}`)


