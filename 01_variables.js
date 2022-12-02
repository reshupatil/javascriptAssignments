// var my_number = 10;
// if (my_number == 10 && my_number != 0 || my_number % 2 == 0) {
//     console.log(`my lucky number`);
// }

// // Swap two variables -- 1. using third variable
// //2. without using third variable
// let num1 = 10; // 20
// let num2 = 20; //10
// console.log(num1,num2);
// num1 = num1 + num2; // 10 +20 = 30
// num2 = num1 - num2; //10
// num1 = num1 - num2;
// console.log(num1,num2);


//or using xor ^ symbol
// let num1 = 10; // 20
// let num2 = 20; //10
// console.log(num1,num2);
// num1 = num1 ^ num2; // 10 +20 = 30
// num2 = num1 ^ num2; //10
// num1 = num1 ^ num2;
// console.log(num1,num2);

// let num_1 = 100;
// let num_2 = 200;
// console.log(num_1,num_2);
// temp = num_1; 
// num_1 = num_2;
// num_2 = temp;
// console.log(num_1,num_2);

// let abc = "test";
// abc = 345;
// console.log(abc);
let person1 = {
    name:{ firstName: "Jayesh" },
    age : 24,
};
let person2 = { ...person1 };

person2.name.firstName = "Virat";
person2.age = 33;

console.log(person1.name.firstName);
console.log(person1.age);

// Ans - D
// Deep copy using spread operator will fail when the object contain nested object
