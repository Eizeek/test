
// Reverse full name 
/*
let firstName = prompt('Enter your First Name')
let lastName = prompt('Enter your Last Name')

let fullName = firstName + ' ' + lastName

function reverseString(str) {


    const arrayStrings = str.split("");
   
  
    const reverseArray = arrayStrings.reverse();
 
 
    const joinArray = reverseArray.join("");
    
    return joinArray;
}



const revName = reverseString(fullName)

console.log(revName)

*/





// Palindrome test

/*




let string = prompt('Please, Enter whatever you want: ');
let len = string.length;


for (let i = 0; i < len / 2; i++) {


   if (string[i] !== string[len - 1 - i]) {
       console.log('Its not a palindrome!');
       break;
   }

   else{
       console.log('This is palindrome!');
       break;
   }
}

*/



//replace a e  with *

/*
let str = prompt('Please enter your sentence: ')
   
let rep = str.replace("a", "*")

console.log(rep.replace("e", "*"))


*/


// replace letters with *

/* 
let str = prompt('Enter your sentence: ');
let rep =str.replaceAll(/a|e|u/gi, '*')

console.log(rep);
*/







// Hello my name is John Doe to Hello John Doe
/*
const sentence = prompt('Enter your sentence: ')


const words = sentence.split(' ')

const pop = words.splice(1, 3)

console.log(words)
*/




//Degree conventor
/*
let celsius = +prompt('Enter Celcius for conventor')

let fah = celsius*32
let kel = celsius*273.15


console.log("Fahrenheit: ", fah)

console.log("Kelvin: ",  kel)
*/



