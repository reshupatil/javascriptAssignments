// factorial of a number 5! = 1*2*3*4*5 =>>  1 * 2 =2 * 3 =6
var result =1;
for (let index = 1; index <= 5; index++) { // index 3
    result = index * result; // 1*2 = 2 * 3 = 6
//console.log(result);
}
console.log(result);

console.log("================Second Method===============================");


function factorial (number){
    var result = 1;
    for (let index = 1; index <= number; index++) {
        result = index * result;
        
    }
    return result;

}
console.log(`factorial of 5 is ${factorial(5)}`);
console.log(`factorial of 6 is ${factorial(6)}`);
console.log(`========================================================`);

// Prime number 11 --> 11 %10 ==0
function prime_number (Prime){
    for (let index = 2; index < Prime; index++) {
        if(Prime% index == 0){
            return "Not a Prime Number";
        }
}
return "Prime Number";
}
console.log(`Is ${prime_number(3)}`);
console.log(`Is ${prime_number(4)}`);
console.log(`Is ${prime_number(9)}`);
console.log(`Is ${prime_number(20)}`);
console.log(`Is ${prime_number(17)}`);
console.log(`Is ${prime_number(6)}`);
console.log(`Is ${prime_number(19)}`);