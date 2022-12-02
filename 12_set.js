
console.log(`Removed sduplicate element==>`);
const number_set = new Set(); // Set<Integer>my_set=new HashSet<Integer(means numbers)>
console.log(number_set);
number_set.add(11);
number_set.add(22);
number_set.add(33);
number_set.add(44)
number_set.add(55)
number_set.add(22); // adding duplicate element
console.log(number_set);

console.log(`Size of set is: ${number_set.size}`);
console.log(`===================================================`);
// // clear all set
// number_set.clear();
// console.log(number_set);

// second method to clear set or delete elements 
const is_deleted = number_set.delete(22);
//console.log(is_deleted);
console.log(number_set);
console.log(`=================has()=================================`);

const is_available = number_set.has(33);
console.log(is_available);

console.log(`=================typeof set=================================`);

console.log(typeof number_set);

console.log("======== Traversing using for of loop =========");
for (const element of number_set) {
    console.log(element); 
}

console.log(`========================================================`);

// Remove duplicate from array
const array_number = [11, 55, 3, 11, 40, 77, 55, 3];
const my_set= new  Set();   // new is a constructor
for (const element of array_number) {
    my_set.add(element);

}
console.log(array_number); 
console.log(my_set); 

console.log(`========================================================`);
















