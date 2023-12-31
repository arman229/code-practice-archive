// Task No:41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


const magicians_names:string[] =['magician_1','magician_2','magician_3']
function show_magicians(magician:string[]){
    for(let i=0; i<magician.length;i++){
        console.log(magician[i])
    }
}

show_magicians(magicians_names);