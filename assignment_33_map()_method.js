console.log(`                        Assignment A                        `);
const array_numbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`given array: ${array_numbers}`);

console.log(`1. Add 10 into each element:=>`);

const array_new = array_numbers.map((value)=>{
    return value+10;
});
console.log(array_new);
console.log(`-------------------------------------------------------------`);
console.log(`2. Square the each element:=>`);

const array_new1 = array_numbers.map((value)=>{
    return value*value;
});
console.log(array_new1);
console.log(`-------------------------------------------------------------`);
console.log(`3. Add the index value:=>`);
let index = 0;
const array_new2= array_numbers.map((value)=>{
    return value + index++;
});
console.log(array_new2);
console.log(`-------------------------------------------------------------`);