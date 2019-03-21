console.log('js is running');

//scope // restrict the area in your code where variables can
//accessed

//Block Scope

//let and const scope your variables to the block they are
//defined {} <-- function, if, loop
// when we define it will ONLY exist in that block of code
/*
{
    const item = 'spicy meatball';
    console.log(item);
}
console.log(item);//item is note defined outside of the block

{
    var item = 'food'; //any var declaration gets hoisted up a level
    //var will be declared globally, and exist both inside and outside

}
console.log(item);

//why let and const is better way IT allows you to control them
//vs var which makes it globally

//The Flow of scope is from the outside --> in

const words = "that's a ...";
{
    const item = 'spicy meatball';
    const start = 'mama mia!'

{
    console.log(start);
    console.log(words);
    console.log(item);

   }
}
// if console.log is outside of the block it is undefined

const name = 'Maria';

const setName = () => {
    return name;
}
console.log(setName());

const setLastName = () => {
    const lastName = 'Sea';
    return lastName;
}
//console.log(setLastName())   // out side of block consider undefined
//console.log(lastName,'lastname variable') 

for (let i = 0, i < 100, i++){
    console.log('inside the block: ', i);
}
for (let i=0; i < 100; i++){
    console.log('inside the block: ', i);
}
for (let i=0; i < 100; i++){
    console.log('inside the block:, i');
}
console.log(i); */


//Write a for loop but use var instead of let.

// Verify: is the variable accessible outside the loop after it has run?
/*
var setName = (str) => {
    var name = str;
    return name;
}
console.log(name, 'this is name')

const nameHolder = (func) => {
    console.log(name, 'name inside of nameHolder');
    var setName =(str) => {
        var name = str;
        return name;
    }
}
nameHolder();
console.log(setName('maria'));
*/

// RETURN should always be the last thing in the function like an exit
//has to be in same block of code

//Verify: is the variable accessible outside of 
//the loop when you use neither var nor let ? (nor const).

//Verify: is the variable accessible outside of the loop with let?

//Verify: What about a let variable defined within the block of the loop?

//Write a function checkSquare that will return true if a number is 
//a perfect square (Check if the square root is a whole number).
/*
let checkSquare = ();
function checkSquare();
    if(Math.sqrt(i = 0; i < 100; == 1)){
        console.log('is a squared')
    } else {
        (Math.sqrt(i = 0; i < 100; ==! 1)){
            console.log('is not a squared'){

            }
}
*/
//Write function checkToLimit that will loop up to an arbitrary 
//limit brought in as a param (say, 100), and console log whether each number 
//is a perfect square. Call upon the previously defined checkSquare function.

//ANSWER Part 1

const checkSquare = (num) => {
    if(Math.sqrt(num) % 1 ===0){
        //if it has no remainder than its a whole number
        return true 
    }else {
        return false
    }
 }

 //Answer Part 2

 const checkToLimit = (limit) => {
     for(let i = 0; i < limit; i++)
     console.log(checkSquare(i))
 }

 checkToLimit(100);