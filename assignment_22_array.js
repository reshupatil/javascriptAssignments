const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"]
console.log(fruits);
console.log(`operations: `);
console.log(` Q1: `);
let fruits_0 = fruits[0];
let fruits_3 = fruits[3];
let length_fruits = fruits.length - 1
console.log(`First element: ${fruits_0}, Last element: ${fruits[length_fruits]}`);
console.log(`==================================================================================`);
console.log(`Q2:`);
const length_after_unshift = fruits.unshift("Papaya");
console.log(`Add element "Papaya" before Banana :   ${length_after_unshift}`);
console.log(fruits);
console.log(`==================================================================================`);
console.log(`Q3:`);
const push_after = fruits.push("Pineapple");
console.log(`Add element "Pineapple at last position:  ${push_after}`);
console.log(fruits);
console.log(`==================================================================================`);
console.log(`Q4:`);
console.log(`Replace element Orange with Kiwi: `);
fruits[2] = "kiwi";
console.log(fruits);
console.log(`==================================================================================`);
console.log(`Q5:`);
console.log(`Total fruits element : ${fruits.length}`);
console.log(`==================================================================================`);
console.log(`Q6:`);
const slice_after_both_index = fruits.slice(1, 4);
console.log(`elements starting from (1, 4):  ${slice_after_both_index}`);
console.log(fruits);
console.log(`==================================================================================`);
console.log(`Q7:`);
console.log(`Traverse the array using loop:`);
const slice_after = fruits.slice(4);
console.log(`select last three elements:  ${slice_after}`);
console.log(fruits);
console.log(`==================================================================================`);
console.log(`Q8:`);
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(`${element}`);
}
console.log(`==================================================================================`);




