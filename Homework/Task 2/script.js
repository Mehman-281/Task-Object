
// TASK 1 ////////////////////////////////////////////////////////////////////////////
// 1.Question - Multiply 12 with 8, and console the result:
let answer = 12 * 8;
console.log(answer);

// 2.Question - Divide 10 by 2 add result to variables x, and console x:

let x = 0;
x += 10 / 2;
console.log(x);

// 3.Question - Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

let num1 = 20
let num2 = 17

console.log(num1 + num2);

// 4.Question - Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
//   then add them to varibale name (info) and console info. */

let name = 'mehman';
let surName = 'mirzazade';
let year = 1992;

let information = name + ' ' + surName + ' ' + year;
console.log(information);

// 5.Question - Console the remainder(%) when 17 is divided by 12.
// --- Hell ede bilmedim

// 6.Question - Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again and reassign value Gence, console result.

const student = {

    address: {
        city: 'Baku',
        address: {
            test: 'Gence'
        },
        
    },
    
}
console.log(student.address.city);
console.log(student.address.address.test);


    // TASK 2 ///////////////////////////////////////////////////////////////////////////////////////////
// 1.Question
console.log('test1', test); 
{
    let test = "something"
    console.log('test2', test); 
}
console.log('test3', test);  

console.log('test1', test);  
{
    var test = "something"
    console.log('test2', test); 
}
console.log('test3', test); 





   // TASK 3 //////////////////////////////////////////////////////////////////////////////////////

   // 1.Question - Find the type of all the following cases

let nam = 'Mehman'
let surname = 'Zakirli'
let yea = 2000
yea = 2000
let city;
let qualification = null
let obj = { name: 'ulfat' }
let arr = ['a', 'b', 'c']

console.log(typeof 'name');
console.log(typeof 'surname');
console.log(typeof 2000);
console.log(typeof 2000);
console.log(typeof city);
console.log(typeof null);
console.log(typeof {name: 'mehman'});
console.log(typeof ['a', 'b', 'c']);

   // TASK 4 //

// 1.Question - const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)   

const arr1 = [9 + 1 + 5 + 8 + 9 + 9 + 3 + 22 + 11 + 12 + 32 + 8]
console.log(arr1);

arr1.push(10); 
arr1.push(88);
console.log(arr1);

arr1.splice(0, 2)
console.log(arr1);

// arr1.insert(0, 9, 11)
// console.log(arr1);

// const deletedItem = arr1.pop()
// console.log('deletedItem', deletedItem);



