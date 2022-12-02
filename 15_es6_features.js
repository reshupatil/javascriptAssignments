`use-strict`;

// full_name = "Reshma Patil";
// console.log(full_name);

// const person = {
//     id : 222,
//     full_name : "Anjali Patil"
// }
// console.log(person);

//person = null;
console.log(`-----------------------------------------------------------------`);
function show(num1, num2, ...smart_variable) { // ... Rest Parameter
    console.log(num1, num2);
    console.log(smart_variable);
}
show(10, 20, "Hello", "Morning");
console.log(`-----------------------------------------------------------------`);
// Function with default parameter
function divide(x, y=1) {
    const result = x/y;
    console.log(`Division Result is: ${result}`);
}
divide(10, 5);
divide(100);

console.log(`-----------------------------------------------------------------`);

console.log("==================Object Destructuring ======================");
const person = {
    id: 222,
    full_name: "Bhushan Patil",
    country : "Canada"
}
// //Old way to copy property
// let id = person.id;
// let full_name = person.full_name;
// let country = person.country;

let { id,  full_name } = person; // new way to copy property
console.log(id, full_name);

console.log(`==================Array Destructuring ======================`);
const array = [100, "hello", 300, 500];
let [ n1, n2, n3 ] = array;
console.log(n1, n2, n3);

console.log(`-----------------------------------------------------------------`);

(function show() {
    console.log('Inside IIFE');
})
();


// or

(function() {
    console.log('Inside IIFE');
})
();




