/*let randomNum = Math.random()

let numBtnZeroAndTen = randomNum  * 11



console.log(numBtnZeroAndTen)



let randomNumFloor = Math.floor(numBtnZeroAndTen)

console.log(randomNumFloor)*/


/*let space = ' '           // an empty space string
let firstName = 'Aziz'
let lastName = 'Karimov'
let country = 'Azerbaijan'
let city = 'Baku'
let language = 'JavaScript'
let job = 'Student'
let quote = "The saying,'Seeing is Believing' is not correct in 2020."
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`


let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);*/



// Declaring different variables of different data types
/*let space = ' '
let firstName = 'Aziz'
let lastName = 'Karimov'
let country = 'Azerbaijan'
let city = 'Baku'
let language = 'JavaScript'
let job = ' Student'
let age = 30


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)*/

/*const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)*/



/*Escape Sequences in Strings
In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
*/


/*console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically
*/


/*let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)*/


/*let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)*/ 

/*
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8
*/


/*
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t
*/
/*
let string = 'JavaScript'

console.log(string.toUpperCase())     // JAVASCRIPT

let firstName = 'Aziz'

console.log(firstName.toUpperCase())  // AZIZ

let country = 'Azerbaijan'

console.log(country.toUpperCase())    // Azerbaijan
*/


/*

let string = 'Karimov'


console.log(string.substr(2,5))



let surName = 'Karimov'


console.log(surName.substring(0 , 3))

*/


/*

let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

*/

/*
let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

let firstName = ' Asabeneh '

console.log(firstName)
console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string


*/


/*

let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'Finland'

console.log(country.includes('fin'))     // false
console.log(country.includes('Fin'))     // true
console.log(country.includes('land'))    // true
console.log(country.includes('Land'))    // false


let string = 'Karimov'

console.log(string.includes('ov'))

*/

/*

let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland



let string = 'Azerbaijan'

console.log(string.replace('zer', 'gad'))

*/

// string.charAt(index)
/*
let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let lastIndex = string.length - 1
console.log(string.charAt(lastIndex)) // t


let name = 'Mertezeiker'

console.log(name.charAt(8))
*/


// string.charCodeAt(index)
/*
let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 68

let lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex)) // t ASCII is 116


let name = 'Aziz'

console.log(name.charCodeAt(3))      // z ASCII is 122

*/


// string.indexOf(substring)

/*
let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1



let firstName = 'Aziz'

console.log(firstName.indexOf('z'))

*/



//  string.lastIndexOf(substring)

/* let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38


*/

//string.concat(substring, substring, substring)
/*
let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let country = 'Fin'
console.log(country.concat("land")) // Finland


let firstName = 'Aziz'

console.log(firstName.concat(' ', 'Karimov'))
*/



////syntax  string.startsWith(substring)
// string.endsWith(substring)
/*
let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false
console.log(string.startsWith('world'))  // false

let country = 'Finland'

console.log(country.startsWith('Fin'))   // true
console.log(country.startsWith('fin'))   // false
console.log(country.startsWith('land'))  //  false


let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false
console.log(string.endsWith('in the world')) // true

let country = 'Finland'

console.log(country.endsWith('land'))         // true
console.log(country.endsWith('fin'))          // false
console.log(country.endsWith('Fin'))          //  false
*/


//string.search(substring)
/*
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7
*/


//// syntax string.match(substring)
/*
let string = 'love'
let patternOne = /love/     // with out any flag
let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
*/
/*
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))

let pattern = /love/gi
console.log(string.match(pattern))   // ["love", "love", "love"]


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

*/


// string.repeat(n)
/*
let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove
*/


//  String to Int
/*
let num = '10'
let numInt = parseInt(num)
console.log(numInt) // 10


let num = '10'
let numInt = Number(num)

console.log(numInt) // 10


let num = '10'
let numInt = +num

console.log(numInt) // 10
*/
/*


let challenge = '30 Days Of JavaScript'

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0, 1))
console.log(challenge.slice(0, 2))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))
console.log(challenge.split(''))

let array = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(array.split(' ',))

console.log(challenge.replace('Java Script', 'Phyton'))

console.log(challenge.charAt(16))

console.log(challenge.charCodeAt('J'))

console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))


let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match('a'))

let firstCon ='30 Days of'
let secondCon = ' Javascript'
let conCat = firstCon.concat(secondCon)

console.log(conCat)

console.log(conCat.repeat(2))

*/




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


















































