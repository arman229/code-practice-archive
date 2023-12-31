// Task:43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

const magicians_names:string[]=['magician1', 'magician2','magician3']
function show_magicians(magicians_name:string[]){
    for(let i=0; i< magicians_names.length; i++){
console.log(magicians_name[i])
    }
}
function make_great(magicians_name:string[]){
let make_great_array:string[]=[]
for(let i=0; i<magicians_name.length; i++){
    make_great_array.push( `welcome ${magicians_name[i]}`)
    console.log(make_great_array[i])
}

}
show_magicians(magicians_names)
make_great(magicians_names)
show_magicians(magicians_names)
export {}