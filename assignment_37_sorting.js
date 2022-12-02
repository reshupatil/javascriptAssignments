console.log(`                               Assignment A                `);

const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given Array is : ${array_roll_numbers}`);
console.log(`---------------------------------------------------------`);
console.log(`1. Reverse the array:=>`);
array_roll_numbers.reverse();
console.log(`After reverse: ${array_roll_numbers}`);

console.log(`---------------------------------------------------------`);
console.log(`2. using sort() method as it is :=>`);
array_roll_numbers.sort();
console.log(`After Sorting ${array_roll_numbers}`);

console.log(`---------------------------------------------------------`);

console.log(`3. Sort array in ascending order:=>`);
array_roll_numbers.sort((a, b) => { 
    return a > b ? 1 : -1;
});
console.log(array_roll_numbers);
console.log(`---------------------------------------------------------`);

console.log(`4. Sort array in descending order without using reverse method:=>`);
array_roll_numbers.sort((a, b) => { 
    return a > b ? -1 : 1;
});
console.log(array_roll_numbers);

console.log(`---------------------------------------------------------`);
console.log(`5. Sort array in descending order using reverse method:=>`);

array_roll_numbers.sort((a, b) => { 
    return a > b ? -1 : 1;
});
console.log(`After Sorting: ${array_roll_numbers}`);

array_roll_numbers.reverse();
console.log(`After Reverse: ${array_roll_numbers}`);
console.log(`---------------------------------------------------------`);
console.log(`6. Greatest number from the array:=>`);
let greatestNum = array_roll_numbers[0];
for (let index = 1; index < array_roll_numbers.length; index++) {
    if(array_roll_numbers[index] > greatestNum){
        greatestNum = array_roll_numbers[index];
    }
};
console.log(greatestNum);

console.log(`---------------------------------------------------------`);
console.log(`7. smallest number from the array:=>`);
let smallestNum = array_roll_numbers[0];
for (let index = 1; index >array_roll_numbers.length; index++) {
    if(array_roll_numbers[index] < smallestNum){
        smallestNum = array_roll_numbers[index];
    }
};
console.log(smallestNum);
console.log(`---------------------------------------------------------`);
console.log(`8. Remove duplicate from the array:=>`);
function removeDuplicates(array_roll_numbers) {
    return array_roll_numbers.filter((item,index) => array_roll_numbers.indexOf(item) === index);
}
console.log(`Remove duplicates from array:- `);
console.log(removeDuplicates(array_roll_numbers));
console.log(`---------------------------------------------------------`);