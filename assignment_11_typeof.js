

console.log(`Assignment 1: `);
console.log(`Q1:`);
var number;
var number1 = typeof(number);

function even_odd(number){
    if (typeof(number) === `number`){
        console.log(` ${number} is Valid Input.`);
        if (number %2 == 0){
            console.log(` ${number} is Even number.`);
        }else{
            console.log(`${number} is Odd number.`);
        }
    }else{
        console.log(`${number} is Invalid Input.`);
    }
}
even_odd(2);
console.log(`.............................................................................`);
even_odd(45);
console.log(`.............................................................................`);
even_odd(null);
console.log(`.............................................................................`);
even_odd(13);
console.log(`.............................................................................`);
even_odd(0);
console.log(`.............................................................................`);
even_odd("70");
console.log(`.............................................................................`);
even_odd(undefined);
console.log(`.............................................................................`);
even_odd("Ten");
console.log(`.............................................................................`);
even_odd(NaN);

console.log(`.............................................................................`);
console.log(`Assignment 1: `);
console.log(`Q2:`);
function greatest_number(num1, num2, num3) 
 {
  var result = 0;
  if (num1 > num2)
  {
    result = num1;
  } else
  {
    result = num2;
  }
  if (num3 > result) 
  {
    result = num3;
  }
  return result;
}

console.log(`56,70,80 : Is valid input, And the greatest number is: ${greatest_number(56,70,80)}`);

console.log("...............................................................................");
console.log(`20,-90,0 : Is valid input, And the greatest number is: ${greatest_number(-20,-90,0)}`);

console.log("...............................................................................");
console.log(`1000,undefined,0 : ${greatest_number(1000,undefined,0)} Is Invalid input, And the greatest number is: 1000 `);

console.log("...............................................................................");
console.log(`null,5,67 : Is Invalid input, And the greatest number is:  ${greatest_number(null,5,67)}`);

console.log("...............................................................................");
console.log(`NaN,60,70 : Is valid input, And the greatest number is: ${greatest_number(NaN,60,70)}`);

console.log("...............................................................................");

// console.log(`..................easy method for practice.......................`);

// var greatest_number = function(num1,num2,num3){
// if(num1>=num2 && num1 >= num3 ){
//     console.log(`${num1} is greatest number`);
// } else{
//     if(num2>=num1 && num2 >= num3){
//         console.log(`${num2} is greatest number`);
//     }else{
//         if(num3 >= num1 && num3 >= num2){
//             console.log(`${num3} is greatest number`);
//         }
//         }
//     }
// }

// greatest_number(56,70,80);
// greatest_number(20,-90,0);
// greatest_number(1000,undefined,0);
// greatest_number(null,5,67);
// greatest_number(NaN,60,70);








