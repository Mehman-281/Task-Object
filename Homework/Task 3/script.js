///////////////////////// TASK 1. ////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Sum all the numbers in 'arr1'

// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// const yekun = arr1.reduce((acc, curr) => acc + curr, 0);
// console.log(yekun);
 
// 2. Add two numbers (10,88) to end of arr1 (push methods)
// arr1.push(10);
// arr1.push(88);
// console.log(arr1);

// 3. Remove first two numbers from arr1
// arr1.shift(9)
// arr1.shift(1)
// console.log(arr1);

// 4. Add three numbers (0,9,11) in front of arr1(unshift)
// arr1.unshift(0)
// arr1.unshift(9)
// arr1.unshift(11)
// console.log(arr1);

// 5. Remove four numbers in front of arr1(shift)
// arr1.shift(11)
// arr1.shift(9)
// console.log(arr1);


////////////////////// TASK 2. ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr2 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel',"Fatime", "Cavid", 'Ramin', "Ali", "Polad"]
// 1. Console values from "Rufet" to "Ali"
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
    
// }                                       
//Men bildiyim metod yuxarida qeyd etdiyimdir,sadece o butun adlari consola cixartdi,asagidaki metod indexi tapir bu tam anlamadim.

// const startIndex = arr2.indexOf("Rufet");
// const endIndex = arr2.indexOf("Ali");
// if (startIndex !== -1 && endIndex !== -1) {
//     for (let i = startIndex; i <= endIndex; i++) {
//         console.log(arr2[i]);
//     }
// } else {
//     console.log("Bir və ya hər iki ad massivdə tapılmadı.");
// }

// 2. Change Mehman to Fidan
// const index = arr2.indexOf("Mehman");
// if (index !== -1) {
//     arr2[index] = "Fidan";
// }
// console.log(arr2);

// 3. Console each name with map
// arr2.forEach(name => {
//     console.log(name);
// });

// 4. Console only names which is Fatime
// arr2.filter(name => name === "Fatime").forEach(name => {
//     console.log(name);
// });

// 5. Console all names where name is Gunel, then change it to "Nihad"
// Hell ede bilmedim

// 6. Console last second value of arr2
// const lastTwoValues = arr2.slice(-2);      Bu cavabin hellini ede bilmediyim ucun ozum yazmadim

// lastTwoValues.forEach(value => {
//     console.log(value);
// });

// 7. Console length of arr2
// console.log(arr2.length);


//////////////// TASK 3. /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// 1. Show only numbers
// const numbers = arr3.filter(value => typeof value === 'number');
// console.log(numbers);

// 2. Show only true values
// const string = arr3.filter(value => typeof value === 'string');
// console.log('true');

// 3. Show only false values
// const string = arr3.filter(value => typeof value === string);   QEYD: - - -  Bunu konsola coixarda bilmedim
// console.log(false);

// 4. Show only strings
// const string = arr3.filter(value => typeof value === 'string');
// console.log(string);


/////////////// TASK 4 ///////////////////////////////////////////

// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1. Console (only even numbers)
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);

// 2. Console (only odd numbers)
// const oddNumbers = numbers.filter(num => num % 2 === 1);
// console.log(oddNumbers);


///////////// TASK 5 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// 1. Console all values of arr4 -
// arr4.forEach(value => {

//     console.log(value);
// });

// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
// if (value === 'number' add 10 && value 'string' === + && value false) {
    

// if (typeof value === 'number') {
//     return value +10                         QEYD: HELL EDE BILMEDIM
// }
// console.log();

// 2. Sum all numbers of arr4
// const sum = arr4
//     .filter(value => typeof value === 'number') 
//     .reduce((accumulator, num) => accumulator + num, 0);
//     console.log(sum);
    
// 3. Count only the values that are true
// const string = arr4.filter(value => typeof value === 'string');
// console.log('true');

// 4. Count only the values that are string 
// const stringCount = arr4.filter(value => typeof value === 'string').length;
// console.log(stringCount);

// 5. Count only the values that are false
// const string = arr4.filter(value => typeof value === 'string');
// console.log('false');


///////////// TASK 6 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let fullName = 'Mehman Mirzazade Memmedhesen'
// 1. Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)


// 2. FullName'də soyadinizi adinizin onune keciren alqoritm yazin





// let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
// 4. Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// if (let i = 0; i < arr.length; i++) {      QEYD: - - -  Men bu cur bildim,amma bu deyesen sadece 5 reqemini cixardir.Hell ede biledim
//         if(arr[i].startsWith('5')) {
//             console.log(arr[i]);    
//         }
//     }
// 5. Yuxaridaki arraydaki butun reqemlerin cemini tapin
// let cem = arr.reduce((a, b) => a + b, 0);
// console.log('yekun', cem);

// 6. arrayda tekrar olunan reqemleri artan sira ile duzun
// let count = {};                                                       QEYD - - -     Bunu ozum unutdugum ucun hell ede bilmedim.
// arr.forEach(num => {
//     count[num] = (count[num] || 0) + 1;
// });
// let duplicates = Object.keys(count).filter(num => count[num] > 1).map(Number);
// duplicates.sort((a, b) => a - b);

// console.log(duplicates);
// 7. arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// let maxNum = Math.max(...arr);
// let count = arr.filter(num => num === maxNum).length;
// console.log(`Ən böyük ədəd: ${maxNum}`);

// 8. Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
//QEYD - - - Hell ede bilmedim

// 9. arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
//QEYD - - - Hell ede bilmedim

// 10. arraydaki en boyuk reqemin ilk indexini tapin
// const index = Math.max(arr);
// const Index = arr.indexOf(index);                       
// console.log("index", index);

// 11. 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//QEYD - - - Ede bilmedim

// 12. 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// 13. "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin

// 14. 
// let index = arr.map((num, index) => num === 7 ? index : -1).filter(index => index !==  -1);
// let cem = index.reduce((a, b) => a + b, 0);
// console.log(cem);

//////////////////// TASK 7 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Ede bilmedim