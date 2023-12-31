## Task No:1
Install Node.js, TypeScript and VS Code on your computer.

I have already installed Node.js on my computer, and I am sure about the version. To check the installed version, I will use the command "node -v" in the terminal.

As for TypeScript, I believe it is already installed on my system.
However, to confirm this, I will run the command "npm list -g typescript" in the terminal,
which will list the globally installed packages, including TypeScript.

Regarding Visual Studio Code (VS Code), I have successfully installed it on my computer.
I can open the editor to start using it for my TypeScript projects.
          
    console.log("This is my first exercise from the class held on July 23rd in Lahore.")
   ## Task No:2  
 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
    
     let myfirstname:string  = "Arman";
     let message:string = "Today, I have learned some basic topics of JavaScript.";
     console.log(`Hello ${myfirstname} ${message}  `)
   ## Task No: 3
  Name Cases: Store a person’s name in a variable,and then print that person’s name in lowercase, uppercase, and titlecase.
     
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

## Task No: 4 
   Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: Albert Einstein once said, “A person who never made a mistake never tried anything new.”
  
            let famousqutation:string="\"I have not seen a deed better than speaking the truth.\""
            console.log(`Hazrat Umar(RA) once said, ${famousqutation}`)
 ## Task No:5
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

          let famousperson:string = "Hazrat Umar(RA)"
           let famousqutation2:string ="\"Take account of yourselves before you are taken to account.\""
           console.log(`${famousperson} once said, ${famousqutation2}`)
## Take No: 6
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n",  at least once. Print the name once, so the whitespace  around the name is displayed. Then print the name after striping the white spaces.
           
          let personname:string  = "   \t\t\tThank you, Sir Zia Khan, for starting the courses.\n  ";
          console.log(`${personname} \n ${personname.trim()}`);
 ##  Task No: 7
Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

    let num:number =2;
    let num1:number =6;
    let num2:number =10;
    let num3:number =4;
    let num4:number =16;

    console.log(`Addidtion: ${num1 + num }`)
    console.log(`Subtraction: ${num2 - num }`)
    console.log(`Multiplication: ${num3 * num }`)
    console.log(`Division: ${num4 / num }`)
## Task No:8
You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.

    let linedray:any = "_________"

    console.log(linedray.repeat(8))

    console.log(5 + 3);
    console.log(linedray.repeat(8))
    console.log(2 * 4);
    console.log(linedray.repeat(8))
    console.log(10 - 2);
    console.log(linedray.repeat(8))
    console.log(16 / 2);

## Task No: 9 
Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

    let favoriteNumber:number=228738;
    let Message:string=`This is my RollNo PIAIC${favoriteNumber} `;
    console.log(Message);      
## Task No:10
Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
     
        // This program calculates the area of a circle using the given radius.
        const radius:number = 5;
        const area:number = Math.PI * radius * radius;
        console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}.`);
        // This program converts a temperature in Celsius to Fahrenheit.
        const celsiusTemperature:number = 25;  
        const fahrenheitTemperature:number = (celsiusTemperature * 9/5) + 32;
        console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature.toFixed(2)}°F.`);
## Task No:11
Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
       
        const Names1:string[]=['sameer', 'mazher','tauseef','noor']
        console.log(`${Names1[0]} is my best friend in my class in BS Math.`)
        console.log(`${Names1[1]} is my best friend in my class in BS Math.`)
        console.log(`${Names1[2]} is my best friend in my class in BS Math.`)
        console.log(`${Names1[3]} is my best friend in my class in BS Math.`)
## Task No:12
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
        
        const Namesfriend:string[]=['sameer', 'mazher','tauseef','noor']
        console.log(`${Namesfriend[0]} is my best friend in my class in BS Math and want to take admission in AI.`)
        console.log(`${Namesfriend[1]} is my best friend in my class in BS Math also want to go in Europe for study.`)
        console.log(`${Namesfriend[2]} is my best friend in my class in BS Math and currently he is a teacher.`)
        console.log(`${Namesfriend[3]} is my best friend in my class in BS Math and he is searching a good job. `)
##  Task No:13
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
        
        const favoritetransportation:string[]=["moterCycle","MetroBus" ]
        console.log(`I Have my own ${favoritetransportation[0]}`)
        console.log(` Traveling in ${favoritetransportation[1]} is comparatively easier compared to the local bus.`)
      
## Task No:14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
        
        const invitinglist:string[]=['sameer', 'mazher','tauseef']
        invitinglist.forEach((guest : string) => {
        console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`);
        });
##  Task No:15
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
- Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
-  Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
-  Print a second set of invitation messages, one for each person who is still in your list.
      
        const invitinglist1:string[]=['sameer', 'mazher','tauseef']
        let guestWhoCantMakeIt:string = invitinglist1[2];
        console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
        invitinglist1[2] = "Ahmad raza";
        invitinglist1.forEach((guest : string) => {
        console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`);
        });
  ##  Task No:16
   More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
- Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
- Add one new guest to the beginning of your array.
- Add one new guest to the middle of your array. - Use append() to add one new guest to the end of your list. - Print a new set of invitation messages, one for each person in your list.
        
        const invitinglist2: string[] = ['sameer', 'mazher', 'tauseef'];
        let guestWhoCantMakeIt1: string = invitinglist2[2];
        console.log(`${guestWhoCantMakeIt1} can't make it to the dinner.`);
        invitinglist2[2] = "Ahmad raza";
        invitinglist2.forEach((guest: string) => {
        console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`);
        });
        console.log("Good news! We found a bigger dinner table!");
        invitinglist2.unshift( 'sufyan');
        invitinglist2.splice(2, 0, 'waqas');
        invitinglist2.push('Qasim');  
        invitinglist2.forEach((guest: string)=>{
        console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`)
        })

 
##  Task No:17
  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
 - Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
  - Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
  - Print a message to each of the two people still on your list, letting them know they’re still invited.
  - Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
        
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
  ##  Task No:18
 Seeing the World: Think of at least five places in the world you’d like to visit.
 - Store the locations in a array. Make sure the array is not in alphabetical order.
- Print your array in its original order.
- Print your array in alphabetical order without modifying the actual list.
- Show that your array is still in its original order by printing it.
- Print your array in reverse alphabetical order without changing the order of the original list.
- Show that your array is still in its original order by printing it again.
- Reverse the order of your list. Print the array to show that its order has changed.
- Reverse the order of your list again. Print the list to show it’s back to its original order.
- Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed. 
- Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
        
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
##  Task No:19
 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
        
        const invitinglist5:string[]=['sameer', 'mazher','tauseef']
        invitinglist5.forEach((guest) => {
        console.log(`Dear ${guest}, you are invited to the dinner. Please join us!`);
        });
        console.log(`Number of People Invited to Dinner ${invitinglist5.length}`)
 ##  Task No:20
 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
    
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
 ##  Task No:21 
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
    
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
##   Task No:22
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
   
     const intentionalError:number[] =[1,2,3,4,5];
    console.log(intentionalError[6]);

    //OR
    
    interface myobject{
    message:string;
    }
    const customError:myobject = { message: "This is a Intentional error" };
    
    try {
    console.log(intentionalError[10]);
    } catch (error) {
    console.log("Index Error:", customError.message);  
    }
    
    try {
    console.log(intentionalError[2]);
    } catch (error) {
    console.log("Index Error:", customError.message);
    }
##  Task No:23
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
    
    let car = 'subaru';
    
    console.log("Is car == 'subaru'? I predict True.")
    
    console.log(car == 'subaru')
    
    - Look closely at your results, and make sure you understand why each line evaluates to True or False.
    
      - Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
      let car:string = 'subaru';
      console.log("Is car == 'subaru'? I predict True.")
      console.log(car == 'subaru')
    
    let day:string = 'Wednesday';
    console.log(`Is today Wednesday? I predict true`)
    console.log(day == 'Wednesday')
    
    let month:string = 'july';
    console.log(`Is the month July? I predict true`)
    console.log(month == 'july')
    
    let age:number = 22;
    console.log(`Is my age 22? I predict true`)
    console.log(age == 22)
    
    let year:number = 2023;
    console.log(`Is the current year 2023? I predict true`)
    console.log(year == 2023)
    
    let temperature:number = 33;
    console.log(`Is today's temperature 33? I predict false`)
    console.log(temperature == 43)
    
    let  ligtinmyhome:string='off';
    console.log(`Is the light in my home off? I predict false`)
    console.log(ligtinmyhome == 'on')
    
    let  todayweather:string= 'rainy'
    console.log(`Is today's weather rainy? I predict false`)
    console.log(todayweather == 'sunny')
    
    let completed45question:string = 'false';
    console.log(`Have I completed 45 exercises, NO I am currently on question 23? I predict false`)
    console.log(completed45question == 'true')
    
    let primenister:string = 'Imran Khan';
    console.log(`Is the current Prime Minister Imran Khan? I predict false`)
    console.log(primenister == 'sahbaz shrif')
 ##  Task No:24
 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
- Tests for equality and inequality with strings
- Tests using the lower case function
- Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
- Tests using "and" and "or" operators
- Test whether an item is in a array
- Test whether an item is not in a array
    
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
##  Task No:25
Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
- Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
- Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
    
      let alien_color:string= 'green';
      if(alien_color=="green"){
      console.log(`The player just earned 5 points`)
      }
##  Task No:26
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
- If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
- If the alien’s color isn’t green, print a statement that the player just earned 10 points.
- Write one version of this program that runs the if block and another that runs the else block.
      
      let alien_colors:string= 'green';
      if(alien_colors=="green"){
      console.log(`The player just earned 5 points`)
      }
      else{
      console.log(`The player just earned 10 points`)
      }
      let aliens_colors:string= 'red';
      if(aliens_colors=="green"){
      console.log(`The player just earned 5 points`)
      }
      else{
      console.log(`The player just earned 10 points`)
     }
    
##  Task No:27
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
- If the alien is green, print a message that the player earned 5 points.
    
- If the alien is yellow, print a message that the player earned 10 points.
    
- If the alien is red, print a message that the player earned 15 points.
    
- Write three versions of this program, making sure each message is printed for the appropriate color alien.let alien_color1:string= 'red';
     
      if(alien_color1=="green"){
      console.log(`The player just earned 5 points`)
      }
      else if(alien_color1 == 'yellow'){
      console.log(`The player just earned 10 points`)
      }
      else if(alien_color1 =='red'){
      console.log(`The player earned 15 points`)
      }
      let alien_color2:string= 'yellow';
      if(alien_color2=="green"){
      console.log(`The player just earned 5 points`)
      }
      else if(alien_color2 == 'yellow'){
      console.log(`The player just earned 10 points`)
      }
      else if(alien_color2 =='red'){
      console.log(`The player earned 15 points`)
      }
      let alien_color3:string= 'red';
      if(alien_color3=="green"){
      console.log(`The player just earned 5 points`)
      }
      else if(alien_color3 == 'yellow'){
      console.log(`The player just earned 10 points`)
      }
      else if(alien_color3 =='red'){
      console.log(`The player earned 15 points`)
      }
    
    
    
##  Task No:28
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
- If the person is less than 2 years old, print a message that the person is a baby.
    
- If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
- If the person is at least 4 years old but less than 13, print a message that the person is a kid.
- If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
- If the person is at least 20 years old but less than 65, print a message that the person is an adult.
- If the person is age 65 or older, print a message that the person is an elder.let myageinyear:number = 22;
     
      if( myageinyear < 2){
      console.log(`The person is a baby`)
      }
      else if ( myageinyear >= 2 && myageinyear < 4){
      console.log(`The person is a toddler`)
      }
      else if ( myageinyear >= 4 && myageinyear < 13){
      console.log(`The person is a kid`)
      }
      else if ( myageinyear >= 13 && myageinyear < 20){
      console.log(`The person is a teenager`)
      }
      else if ( myageinyear >= 20 && myageinyear < 65){
      console.log(`The person is an adult`)
      }
      else {
      console.log(`The person is an elder`)
      }
    
    
    
    
    
    
##  Task No:29
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
- Make a array of your three favorite fruits and call it favorite_fruits.
    
- Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
      
      const favorite_fruits:string[] = ['Apple', 'peach', 'Manago']
      if(favorite_fruits.includes('Apple')){
      console.log(`You really like apples!`);
      }
      if(favorite_fruits.includes('cherry')){
      console.log(`You really like cherry!`);
      }
      if(favorite_fruits.includes('peach')){
      console.log(`You really like peach!`);
      }
    
      if(favorite_fruits.includes('bannana')){
      console.log(`You really like bannana!`);
      }
    
      if(favorite_fruits.includes('Manago')){
      console.log(`You really like Manago!`);
      }
    
    
    
    
    
    
##  Task No:30
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
- If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
- Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
      
      const username:string[]=['admin','sameer','ahmad','mazher','sufyan']
      for (let i = 0; i < username.length; i++) {
      if(username[i]==='admin'){
      console.log(`Hello ${username[i]}, would you like to see a status report`)
      }
    
      else{
      console.log(`Hello ${username[i]}, thank you for logging in again `)
      }
      }
    
    
##  Task No:31
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
- If the list is empty, print the message We need to find some users!
- Remove all of the usernames from your array, and make sure the correct message is printed.
       
      const usernames:string[]=[]
      if(usernames.length > 0){
      for (let i = 0; i < usernames.length; i++) {
      if(usernames[i]==='admin'){
      console.log(`Hello ${usernames[i]}, would you like to see a status report`)
      }
    
              else{
              console.log(`Hello ${usernames[i]}, thank you for logging in again `)
              }
               }
              }
             else{
       console.log('we need to find some users!')
      }
    
    
    
##  Task No:32
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
- Make a list of five or more usernames called current_users.
- Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
- Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
- Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.const current_users:string[] = ['admin', 'sameer', 'ahmad', 'mazher', 'sufyan'];
      
      const new_users:string[] = ['admin', 'ali', 'ahmad', 'asad', 'jawad'];
    
      for (let i = 0; i < new_users.length; i++) {
      let isUsernameTaken:boolean = false;
     
      for (let j = 0; j < current_users.length; j++) {
      if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      isUsernameTaken = true;
      break;
      }
      }
    
      if (isUsernameTaken) {
      console.log(`Username '${new_users[i]}' is already taken. Please enter a new username.`);
      } else {
      console.log(`Username '${new_users[i]}' is available.`);
      }
      } 
##  Task No:33
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
- Store the numbers 1 through 9 in a array.
- Loop through the array.
- Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
    
      const numbers:number[]=[1,2,3,4,5,6,7,8,9];
      for (let i = 0; i < numbers.length; i++) {
      if(numbers[i]===1){
      console.log(`1st`)
      }
      else if(numbers[i]===2){
      console.log(`2nd`)
      }
      else if(numbers[i]===3){
      console.log(`3rd`)
      }
      else   {
      console.log(`${i+1}th`)
      }
      }
##  Task No:34
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
- Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
- Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
    
       const Pizzas:string[] = ['pepperoni','sausage', 'bacon']
     
      for (let i = 0; i < Pizzas.length; i++) {
      console.log(`${Pizzas[i]}`);
      }
      for (let i = 0; i < Pizzas.length; i++) {
      console.log(  ` I like ${Pizzas[i]} pizza `)
      
      }
      console.log('\nI really love pizza! \nI really love pizza! \nI really love pizza!');
 ##  Task No:35 
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. - Modify your program to print a statement about each animal, such as A dog would make a great pet. - Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
    
    const animals:string[]=['pigeons', 'parrots','canaries']
    
    for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
    }
    for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} are considered halal and can be kept as pets`)
    }
    console.log('\n Pigeons, parrots, and canaries, are considered halal and can be kept as pets.');
##  Task No:36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
    
     function make_shirt(size: string, message: string) {
    console.log(`The size of my shirt is ${size} and ${message}`);
    }
    
    make_shirt('medium', 'it\'s very comfortable for me.');
    make_shirt('large', 'I really dislike this shirt.');
    
##  Task No:37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
    
    
    function make_shirt2(size:string  = 'large', message:string = 'I love TypeScript')  {
    console.log(`The size of my shirt is ${size} and ${message}`);
    }
    make_shirt2();
    make_shirt2('medium');
    make_shirt2('small', 'TypeScript is awesome!');
 ##  Task No:38
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
         
    function city_country(name:string,country:string='Unknown'){
     console.log(`${name} is in ${country}`)
    }
    
    city_country('Karachi', 'Pakistan')
    city_country('London', 'UK')
    city_country('Paris')
    
##  Task No:39
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
"Lahore, Pakistan"
 Call your function with at least three city-country pairs, and print the value that’s returned.
   
    function city_country(city:string, country:string ):string{
    return `\"${city},${country}\"`
    }const city1 = city_country('Lahore', 'Pakistan');
    const city2 = city_country('Paris', 'France');
    const city3 = city_country('Tokyo', 'Japan');
    
    console.log(city1);
    console.log(city2);
    console.log(city3);
 ##  Task No:40
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
    
    interface Albumobject {
    artist: string;
    title: string;
    tracks?: number;
    }
    
    function make_album(
    artistname: string,
    album_title: string,
    numberOfTracks?: number
    ): Albumobject {
    const myalbum: Albumobject = {
    artist: artistname,
    title: album_title,
    };
    if (numberOfTracks !== undefined) {
    myalbum.tracks = numberOfTracks;
    }
    
        return myalbum;
    }
    
    const album_1 = make_album('artist1', 'title_1');
    const album_2 = make_album('artist2', 'title_2', 2);
    const album_3 = make_album('artist3', 'title_3', 3);
    
    console.log(album_1);
    console.log(album_2);
    console.log(album_3);
##  Task No:41
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
    
    const magicians_names:string[] =['magician_1','magician_2','magician_3']
    function show_magicians(magician:string[]){
    for(let i=0; i<magician.length;i++){
    console.log(magician[i])
    }
    }
    
    show_magicians(magicians_names);
    
    
    
##  Task No:42
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
    
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
    
##  Task:43
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
    
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
    
##  Task No:44
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
    
    function sandwiches(items:string[]){
    console.log("Making your sandwich with the following items:");
    for (const item of items) {
    console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
    }
    
    sandwiches(["Ham" ])
    sandwiches(["Ham", "Cheese"  ])
    sandwiches(["Ham", "Cheese", "Lettuce", "Tomato"])
 ##  Task No:45
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
    
    interface myCarObject {
    manufacturer: string;
    model: string;
    [key: string]: any;  
    }
    
    function createCar(manufacturer: string, model: string, ...args: any[]): myCarObject {
    const car: myCarObject = {
    manufacturer: manufacturer,
    model: model
    };
    
        for (let i = 0; i < args.length; i += 2) {
            const key = args[i];
            const value = args[i + 1];
            car[key] = value;
        }
    
        return car;
    }
    
    const carInfo = createCar("Toyota", "Camry", "color", "white", "year", 2023);
    
    console.log(carInfo);
    
    
    
    
    
