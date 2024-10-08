// // sinifdek yaisn ortalama deyeri
// const CS305 = [20, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43]
// // const CS308 = [20, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43]
// // const CS302 = [20, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43]
// // const CS305 = [20, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43]

// const result = ages.reduce((sum, item) => sum + item, 0) / ages.length
// console.log('result', Math.round(result))



 




// // Math floor (4.9 //4)
// // Math ceil(4.1) //5
// //Math .round(4.5) //5
// Math.max(6, 7, 11, 111, 3333) //3333
// //4
// //0-1
// console.log(Math.random());
// console.log(Math.max(4.2, 4.1, 4.4, 4.45, 4.5, 4.4111, 4.001));
// console.log(Math.round(Math.random() * 10));




// function sum() {
//     console.log('before return');
//     console.log('before return');
//     console.log('before return');
//     console.log('before return');
//     console.log('before return');
//     return 'okey'
//     console.log('after return');
//     console.log('after return');
//     console.log('after return');
//     console.log('after return');
//     console.log('after return');
//     console.log('after return');
    
// }
// console.log(sum());

// function sum (a,b) {
//     return a + b
// }
// console.log(sum(10, 8));
// console.log(sum(13, 28));
// console.log(sum(10, 38));




//task
// 1. create function which calc a and b
// 2. create function which sum 'arr1' or 'arr2'
// 3. create function which take two parameters (firstName and lastName)



const arr1 = [21, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43]
const arr2 = [20, 34, 17, 17, 18, 24, 22, 23, 18, 23, 18, 34, 43]




// 1.
function sum(a,b) {
    return a + b
}
console.log(sum(9, 5));



// 3. 
function sum(firstName,lastName) {
    return firstName + lastName
}
console.log('Mehman', "Mehman");

function mult(a) {
    return a.reduce((mult,item)=> mult *= item,1)

}
console.log(mult(arr1));
