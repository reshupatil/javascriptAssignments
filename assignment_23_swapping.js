// // Swap two variables -- 1. using third variable
// //2. without using third variable

console.log(`                  Assignment                   `);
console.log(`Q1: Swap two variables using Third variable`);
let num_1 = 100;
let num_2 = 200;
console.log(`Before Swapping : `);
console.log(num_1,num_2);
temp = num_1; 
num_1 = num_2;
num_2 = temp;
console.log(`After Swapping : `);
console.log(num_1,num_2);

console.log(`--------------------------------------------------------------------`);

let number_1 = 40;
let number_2 = 50;
console.log(`Before Swapping : `);
console.log(number_1,number_2);
temp = number_1; 
number_1 = number_2;
number_2 = temp;
console.log(`After Swapping : `);
console.log(number_1,number_2);
console.log(`--------------------------------------------------------------------`);
console.log(`Q1: Swap two variables without using Third variable`);
let num1 = 100; 
let num2 = 200; 
console.log(`Before Swapping : `);
console.log(num1,num2);
num1 = num1 + num2; 
num2 = num1 - num2; 
num1 = num1 - num2;
console.log(`After Swapping : `);
console.log(num1,num2);
console.log(`----------------------------------------------------------------------`);
let number1 = 40; 
let number2 = 50; 
console.log(`Before Swapping : `);
console.log(number1,number2);
number1 = number1 + number2; 
number2 = number1 - number2; 
number1 = number1 - number2;
console.log(`After Swapping : `);
console.log(number1,number2);
console.log(`----------------------------------------------------------------------`);