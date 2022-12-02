console.log(`                          Assignment 01                    `);
const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"]
console.log(fruits);
console.log(` Q1: `);
let fruits_0 = fruits[0];
let fruits_3 = fruits[3];
let length_fruits = fruits.length - 1
console.log(`First element: ${fruits_0}, Last element: ${fruits[length_fruits]}`);
console.log(`==================================================================================`);
console.log(`Q2:`);
const after_spilce_insert = fruits.splice(0, 0, "Papaya");
console.log(`Add element "Papaya" before Banana : `);
console.log(fruits);
console.log(`==================================================================================`);
console.log(`Q3:`);
const after_splice_5 = fruits.splice(4, 1);
console.log(`Removed Element: ${after_splice_5}`);
console.log(` After removing Mango array is: ${fruits}`);

console.log(`==================================================================================`);
console.log(`Q4:`);


const after_spilce_insert_last = fruits.splice(5, 0, "Pineapple");
console.log(`Add element "Pineapple" at the last Position :-`);
console.log(fruits);


console.log(`==================================================================================`);

console.log(`Q5: add Dragon fruit before water melon:->`);
const after_spilce_insert_middle = fruits.splice(4, 0, "Dragon Fruit");
console.log(fruits);

console.log(`==================================================================================`);
console.log(`Q6: Replace Orange with Kiwi:->`);

fruits.splice(2, 1, "Kiwi");
console.log(`${fruits}`);

console.log(`==================================================================================`);

console.log(`Q7:`);

console.log(`Total element available in array using for of loop: `)
for (const element of fruits) {
    console.log(element);
}
console.log(`==================================================================================`);
console.log(`Q8: Element starting from index 1 to 4:->`);

const splice_after_both_index = fruits.splice(1, 4);
console.log(`elements starting from (1 to 4):  ${splice_after_both_index}`);
console.log(fruits);
console.log(`==================================================================================`);

console.log(`Q9: last three elements using length property:->`);

const fruits_1 = ['Papaya', 'Banana', 'Kiwi', 'Apple', 'Dragon Fruit', 'Watermelon', 'Pineapple'];
console.log(fruits_1);
const splice_last_elements = fruits_1.splice(fruits_1.length - 3);
console.log(`${splice_last_elements}`);
console.log(`==================================================================================`);







