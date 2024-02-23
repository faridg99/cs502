// let username = 'Farid'


// console.log(username.charAt(4));
// console.log(username[0]);


// console.log(username.charAt(-1));
// console.log(username[username.length - 1]);


// console.log(username.toUpperCase());


// const fullName = username,slice(0,14);
// console.log(fullName);


// let city = 'Azerbaijan'
// let city = 'Baku'


// let result = 'myCountry:{country} myCity:{city}
// console.log(result);
// let result = country.concat(city, 'code', academy')
// console.log(result);


// if (username.startWith('Z')) {
//     console.log(username);
// } else {
//     console.log('There is not any users with starting "F"');
// }





// 1. console return 'Farid Govashin' (slice)
// 2. console return just Govashin
// 3. console last letter of user
// 4. console return second letter of user
// 5. concat father name to user name (concat)
// 6. check if user name starts with 'a' console 'true' otherwise console 'false'
// 7. check if user end with 'm' pay attention caseSensitivity 
// 8. check user does it includes 'n' (includes)

// class work


// let username = 'farid govashin'
// console.log(username);

// console.log(username.charAt(17));
// console.log(username[username.length - 16]);
// console.log(username.toUpperCase());
// const fullName = username.slice(0,14);
// console.log(fullName);

// let result1 = username.charAt(0).toUpperCase()+username.slice(1,6)+username.slice(6,7).toUpperCase()+username.slice(7);
// console.log(result1)


// let fathername = 'Rza';

// username.concat(fathername);
// console.log(username.concat(fathername));

// if (username.startsWith('F')) {
//          console.log(true);
//      } else {
//          console.log('There is not any users with the given letter');
//  }


// task: create a object

// const user = {
//     firstName: 'your name'
// }

// 1. then add lastName, age, uni, gender
// 2. add nested object  called address inside (street, and city)
// 3. remove firstName
// 4. console city
// 5. change street to 'Nizami'


// user.lastName = 'Govashin';
// user.age = '24';
// user.uni = 'MIT';
// // user.address = {city: 'Baku'}
// user.address = {
    
// }

// user.address.city = 'Baku';
// user.address.street = 'Nizami'
// delete user.firstName

// console.log(user)


// // cosnt arr1 = new Array() // constractor
// // const arr2 = [] // literal

// console.log(arr1.length);
// console.log(arr2.length);


// const students = ['Arzu' , 'Zehra', 'Farid', 'Islam']
// const number = [4, 1, 5, 3, 7]
// const result = numbers.map((item, index, array) =>)

// const result = numbers.map((item, index, item,) => +100)

// // console.log('name ' + students[0]);



// let sum = 0
// students.map(item => sum = sum + item)
// console.log(sum / students.length);

// students.map('20' = sum = sum + item)
// console.log(sum)

// let even_num = num.filter(function(item){

//     return item % 2 == 0; });

const students = [20, 24, 24, 20, 23, 20, 18, 20, 19, 20, 23];
let sum = 0
const sums = students.filter(student => student !== 20 ).map(item => sum += item)
console.log(sum)