//3-21-2019 Function LAB
console.log('Ashleys Laboratory');

//1. printGreeting
//Write a function called printGreeting with a parameter name that 
//returns a greeting with the argument interpolated into the greeting.

//console.log(printGreeting("Slimer"));
//=> Hello there, Slimer!
/*
const printGreeting = (greeting, name) => {    
    console.log((`${greeting} ${name}`))
};

printGreeting('Hi', 'Bob')
printGreeting('Konnichiwa', 'Ayako')
printGreeting('Annyeong', 'Jae')
printGreeting('Hola', 'Emah')
 */

//Write a function reverseWordOrder that accepts a single
// argument, a string. The function should return a string with the
// order of the words reversed
/*
console.log(reverseWordOrder("Ishmael me Call"));
=> "Call me Ishmael"

console.log(reverseWordOrder("I use Lâncome on my comb"));
=> "comb my on Lâncome use I"
*/
/*
const reverseWordOrder = ("Pika Pika CHU CHU") => {
    return reverseWordOrder ();{
        console.log(reverseWordOrder); //not in different order only backward letters
    }
} */

/*var str = "Hi Im Ashley"

function reverseWord (str){
    return str.split(" ").reverse().join(" ");{

    }
 }
console.log(reverseWord(str))*/



    

//Write a function called calculate.

//This function should take three arguments: two numbers and a string.

//Name the parameters num1, num2, and operation.

//If if the function is called with the third argument as "add",
// it should return the sum of num1 and num2.

//If if the function is called with the third argument as "sub",
//it should return return num1 minus num2.

//Do the same thing for multiplication "mult", division "div", 
//and exponent "exp" (where num2 is the exponent of num1).
/*console.log(calculate(4, 3, "sub"));

=> 1
console.log(calculate(4, 3, "exp"));

=> 64 */
/*
var answer = 0;

function calculate (num1, num2, X){
    if(X == "add"){
    return answer = num1 + num2;{
    }
}
    if(X == "sub"){
    return answer = num2 - num1;{
    
     }
}
    if(X == "exp"){
    return answer = Math.pow(num1, num2);{

    }
}
}
calculate(3, 2, "add");
console.log(answer)

calculate(3, 2, "sub");
console.log(answer)

calculate(3, 2, "exp");
console.log(answer)

*/

//4.Pandigital numbers


//declare [] 
// Stringify num "3467"
//run loop -> check if string includes "i" -> push "i" into array
//compare the length of array to the 


IsPandigital = () => {
    const sumRange
    function isPandigital(n){
       for(let i = 1 |; i <= String.length; i++);{

       }


/*1,2,3,4, 

goal 4738 []
string "4738" []
i=1     [array still empty bc 1]
i=2     []
1=3     [3]
1=4     [3,4]

//stops at for bc i=4 is end o
*/


//5.printGreeting v2.0




printGreeting2 = () => {    
    const userInput = prompt('How old are u')
    console.log((`${userInput}`))

};
printGreeting2()





