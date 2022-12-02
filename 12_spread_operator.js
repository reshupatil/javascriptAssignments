//const array_original = [1, 2, 3, 4, 6, 77, 88 ];
// console.log(array_numbers);
// console.log(1, 2,3,4,6,77,88, 99);
// console.log(...array_numbers);

let value_original = 100;
let value_copy = value_original;
console.log(value_original, value_copy);

value_original = 400;
console.log(value_original, value_copy);
//Clone or Copy the array_numbers

const array_original = [1, 2, 3, 4, 6, 77, 88 ];
//let array_copy = array_original;
let array_copy = [...array_original]
console.log(array_original);
console.log(array_copy);
// or
// console.log(array_original, array_copy);

array_original.push(9999);
console.log(array_original);
console.log(array_copy);

