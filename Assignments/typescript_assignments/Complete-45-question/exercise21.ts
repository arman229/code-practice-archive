// Task No:21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface information{
    name:string;
    batch:number
}
const mybio:information ={
    name:'arman',
    batch:47,

}
const university:information = {
    name:'umt',
    batch:47
}
const teacher:information ={
    name:'Sir jahabzaib',
    batch:47
}

const completeDate:information[] =[mybio,university,teacher]
completeDate.forEach((item)=>{
console.log(`\n Name`,item.name)
console.log(`Batch`,item.batch)

})