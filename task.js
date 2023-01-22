// 19.01.2023

// Task 1 Clone Array

/* 1st case
const colors = ["Blue", "Red", "Green"]

const cloneColors = colors.slice()

console.log(cloneColors);

 2nd case


 let arr = [1,2,3,4,5]
 let emArr = []

 arr.forEach( e=> {emArr.push(e)});

 console.log(emArr)


 3rd case

 const mapArr = array.map(e=>e)
console.log(mapArr)

4rd case

let arr = [1,2,3,4,5]
let empArr = []
for (let i=0; i < arr.length; i++)
empArr.push(arr[i])


5th case 
let arr = [1,2,3,4,5]
let newArr = [...arr]
console.log(newArr)




*/

// Task 2


// Sorting array wirth right order
/*
function sortFunc(a,b)
{
if (a>b) return 1;
if (a==b) return 0;
if(a<b) return -1;
}
let arr1 = [5, 11, 4, 9, -4, -8, 2, 10]

console.log(arr1.sort(sortFunc));
*/


//Task 3

//  Sorting without any methods


/*

let arr1 = [5, 11, 4, 9, -4, -8, 2, 10]

for(let i=0;i<arr1.length;i++){

    for(let j=0;j<arr1.length;j++){
    
    if (arr1[i]<arr1[j]){
    
    let arr2 = arr1[i];
    
    arr1[i] = arr1[j];
    
    arr1[j] = arr2;
    
    }
    
    }
    
    }
    
    console.log(arr1);
    
*/


// Task 4: Filter array element type string.

 // [1,true,'hello']=>['hello']
/*
const arr = [1,true,'hello'];
const stringArr = arr.filter(e=> e==='hello');
console.log(stringArr);

*/



// Task 5: Remove a specific element from an array

/*

function delElem(arr, elem){
    return arr.filter(e => e !== elem)
}

delElem([1,2,4,5,6]); 

*/


// Task 6: Remove elemts without methods and function

/*
let array = [1,2,3,4];
array = [];
console.log(array);

*/


// Task 7: Clean Name
























// task 12
/*
let x = [1,2,3]

let sum = 0
x.forEach(item=> sum+=item)
console.log(sum)


*/

// Task 13









/*
let x = [1,'a',2,4,'salam',4];
let y = x.filter((e)=>{
    return e===4
})
console.log(y)
*/


