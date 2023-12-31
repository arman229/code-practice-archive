// Task No:20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let mountains:string[] = ["Mount Everest", "K2"];
let rivers:string[] = ["Nile", "Amazon"];
let countries:string[] = ["USA", "pakistan", "india", "Australia"];
let cities:string[] = ["sialkot", "daska", "lahore", "karachi"];
let languages:string[] = ["English", "Punjabi", "hindi", "urdu"];

 
 console.log(`List of mountains`)
 mountains.forEach((item,index)=>{
    console.log(`${index + 1}. ${item}`);
 })
 console.log(`List of rivers`)
 rivers.forEach((item,index)=>{
    console.log(`${index + 1}. ${item}`);
 })
 console.log(`List of countries`)
 countries.forEach((item,index)=>{
    console.log(`${index + 1}. ${item}`);
 })
 console.log(`List of cities`)
 cities.forEach((item,index)=>{
    console.log(`${index + 1}. ${item}`);
 })
 console.log(`List of languages`)
 languages.forEach((item,index)=>{
    console.log(`${index + 1}. ${item}`);
 })
 
  




 
 