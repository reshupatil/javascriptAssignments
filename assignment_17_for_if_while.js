const my_string = "Hard work always pays back";
let counter = 0;
function count_spaces(String_with_spaces){
for (let index = 0; index < String_with_spaces.length; index++) {
    let char = String_with_spaces.charAt(index);
    if ( char ==" "){
counter = counter+1;
    }   
}
}
count_spaces(my_string);

console.log(`total spaces is ${counter}`);
console.log(`=========================================`);

let reverse_str ="";
function reverse_string(string_to_reverse) {
for (let index =string_to_reverse. length-1; index >= 0; index--) {
   let char = string_to_reverse.charAt(index);
   reverse_str=reverse_str.concat(char);
    
}    
}
reverse_string(my_string);
console.log(`Reverse String : ${reverse_str}`);
console.log(`===========================================`);

// how to check prime number

function is_prime_number(check_prime) {
for (let index =2; index<check_prime; index++){
    if(check_prime%index ==0){
        return false;
    }
}
return true;
}
// console.log(is_prime_number(7));
// console.log(is_prime_number(9));
// console.log(is_prime_number(3));

console.log(`==============================================`);
//program to find first 10 numbers
console.log(`1st 10 prime numbers:->`);


let counter_prime =0;
let index =2;
while (counter_prime<=10){
    if(is_prime_number(index)){
        counter_prime++;
        console.log(index);
    }
    index++;
}












