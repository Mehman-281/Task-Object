// //there are two ways to create Array

// const obj1 = new Object (
//     const obj2 = {}}
// )
// //array
// const arr1 = new Array ()
// const arr2 = [1, 2, 3, 4 ,]  //datalar bir basa yazilri
// console.log('arr2', arr2);

// console.log('Sabir', 'Samir,''Mehman, 'Polad);
// console.log(arr2[2]);
// console.log(arr2.flat(2));
// console.log(arr2.flat(-1));
// console.log(arr2{arr2.1length - 2}); //poladi goresen

// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);   //siyahini verir

// }

// if (let i = 0; i < arr2.length; i++) {
//     if(arr2[i].startsWith('S')) {
//         console.log(arr2[i]);    // s herifleri ile olani verir

//     }
// }


// for (let i = 0; i , arr2.length; i++) {
//     if (arr2[i].includes('a') {
//         console.log(arr2[i]);

//     }
// }


// const nums = [4, 5, 7, 8, 9, 10 ,33]

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2) {
//         console.log(nums[i]);

//     }
// }

// let sum = 0
// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]

// }
// console.log('sum, sum');







// const nums = [4, 5, 6, 7 ,8, 10, 33, 0]

//1.
// let sum = 0
// for (let i = 0; i < nums.length; i++) {
//     sum  *= nums[i]

// }
// console.log('sum', sum);


//2.
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i]>5 && nums[i]< 10 )
//     {
//         console.log(nums[i]);

//     }
// }


//3.
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2) {
//         console.log(nums[i]);
//     }
// }



//4.


// map, filter,sort,reverse,slice,findIndex metodlari

// const nums = [4, 5, 6, 7 ,8, 10, 33, 0, 'Ulfat', true. undefined, null, false] 
// log result = list.map((item, index)=> typeof item === 'string')



// let sum2 = 0
// let indexOfNum2 = nums2.map((item, index) => item * index)
// console.log('indexOfNum2', indexOfNum2);                   //map

// const users = [
//     {
//         id: 1,
//         name: 'Nihad',
//         gender: 'Female'

//     },
//     {
//         id: 2,
//         name: 'Nihad',
//         gender: 'Female'
//     }


// ]
// const result = users.filter(item =>)
// console.log('result', result)




// const users = [
//     {
//         id: 1,
//         name: 'Mehman',
//         gender: 'Male',
//         age: 96
//     },
//     {
//         id: 2,
//         name: 'Murad',
//         gender: 'Male',
//         age: 77
//     },
//     {
//         id: 3,
//         name: 'Aydan',
//         gender: 'Female',
//         age: 14
//     },
//     {
//         id: 4,
//         name: 'Tahir',
//         gender: 'Male',
//         age: 45
//     },
//     {
//         id: 5,
//         name: 'Ayten',
//         gender: 'Female',
//         age: 32
//     },
// ]

 
// // 2.
// const result = users.filter(item => item.gender !== 'Male')
// console.log('result', result)

// // 3.
// const result1 = users.filter(item => item.age > 25)
// console.log('result', result)

// // 1.
// sum = 0
// const result2 = users.map (item => sum += item.age)
// console.log(sum);

// // 4.
// const result3 = users.map (item => item.age*10)
// console.log(result3);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const users = ['Sabir', 'Fatime']
// console.log('users', users);

// users.push('Ali')
// console.log('users', users);



// const deletedItem = users.pop()
// console.log('deletedItem', deletedItem);

// //////////// push to add end of the array
// //////////// pop remove last item from array

// users.shift()                        //shift evelden silir yer deyisme edir
// console.log('users', users);
// users.unshift('Alirza', 'Gunel', 'Nihad')
// console.log('users', users);

// // const users = ['Sabir', 'Fatime', 'Gunel', 'Cavid', 'Xanlar']
// // users.splice(1, 2)
// // console.log('users', users);


// users.reverse()
// console.log('reversed', users);

// const user1 = users.slice(0, 2)
// const user2 = users.slice(2).reverse ()
// console.log('users1', user1);
// console.log('users2', user2);
// //reverse tersine cevirir

// //sort metodu
// //splice,reverse,sort,pop,push,shift,unshift

// users.sort()
// console.log('users', users);

// const numbers = [4, 6, 7, 2, 9, 0, 1, 1, 4 ]
//  //sort asc,desc
// numbers.sort((a, b) => a - b) //asc
// numbers.sort((first, second) => second - first) //asc
// console.log('numbers', numbers);

// numbers.sort((a,b) => {
//     if (a > b) {
//         return a
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// })
// console.log('numbers', numbers);


// for (let i = 0; i < numbers.length;i++) {
//     console.log(numbers[i]);
    
// }


// for (let i = numbers.length - 1; i >= 0; i--) {
//     newArr.push(numbers[i])
// }
// console.log('newArr', newArr);



// const result = numbers.finter((item, index) => item > 4)
// const result = numbers.find((item, index) => item > 4)

// console.log('result', result);
// console.log('result2', result2);



const numbers = [9, 5, 3, 11, 12, 33, 22, 9, 10, 0, 8]

//2.
numbers.sort((a, b) => a - b)
console.log('numbers', numbers);


//4.
numbers.splice(11, 22)
console.log('numbers', numbers);

