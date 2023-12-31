// Task No:42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

const magicians_name:string[] =['magician_1','magician_2','magician_3']
function show_magicians(magician:string[]){
    for(let i=0; i<magician.length;i++){
        console.log(magician[i])
    }
}
function make_great(magician:string[]){
    for(let i=0; i<magician.length; i++){
        magician[i]= `${magician[i]} is a very great magician`
        console.log(`${magician[i]}`);
        
    }

}

show_magicians(magicians_name);
make_great(magicians_name);
show_magicians(magicians_name);


export{}