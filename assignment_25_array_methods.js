console.log(`                          Assignment 02                    `);

const array_numbers = ["20", "31", "40", "25", "23", "11","29", "9","60","2","11"];
console.log(`given array : ${array_numbers}`);
console.log(`==================================================================================`);
console.log(` Q1: Total length:->`);

console.log(`Total Elements is : ${array_numbers.length}`);

console.log(`===================================================================================`);
console.log(` Q2: first & last elements:-> `);

let array_1 = array_numbers[0];
let array_2 = array_numbers[3];
let length_array = array_numbers.length - 1
console.log(`First element: ${array_1}, Last element: ${array_numbers[length_array]}`);
console.log(`==================================================================================`);
console.log(` Q3: Thirst last elements using length property:-> `);

let length_array_1 = array_numbers.length - 3
console.log(`Thirst Last element: ${array_numbers[length_array_1]}`);

console.log(`==================================================================================`);
console.log(`Q4: log the element from end to start position:->`);
for (let index =array_numbers.length-1; index >= 0; index--) {
    console.log(array_numbers[index]);
}

console.log(`==================================================================================`);
console.log(`Q5: Even numbers:-> `);

for (const element of array_numbers) {
    if(element%2==0) {
        console.log(element);
    }
}
console.log(`==================================================================================`);
console.log(`Q6: Odd numbers:-> `);

for (const element of array_numbers) {
    if(element%2!=0) {
        console.log(element);
    }
}
console.log(`==================================================================================`);
console.log(`Q7: Even positioned elements:-> `);

for (let index = 0; index < array_numbers.length; index++) {
    if(index%2==0) {
    const element = array_numbers[index];
    console.log(element);
}
}
console.log(`==================================================================================`);
console.log(`Q8: Odd positioned elements:-> `);

for (let index = 0; index < array_numbers.length; index++) {
    if(index%2!=0) {
    const element = array_numbers[index];
    console.log(element);
}
}
console.log(`==================================================================================`);
 console.log(`Q9: sum of all elements:->`)
//  let sum=0;
//  //array_numbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ]
//  for (let index = 0; index < array_numbers.length; index++) {
//      sum = sum+array_numbers[index];
//  }
//  console.log(sum);

// let sum=0;
// array_numbers = [ 20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ]
// for (const element of array_numbers) {
//     sum = sum+element;
// }
// console.log(sum);
 console.log(`==================================================================================`);
console.log(`Q10: Prime numbers:-> `);

for (const element of array_numbers) {
    let isPrime = prime_number(element);
    if(isPrime) {
        console.log(element);
    }
}
function prime_number(prime) {
    for (let index = 2; index < prime; index++) {
        if(prime%index == 0 ) {
            return false;
        } 
    }
    return true;
}
console.log(`==================================================================================`);
console.log(`Q11: Multiple of 5:-> `);
for (let index = 0; index < array_numbers.length; index++) {
    if(array_numbers[index] %5 == 0){
        const element = array_numbers[index];
        console.log(element);
    }
    
}
console.log(`==================================================================================`);
console.log(`Q12: Is 115 available:-> `);

let check = array_numbers.includes(115);
console.log(`Is number 115 available in given array :- ${check}`);



console.log(`==================================================================================`);
console.log(`Q13: Is 23 available:-> `);

let check1 = array_numbers.includes(23);
console.log(`Is number 23 available in given array :- ${check1}`);

console.log(`==================================================================================`);


console.log(`==================================================================================`);
