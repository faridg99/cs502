// Task 2

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(b)
// console.log(c)
// console.log(d)


// Task 3

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // output = 5


// Task 4 - Bu taski anlamadim tam olaraq

// console.log('test1, test'); 
// {
//     let test = "something"
//     console.log('test2, test')
// }
// console.log('test3, test');


// Task 5

// let name = "Ulfat"         // string
// let surname = Zakirli      // undefined
// let year = 2000            // number
// year = "2000"              // string
// let city:                  // undefined
// let qualification = null   // object
// let obj = {name;'ulfat'}   // object
// let arr = ['a','b','c']    // object


// Task 6 

// const arrl = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8, 10, 8];
// const sum = arrl.reduce((acc, curr) => acc + curr, 0);
// arrl.push(10, 88);
// arrl.shift();
// arrl.shift();
// arrl.unshift(0, 9, 11);

// arrl.shift();
// arrl.shift();
// arrl.shift();
// arrl.shift();

// console.log('Sum', sum)
// console.log('Final array:' , arrl);


// Task 7 

// const arr2  = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"];

// arr2[arr2.indexOf("Gulshen")] = "Rovshen";

// arr2.map(name => console.log(name));

// arr2.filter(name => name === "Anar").forEach(name => console.log(name));

// console.log(arr2[arr2.length - 2]);

// console.log(arr2.length);


// Task 8

// const arr3 = ["9", 10, 100, 11, 'true', null, 'something', false];

// const onlyNumbers = arr3.filter(item => typeof item === 'number');
// console.log('Only numbers:', onlyNumbers)

// const onlyTrueValues = arr3.filter(item => item === trye);
// console.log('only trye values:', onlyTrueValues);               // error verir bu hisse

// const onlyFalseValues = arr3.filter(item => item === false);
// console.log('Only false values', onlyFalseValues);

// const onlyStrings = arr3.filter(item => typeof item, 'string');
// console.log('Only strings:', onlyStrings);


// Task 8.1

// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25];

// console.log('even numbers:', numbers.filter(n => n % 2 === 0));

// console.log('odd numbers:', numbers.filter(n => n % 2 !== 0));


// Task 9

// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];

// const processedArr4 = arr4.map(value => {
//   if (typeof value === 'number') {
//     return value + 10;
//   } else if (typeof value === 'string') {
//     return `${value} is string`;
//   } else if (!value) {
//     return `${value} is falsy value`;
//   } else {
//     return value;
//   }
// });

// console.log(processedArr4);

// const sumNumbers = arr4.reduce((acc, value) => acc + (typeof value === 'number' ? value : 0), 0);
// console.log(sumNumbers);

// const countTrue = arr4.filter(value => value === true).length;
// console.log(countTrue);

// const countString = arr4.filter(value => typeof value === 'string').length;
// console.log(countString);

// const countFalse = arr4.filter(value => value === false).length;
// console.log(countFalse);

// // Task 10

// const person = {
//     name: 'YourName',
//     surname: 'YourSurname',
//     age: 30, // Example age
//     city: 'YourCity'
//   };
  
  
//   person.name = 'Jhon';
  
//   console.log(person);
  

//   const obj = {
//       email: 'ulfat@gmail.com',
//       info: {
//           gender: 'Male',
//           loc: {
//               city: "Baku",
//               street: 'Nizami 22',
//               education: {
//                   "uni name": "ADNSU",
//               }
//           }
//       }
//   };
  
  
//   console.log(obj.info.gender);
  
//   console.log(obj.info.loc.city);
  
// Task 11

  
