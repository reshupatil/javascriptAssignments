console.log(`                    Assignment "B"`);
console.log(`Given array: `);
const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(array_numbers);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`1. Log the array element with it's index using forEach() with array function:`);
array_numbers.forEach((element, index) =>
    console.log(`Index: ${index}, Element: ${element}`)
);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`2.a: Find Positive numbers using forEach with arrow function:=>`);
array_numbers.forEach((number) => {
    if (number >= 0) {
        console.log(number);
    }
})
console.log(`--------------------------------------------------------------------------------------`);
console.log(`2.b: Find Positive numbers using forEach with callback:=>`);
array_numbers.forEach(function (value) {
    if (value >= 0) {
        console.log(value)
    }
})
console.log(`--------------------------------------------------------------------------------------`);
console.log(`3. Find Negative numbers using forEach with arrow function:=>`);
array_numbers.forEach((number) => {
    if (number < 0) {
        console.log(number);
    }
})
console.log(`--------------------------------------------------------------------------------------`);
console.log(`4. Find Even Numbers:=>`);
array_numbers.forEach(element => {
    if (element % 2 == 0) {
        console.log(element);
    }
});
console.log(`--------------------------------------------------------------------------------------`);
console.log(`5.Sum of all elements:=>`);
let sum_result = 0
array_numbers.forEach((number) => {
    sum_result = sum_result + number;
})
console.log(sum_result);

console.log(`--------------------------------------------------------------------------------------`);
console.log(`6. Even Positioned Array Value:=>`);
array_numbers.forEach((number) => {
    if ((array_numbers.indexOf(number)) % 2 == 0) {
        console.log(number);
    }
})
console.log(`--------------------------------------------------------------------------------------`);
console.log(`7. Odd Positioned Array Value:=>`);
array_numbers.forEach((number) => {
    if ((array_numbers.indexOf(number) % 2 != 0) && (number < 0)) {
        console.log(number);
    }
})
console.log(`--------------------------------------------------------------------------------------`);
