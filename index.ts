 
 //QUESTION => 1

 //Personal Message: Store a person’s name in a variable,
 // and print a message to that person. Your message should be simple, such as, 
 //“Hello Eric, would you like to learn some Python today?”

 var personName:string="ERIC";
 console.log(`"HELLO ${personName},would you like to learn some pythontoday?"`);

 //QUESTION => 2

 //Name Cases: Store a person’s name in a variable, 
 //and then print that person’s name in lowercase, uppercase, and titlecase.

 var myName:string="Jawad Ali"
 var lowerCase:string=myName.toLowerCase();
 var upperCase:string=myName.toUpperCase();
 var titlecase:string=myName.toString();
 console.log(lowerCase);
 console.log(upperCase);
 console.log(titlecase);

 //QUESTION => 3

 //Famous Quote: Find a quote from a famous person you admire. 
 //Print the quote and the name of its author. Your output should look something like the following,
 // including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let author:string="Hazrat Ali (RA)";
console.log(`${author} once said"The strongest amongst you is the one who controls his anger."`)

//QUESTION => 4 
//Repeat Exercise 4, 
//but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.

let famousPerson:string="ALLAMA IQBAL";
let message:string="Khudi ko kar buland itna, ke har taqdeer se pehle, Khuda bande se khud pooche, 'Bata, teri raza kya hai?"
console.log(`${famousPerson}  once said" ${message}"`)

//QUESTION =>5

//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. 
//Then print the name after striping the white spaces.
let personNameWithWhiteSpace:string="\t QUAID E AZAM \n";
console.log(personNameWithWhiteSpace);
let personNameWithoutWhiteSpace=personNameWithWhiteSpace.trim();
console.log(personNameWithoutWhiteSpace);

//QUESTION =>6

//Number Eight: Write addition, subtraction, multiplication, and division 
//operations that each result in the number 8. 
//Be sure to enclose your operations in print statements to see the results.

let addition:number=5+3;
let subtraction:number=11-3;
let multiplication:number=4*2;
let division:number=16/2;
console.log(addition);

console.log(subtraction);

console.log(multiplication);

console.log(division);

//QUESTION =>7

//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5+3);
console.log(11-3);
console.log(2*4);
console.log(16/2);

//QUESTION =>8

//Favorite Number: Store your favorite number in a variable. Then, using that variable, 
//create a message that reveals your favorite number. Print that message

var favNumber:number=786;
var messageFav:string="MY favourate number is ="
console.log(messageFav,favNumber)

//QUESTION =>9

//Adding Comments: Choose two of the programs you’ve written, 
//and add at least one comment to each. 
//If you don’t have anything specific to write because your programs are too simple at this point, 
//just add your name and the current date at the top of each program file. 
//Then write one sentence describing what the program does.

//NAME:JAWAD ALI

// 9 SEPTEMBER 2003
var personName:string="ERIC";
console.log(`"HELLO ${personName},would you like to learn some pythontoday?"`);

//THIS PROGRAM IS WRITTEN TO CALCULATE THE ADDITON,SUBTRACTION AND DIVISION.

/*let addition:number=5+3;
let subtraction:number=11-3;
let multiplication:number=4*2;
let division:number=16/2;
console.log(addition);

console.log(subtraction);

console.log(multiplication);

console.log(division);*/

//QUESTION =>10

//Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.

let myFriends:string[]=["maan","Hassan","Ubaid","Muzammil","Abdullah"];
for(let i=0;i< myFriends.length;i++){
console.log(myFriends[i])};

//QUESTION => 11

//Greetings: Start with the array you used in Exercise 11, 
//but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, 
//but each message should be personalized with the person’s name.

let messageToFriends:string="Hope you have a great day";
for(let i1=0;i1<myFriends.length;i1++){
console.log(`ASSALAM O ALAIKUM FRIENDS "${myFriends[i1]}" ${messageToFriends}`)
}

//QUESTION =>12

//Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, 
//such as “I would like to own a Honda motorcycle.”
let bike:string="HONDA YBR"
let motorcycle:string[]=["Commuting: Bicycles are an eco-friendly and efficient","Exercise and Fitness: Many people use bikes for exercise and fitness,","Touring: Bicycle touring involves long-distance travel by bike,","bike is very useful to travel"]
motorcycle.map((nwdata)=>{
    console.log(bike,nwdata)
})

//QUESTION => 13

//Guest List: If you could invite anyone, 
//living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.

let guests:string[]=["MIAN HASSAN","ABDULLAH JUTT","FATIMA S"];
for(let index=0;index<guests.length;index++){
console.log(`Hello "${guests[index]}" you are invited to dinner`)
}

//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.

//missing person
let missingPerson:string="Fatima S";
console.log(`${missingPerson} cannot make the dinner`);

// =>Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guests.splice(2,1,"AISHA")
guests.forEach(newguests => {
    newguests.length< 0;
    //Print a second set of invitation messages, one for each person who is still in your list.
    console.log(`"${guests}" You are inviting to make dinner `)
    
});

//QUESTION => 14

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

// Add a print statement to the end of your program informing people that you found a bigger dinner table.

guests.forEach((guests)=>{console.log(`I AM INFORMING TO ${guests}.WE FOUND a BIGGER DINNER TABLE`)});

//• Add one new guest to the beginning of your array.

guests.unshift("Rana Basit");
console.log(guests);

//Add one new guest to the middle of your array.

guests.splice(2,0,"Saad Jutt");

console.log(guests);

// Use append() to add one new guest to the end of your list. 

guests.push("Usama Sidd");

console.log(guests)

//Print a new set of invitation messages, one for each person in your list.

guests.forEach((guests)=>{console.log(`Assalam o Alaikum ${guests}.You are inviting to make dinner`)})

////QUESTION => 15

//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests

//Add a new line that prints a message saying that you can invite only two people for dinner.

guests.forEach((guests)=>{console.log(`DEAR ${guests} New dinner table will not available.We can invite only two peoples for dinner`)})

//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

guests.pop()
console.log("Dear Usama Sidd you will not invited")
console.log(guests);
guests.pop()
console.log("Dear AISHA you will not invited")
console.log(guests);
guests.pop()
console.log("Dear ABDULLAH JUTT you will not invited")
console.log(guests);
guests.pop()
console.log("Dear Saad Jutt you will not invited")
console.log(guests);

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

guests.forEach((guests)=>{console.log(`Dear ${guests}.You are still invited in dineer`)})

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

guests.pop();
guests.pop();
console.log(`EMPTY LIST AT THE END OF PROGRAM : ${guests}`);

//QUESTION => 15;

//Seeing the World: Think of at least five places in the world you’d like to visit.

//Store the locations in a array. Make sure the array is not in alphabetical order.

let places:string[]=["MAKKAH","MADINA","switzrland","GERMANY","BRAZIL"];

//• Print your array in its original order.

console.log(`orignal order${places}`);

//• Print your array in alphabetical order without modifying the actual list.

let modifyaArray=[places].sort();
console.log(modifyaArray);

//• Show that your array is still in its original order by printing it.

console.log("• Show that your array is still in its original order by printing it.")
console.log(places);

//• Print your array in reverse alphabetical order without changing the order of the original list.

console.log("array in reverse alphabetical order without changing the order of the original list",[...places].reverse());

//Show that your array is still in its original order by printing it again.

console.log("Show that your array is still in its original order by printing it again.",places)

//• Reverse the order of your list. Print the array to show that its order has changed.

console.log("• Reverse the order of your list. Print the array to show that its order has changed.",places.reverse())

//• Reverse the order of your list again. Print the list to show it’s back to its original order

console.log("• Reverse the order of your list again. Print the list to show it’s back to its original order",places.reverse())

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.",places.sort())

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("• Sort to change your array so it’s stored in reverse alphabetical order",places.reverse())

//QUESTION => 16

//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("peoples inviting to dinner",guests.length)

//QUESTION =>20

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let thinkLanguage:string[]=["PUNJABI","SINDHI","BALOCHI","PASHTO","URDU"];

for(let i=0;i<thinkLanguage.length;i++){

    console.log(thinkLanguage[i])
}

//QUESTION =>21

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let car:{}={

    company:"HONDA",
    color:"blue",
    model:2023,
    price: 2500000,
    seats:"5"

}
console.log(car)

//QUESTION => 21

//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let meArray:number[]=[1,2,3,4,5];

//Internationally acces invalid index
try {
const myElement=meArray[10];
console.log(`element at index 10:${meArray}`)  
}catch(error){console.error(`an error occured${error}`)};

//CORRECT ERROR

let validArray=2;
 let validElement=meArray[validArray];

 console.log(`element at index ${validArray}:${validElement}`);

//QUESTION => 23

//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let players={

    BabarAzam:"Pakistani",
    viratKohli:"Indian",
    ChrisGayle:"West Indies",
    ABdeviliers:"South Africa",
    JosButtler:"England"

}

//test => 1 (True)
console.log("is BabarAzam==pakistani ?.I predicted true")

console.log(players.BabarAzam =="Pakistani");

//(False)

console.log("is BabarAzam==Indian ?.I predicted false")

console.log(players.BabarAzam =="Indian");

//Test => 2 (True)

console.log("is viratkohli==Indian ?.I predicted True")

console.log(players.viratKohli =="Indian");

// (False)

console.log("is viratkohli==Afganistan ?.I predicted False")

console.log(players.viratKohli =="Afganistan");

//Test => 3 (True)

console.log("is ChrisGayle==West Indies ?.I predicted True")

console.log(players.ChrisGayle =="West Indies");

//(False)

console.log("is ChrisGayle==Dubai ?.I predicted False")

console.log(players.ChrisGayle =="Dubai");

// Test => 4 (True)

console.log("is ABdevilliers==South Africa ?.I predicted true")

console.log(players.ABdeviliers=="South Africa");

//(False)

console.log("is ABdevilliers==Brazil ?.I predicted False")

console.log(players.ABdeviliers=="Brazil");

// Test => 5 (True)

console.log("is JosButtler==England ?.I predicted true")

console.log(players.JosButtler=="England");

//(False)

console.log("is JosButtler==london ?.I predicted False")

console.log(players.JosButtler=="london");

// QUESTION => 24

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//Tests for equality and inequality with strings

let myName1:string="Jawad";
console.log("My name ==Jawad?.i predicted True")
console.log(myName1=="Jawad")//(True)

//(false)

console.log("My name ==Ahmed?.i predicted False")
console.log(myName1=="Ahmed")

//Tests using the lower case function

let myCast="siddiqui"

console.log("My Cast using lower case==siddiqui ?.I predicted true")
console.log(myCast=="siddiqui")//true

console.log("My Cast using lower case==SIDDIQUI ?.I predicted FALSE")
console.log(myCast=="SIDDIQUI")//FALSE


//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1=10;
let num2=20;

//equality and inequality,
console.log(num1==num2,`I predicted false`);
console.log(num1!==num2,`I predicted true`);

//less than, greater than or equal to

console.log(num1<num2,`I predicted true`);
console.log(num1>num2,`I predicted false`);
console.log(num1=num2,`I predicted false`)

//greater than or equal to, and less than or equal to


console.log(num1>=num2,`I predicted true`);
console.log(num1<=num2,`I predicted false`);

//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

var alien_color:string[]=["green","yellow","red"]
if(alien_color.includes("green")){

console.log("player just earned 5 points")
}

//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

if(alien_color.includes("green")){

    console.log("palyer Just earn 5 points")
}
if(!alien_color.includes("green")){
console.log("fails")

}

//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

if(alien_color.includes("green")){

    console.log("player just earned 5 points for shooting the alien")
}

// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (!alien_color.includes("green")) {

    console.log("player just earned 10 points")   
}

// Write one version of this program that runs the if block and another that runs the else block.

if (alien_color.includes("green")) {
    console.log("player just earned 5 points for shooting the alien")
    
}else{


console.log("player just earned 10 points")


}

//QUESTION => 27

//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

//If the alien is green, print a message that the player earned 5 points.

if(alien_color.includes("green")){

    console.log("player just earned 5 points for shooting the alien")
}

//If the alien is yellow, print a message that the player earned 10 points.

if (alien_color.includes("yellow")) {

    console.log("player just earned 10 points")   
}

//If the alien is red, print a message that the player earned 15 points.

if (alien_color.includes("red")) {

    console.log("player just earned 15 points") 
}

// Write three versions of this program, making sure each message is printed for the appropriate color alien.

if(alien_color.includes("green")){

    console.log("player just earned 5 points for shooting the alien")}
    else if (alien_color.includes("yellow")) {

        console.log("player just earned 10 points")   
    }
    else if (alien_color.includes("red")) {

        console.log("player just earned 15 points") 
    };

    //QUESTION => 28

    //Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

    // If the person is less than 2 years old, print a message that the person is a baby.

    let personAge:number=22;

    if (personAge<2) {

        console.log(" The person is a baby")}else 
        
        if(personAge>=2 && personAge<4){

            console.log("The person is a toddler")
   
    } else
     if(personAge>=4 && personAge< 13){

        console.log("The person is a kid")
    }else
     if (personAge>=13 && personAge <20) {
        console.log("The person is a Teenager")
    }else
     if (personAge>=20 && personAge<65) {

        console.log("The person is a Adult")
        
    }else
     if (personAge>=65 ) {

        console.log("The person is a Elder")
    }

    //QUESTION => 29

    //Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

    //Make a array of your three favorite fruits and call it favorite_fruits.

    let favorite_fruits:string[]=["APPLE","MANGO","BANANA"];

    // Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

    if (favorite_fruits.includes('APPLE') ) {

        console.log("I REALLY LIKE APPLE")
        
    }
    
    if(favorite_fruits.includes('ORANGE')){


    console.log("I REALLY LIKE ORANGE")
    }else{console.log("ORANGE is not in THREE FRIUTS LIST")}
    
    if (favorite_fruits.includes('MANGO')) {

        console.log("MY FAVOURATE FRIUT IS MANGO")
        
    }
    
    if(favorite_fruits.includes('BANANA')){

        console.log("MY FAVOURATE FRIUT IS BANANA")
    }
    
    if(favorite_fruits.includes('peach')){


        console.log("MY FAVOURATE FRUIT IS PEACH")
    }else{

        console.log("peach is not your favroute list")
    }
    
    //QUESTION => 30

    //Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

    //If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

    //Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

    let userNames:string[]=["Admin","Watson","Maxwell","Williams","John"]

    for(let i=0;i<userNames.length;i++){

       if(userNames[i]==='Admin'){console.log(`Hello Admin, would you like to see a status report?`)}        
    else{
        console.log(`Hello${userNames[i]},thank you for logging in again`)
    }

}

//QUESTION => 31
//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

//If the list is empty, print the message We need to find some users!

//Remove all of the usernames from your array, and make sure the correct message is printed.

userNames = []
for (let i = 0; i <= userNames.length; i++) {
if(userNames[i] === undefined ){
    console.log('You should find new users')
}
else if(userNames[i] === 'Admin'){
    console.log('Hey Admin would you like to see a report?')
}else{
    console.log(`Hey ${userNames[i].toUpperCase()} thank you for logging in again`)
}  
}

//QUESTION => 32

//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// Make a list of five or more usernames called current_users.

let current_users:string[]=["Ahmed","Ali","Usama","Basit","Ahmar"]
// Make another list of five usernames called new_users
let new_users:string[]=["Riaz","Tanveer","Ali","Noman","Usama"]


for (let index = 0; index < new_users.length; index++) {
    if(current_users.includes(new_users[index])){
        console.log(new_users[index],"SORRY<<The username is Already exists")
    }else{console.log(new_users[index],"CONGRATS,Ther user name is available")}
    
}
 
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
//Store the numbers 1 through 9 in a array.
//Store the numbers 1 through 9 in a array.

let ordinalNumber:number[]=[1,2,3,4,5,6,7,8,9];
for (let index = 0; index < ordinalNumber.length; index++) {
    if(index==1){
        console.log(`${index}St`)
    }else if(index==2){
        console.log(`${index}ND`)
    }else if(index==3){
        console.log(`${index}rd`)
    }else if(index==4){
        console.log(`${index}th`)
    }else if(index==5){
        console.log(`${index}th`)
    }else if(index==6){
        console.log(`${index}th`)
    }else if(index==7){
        console.log(`${index}th`)
    }else if(index==8){
        console.log(`${index}th`)
    }else if(index==9){
        console.log(`${index}th`)
    }
    
}

//QUESTION = >34

//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

//

let favouratePizza:string[]=["MALAI BOTI","CHICKEN FAJITA","KABAB PIZZA"];

for (let index = 0; index < favouratePizza.length; index++) {
    console.log("I Like",favouratePizza[index],"with spice")
    
}
console.log("1:I Like Pizza with more spicy")
console.log("2:I Like Pizza with more CHEESE")
console.log("3:I Like eat pizza with my friends")

// QUESTION => 35

//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

let animals:string[]=["horse","DOg","Cow"];

for (let index = 0; index < animals.length; index++) {
    
    console.log(`A ${animals[index]} is a very Loyal animal`)
    
}

console.log("These animals is such a beautiful pets")

//QUESTION => 36 

//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:any,printMessage:string){

    console.log(`The size of client shirt is"${size}"and the message printed on shirt is "${printMessage}"`)
    

}
make_shirt(24,"The Professor")
make_shirt(38,"Hello World")

//QUESTION => 37

//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeshirt(shirts:string){

    if(shirts=="Large"){console.log("I love Typescript")}else if(shirts=="Medium"){
       
        console.log("I love my father")
    }else if(shirts=="Small"){

        console.log("Pakistan is beautiful country")

    }
}
makeshirt("Small")
makeshirt("Medium")
makeshirt("Large")

//QUESTION => 38

//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city:string,country:string="Pakistan"){

    console.log(`${city} is in "${country}"`)
}
describe_city("Faisalabad");
describe_city("Multan");
describe_city("Sukkur");

// QUESTION => 39

//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

function city_country(city:string,country:string){

    console.log(`${city} => ${country}`)
    return
}

city_country("Makkah","Saudia")
city_country("Ajman","Dubai")
city_country("Dehli","India")

// QUESTION => 40

//(...TRY but CANNOT SOLVE.....)

// QUESTION 41

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianName:string[]=["Alex","John","Alice","King","Bruce"]

function show_magicians(magician:string[]){

    magician.forEach((element)=>{
        console.log(element)
    })
}
show_magicians(magicianName)

//QUESTION => 42

//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(megician:string[]){
    megician.forEach((element)=>{console.log(element)})

}

make_great(magicianName)

function show_magician(megician:string[]){
 
    const nwMagician:string[]=magicianName.map(()=>`the great ${magicianName}`)
    return nwMagician
}
console.log(show_magician(magicianName))

//QUESTION => 43

//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

make_great(magicianName)

const newMag:string[]=["ali","mian","rana","awais"]
show_magicians(newMag)

//QUESTION => 44

//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time

function personWants(sandwich:string[]) {
    console.log("you can ordered the following items online",)

    for (let index = 0; index < sandwich.length; index++) {
        console.log("=>",sandwich[index])
        
    }

}
const orderd=["pizza","fry sandwich","chese sandwich","club sandwich"]
personWants(orderd)

//QUESTION => 45

//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function carFun(manufacturer:string,Model:number,color:string,extrafeature?:string){

    let carS={

        manufacturer,
        Model,
        color,
        extrafeature
    }

   return carS    

}

let carresult=carFun("Honda city",2023,"Blue","Blood Proof Glass")
console.log(carresult)
let carresult2=carFun("Vitz",2020,"Grey")

console.log(carresult2)