console.log(`                        Assignment B                        `);
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`given array: ${array_numbers}`);
console.log(`-------------------------------------------------------------`);
console.log(`1. Find out all numbers which are greater than 50:=>`);
const array_filtered = array_numbers.filter((value)=>{
    return value>50;
});
console.log(array_filtered);
console.log(`-------------------------------------------------------------`);
console.log(`2. Find out all Even numbers:=>`);
const array_filter = array_numbers.filter((value)=>{
    return value%2 == 0;
});
console.log(array_filter);
console.log(`-------------------------------------------------------------`);
console.log(`3. Find out all Odd numbers:=>`);
const array_filter_1 = array_numbers.filter((value)=>{
    return value%2 != 0;
});
console.log(array_filter_1);
console.log(`-------------------------------------------------------------`);
console.log(`4. Find out all the numbers which are multiple of 5:=>`);
const array_filter_2 = array_numbers.filter((value)=>{
    return value%5 == 0;
});
console.log(array_filter_2);
console.log(`-------------------------------------------------------------`);
console.log(`5. Find out all the numbers which are between 20 and 50:=>`);
const array_filter_3 = array_numbers.filter((value)=>{
    return value > 20 && value < 50;
});
console.log(array_filter_3);
console.log(`-------------------------------------------------------------`);





