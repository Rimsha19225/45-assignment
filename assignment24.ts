//QUESTION: 24




let car :string ="subaru";
let age :number = 67;
let array :number[] =[1,2,7,9,4]


// Test 01
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru');

// Test 02
console.log("Is car === 'subaru'? I predict true.");
console.log(car === 'subaru');

//test 03
console.log("Is car != 'Tyota'? I predict true.");
console.log(car != 'toyota');

//test 04
console.log("Is car !== 'Tyota'? I predict true.");
console.log(car !== 'toyota');

//test 05
console.log("is car.toLowerCase( == 'subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');

//test 06
console.log("is car.toLowerCase( === 'subaru'? I predict true.");
console.log(car.toLowerCase() === 'subaru');

//test 07
console.log("Is age == 67? I predict true.");
console.log(age == 67);

//test 08
console.log("Is age != 45? I predict true.");
console.log(age != 45);

//test 09
console.log("Is age > 45? I predict true.");
console.log(age > 45);

//test 10
console.log("Is age < 45? I predict false.");
console.log(age < 45);

//test 11
console.log("Is age >=67? I predict false.");
console.log(age > 67);

//test 12
console.log("Is age <= 50? I predict false.");
console.log(age < 50);

//test 13
console.log("Is age > 50 && age < 89? I predict true.");
console.log(age > 50 && age < 89);

//test 14
console.log("Is age == 50 || age >= 89? I predict false.");
console.log(age == 50 || age >= 89);

//test 15
console.log("Is 4 in array? I predict true.");
console.log(4 in array);

//test 16
console.log("Is 6 not in array? I predict false.");
console.log(6 ! in array);