// console.log('This is enum practis')
// enum color {
//     white=0,
//     yellow=5,
    
//     red=1,
//     green,
//     blue
// }
// let myvalue:string=color[0]
// console.log(`In enum gives us the key not the value ${myvalue}`)
// // Enum is used in database 
// // interface can be extend


// // function plain function and arrow function
// // anonymous function: a function is said to be anonymous without the name
// // functional scope && block scope

// let value:number=222
// function add(x:number, y:number){

//      value=111
// }
// add(1,1)
// console.log(`value ${value}`)

//bolck scope not accessable in function scope
// anonymous function always store in refrence

// Arrow function
 

const myArrowFunction =(a:number,b:number)=>{


}


//Lembda function

const lemdaFunction=(a:number,b:number)=> a + b 
//optional parameters in functinos with introgative sign we can write.
//Note: optional parameters always at the end not such as
// function add(x?:string,y:number){

// }

//Default parameters we can write as with equal sign 
function myfunction(name:string='myname',classname?:string,rollno?:string):number{
    return 5
    console.log(`${name}
    

    `)
}
myfunction('z')