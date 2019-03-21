console.log('Running I am Running ?')

/*if(true){
    //() block of code to be run at  a certain time
}

while(true){

}*/

// Functions can be used to store code and use it as many times
// as we want in our program

/*//function declaration. declares hello
function hello(){
    console.log('Hello');
}
// invoking the function
hello (); // this will run the block of code in the definition the
//code between {}*/

/*//Arrow Functions

// allowas make it a const, cause you should be redefinng a function
printBoo = () // dont do this ... this is redefining the function

//decaring an arrow function
const printBoo = () => {
    console.log('Boo')
}

//declare it, but how do I reference it? there is no variable
() => console.log('boo');

//Invoking// Calling the function or running the block of code
printBoo(); */


//Activity 1
//Write a function print Sum that will console.log the result of
//10 + 10

/*const printSum = () => {
    console.log(10 + 10);
}
printSum();*/

//Write a printTriangle that will print these pound signs in the
//console

//Make it so that print Triangle will print the pound signs using
//a loop (only 1 console log function)

//Naming Functions

//verb

//getting data
//setting data -defining some value
//checking something
//printing something

//Check length of their input (could be password, or username)

/*const checkInputLength = (input) => {
    //console.log(input)
    console.log(input);{

    }
    if(input.length > 10){
        console.log('Input length is good its greater than 10');{
            else {
                console.log('Input length is less than 10');{

            }
         }
        } */
//input is what is called a parameter
//input can be named anything in the whole world you want
//input is basically a variable that is going to capture 
//whatever value we put into the function when we invoke it

//invoking the function
//checkInputLength('password')

//parameters can take in any datatype even another function
//numbers //string //objects (incl arrays) // functions
//null //undefined

//writing a function to sayHello to someone

/*const sayHello = (personsName) => {
    console.log(`Hello! ${personsName}`);
}

sayHello('Uncle Leo')
sayHello('Elaine')*/

//Activity 2 Write a function called getLastElement that takes
//a parameter arr
//Invoke the function with an array as the argument.
//The function should print these last elements in the array


/*const getLastElement = (arr) => {
    console.log(arr[arr.length - 1]);
}*/
//getLastElement = ([1, 2, 3, 4, 5, 6]);
//getLastElement = (['a', 'b',['c']]);
//getLastElement = ([[1,2,3,], [4, 5, 6]]);
/*const getLast = (arr) => {
    console.log(arr.pop());
 }*/

 /*const multiply = (num1, num2) => {
     console.log(num1 +num2)
 };

 multiply(2, 4);
 multiply(2, 8);
 multiply(2, 12);

 //Make a sentence

 const makeSentence = (noun, adjective, verb) => {
     console.log(`${noun} likes ${adjective} ${verb}!`)
 };

 makeSentence('Jim', 'yellow', 'bananas')*/

 //Write a function divideThreeNums that takes 3 parameters and print
 //the third parameter divided by the result of the second parameter
 //divided by the first


/*const divideThreeNums = (num1, num2, num3) => {
    console.log(num3 / (num2 /num1))
};

divideThreeNums(10, 5, 2)  //4   
//make function divideThreeNums, // print 3 parameters
divideThreeNums(30, 2, 9)  //135   
//make 3 parameter divivded by result of second param */

//on Stackoverflow output(return)= input (parameters)or w/e string nums ect
//Example

//divideThreeNums(30, 2, 9) 
//divideThreeNums(10, 5, 2)
/*const ten = () => {
    return 10
}
*/
//anytime calling it out puts still 10

/*const eleven  = () => {
    console.log(11)
}

const squareNums = (num) => {
    return num + num;
}

const squareOne = squareNum(1);
const squareTwo = squareNum(2);

console.log(squareOne, squareTwo);

array[squareNum(4)] // can use now bc represent an output */

//Activity 3
//Write a function calculateArea that takes two parameters width and 
//length and multiplies them. This will give us the area of a rectangle.
//Invoke the function a couple of times with different arguments each time


/*const calculateArea = (numW, numL) => {
    console.log((numW*numL))
};

calculateArea(1,2);  //2
calculateArea(3,4);  //12 */

//Write a function that takes three parameters (numbers), sums them, 
//converts the sum into a string and returns the string (eg. "123")
//Use your google-fu to research converting a number into a string
//Invoke the function a couple of times with different arguments each time

/* function calculateArea(L,W) {
    console.log(L*W);
}

function add3(x,y,z) {
    let sum = x+y+z;
    console.log(sum.toString())

}
add3(1,1,1)

function youLyinOrNot(x,y) {
    if(x === y){
        return true;
    }else{
        return false;
    }*/


//Parameters = str1, str2
/*const compareStrings = (str1, str2) => {
    //console.log(str1, str2);
    if (str1 === str2){
        return true
    }else {
            //console.log('hitting else');
        return false
        }
}*/

//calling the function, (beet, beet)
//are whats called arguments

function test(str, str1){
    if(str === str1){
      return true;
    }
    else {
      return false;
    }
  }
  compareStrings('beet','beet')