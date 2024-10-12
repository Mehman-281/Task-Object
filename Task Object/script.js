/////////////////// Menim movzum Objectlerle baglidir.Baslangic olaraq Bele bir melumat yaziriq.

// let firstName = 'Mehman'
// let lastName = 'Mirzazade'
// let age = 32;
// let uni = 'BDU'
// let loc = 'Baku, Azerbaijan'
// console.log(firstName, lastName, age, uni);


// ////////////// Bu melumatlardan ister oz sirketimizin isi ile elaqedar olaraq ister tedris sahemizin isi ile
// ///////////// her iki haldada bu melumatlardan cox sayda yazmagimiz teleb oluna biler. Objectler 2 (iki) formada acilir.

// const obj1 = {} // bu forma literal
// const obj2 = new Object() // bu ise constructor adlandirilir

// ////////// Melumat: Objectler constla isleyir.

// //Diger misalimizi gostermek isteyirem.
// const student = {
//     firstName: 'Mehman',
//     lastName: 'Mirzazade',
//     age: 33,
//     uni: 'BDU',
//     loc: 'Azerbaijan',
// }
// console.log(student);

// ///////////// Yuxarida qeyd etdiyimiz melumatlari const student basligi altinda yazib gostersek bu zaman konsolda dahar rahat gore bilerik.
// ///////////// Meselen konsolu bu sekilde cagirdiqda daha duzgun gorunusle gore bilerik.Bu zaman console.log(student); kimi qeyd etmeyimiz gereklidir.


// //////////////QEYD: Bu hal datalarin object formasinda yigilmasidir.

// ///////////////Non-primitive --Object daxildir. Object ozu data typedir. Amma daxilinde objectlere bolunur.
// ///////////////(object,array,function,date,null,error)

// ////////////////Meselen yuxaridaki siyahida tekce locationu konsola cixardaraq gormek isteyirik.
// // const student = {
// //     firstName: 'Mehman',
// //     lastName: 'Mirzazade',
// //     age: 33,
// //     uni: 'BDU',
// //     loc: 'Azerbaijan',
// // }
// // console.log(loc);
// //////////////////Eger bu sekilde gostersek bize hec bir melumat vermeyecek.Bu zamanObject ozluyunde bir scop yaradir ve
//////////////////// konsolu bu cur cagirmali olacayiq.

// // console.log(student.loc);

// ////////////Bu halda konsoldaki goruntunun duzgun islediyini gore bilerik.Bunun aciqlamasi ise beledir ki, firstName,lastName,age,uni,loc bunlar hamisi student otagindadir.
// //loc ardinca ne qeder melumat gelse idi meselen email,phone,web site ve s.bunlarin hamisini studen.(noqte)ardinca ise istediyimiz melumati yazmali ve cagirmali idik.
// //Objectin icinde istenilen qeder objectler ola biler.
// //Meselen;

// const student = {
//     firstName: 'Mehman',
//     lastName: 'Mirzazade',
//     age: 33,
//     uni: 'BDU',
//     address: {
//         city: 'Baku',
//         country: 'Azerbaijan',
//         post: 1111,
//         info: {
//             web: 'www.ar.com',
//         }
//     }
// }
// console.log(student.address.info.web);

// //////////Bu sekilde konsole student.address. ve s. kimi qeyd ede bilerik.Burdan aydin olurki studen,address,info
// bunlar her biri bir otaqdir ve her birinin icinde melumatlar qeyd olunub.

// //////////Novbeti misalda gostermek istediyim budur ki,Kabab case olaraq siyahimiza father name elave etdik. 

// const student = {
//     firstName: 'Mehman',
//     lastName: 'Mirzazade',
//     'father-name': 'Mehmanli',
//         age: 33,
//     uni: 'BDU',
//     loc: 'Azerbaijan',
// }
// //console.log(student."father-name");


// /////////Biz bunu konsolda yenede student otagindan noqte ile adi qaydada gore ve cagira bilerik.Lakin o istediyimiz sekilde gorsenmeyecek.
// //Bunun ucun kvadrat moterizeden istifade olunmalidir.

// console.log(student["father-name"]);

// //QEYD: Objectler sol teref key sag teref value olaraq bolunur.