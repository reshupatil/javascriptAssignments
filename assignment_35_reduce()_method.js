console.log(`                        Assignment C                        `);
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given array: ${array_numbers}`);
console.log(`-------------------------------------------------------------`);
console.log(`1. Sum of all numbers:=>`);
const sum =  array_numbers.reduce((currentTotal, value) => {
    return currentTotal + value;
}, 0);
console.log(sum);
console.log(`-------------------------------------------------------------`);
console.log(`1. Sum of all even numbers:=>`);
const sum_of_even_num = array_numbers.filter((value)=>{
    return value%2 == 0; 
}).reduce((current_total,value) => {
    return current_total + value;
});
console.log(sum_of_even_num);
console.log(`-------------------------------------------------------------`);
