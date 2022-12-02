// console.log(`Assignment No. 02: `);
// var check_leap_year = function(leap_year){
//     if(leap_year>=0){
//         console.log(`${leap_year} is a valid input`);

//         if(0 ==leap_year %4 && 0 !==leap_year%100 || 0==leap_year%400){
// console.log(`${leap_year} is a leap year`);
//         } else{ 
//         console.log(`${leap_year} not a leap year`);
//     }
// }
//      else{
//         console.log(`${leap_year} is a invalid input`);
//     }
// }
// check_leap_year(2020);
// console.log(`.........................................................................`);
// check_leap_year(1999);
// console.log(`.........................................................................`);
// check_leap_year(1600);
// console.log(`.........................................................................`);
// check_leap_year(2022);
// console.log(`.........................................................................`);
// check_leap_year(1945);
// console.log(`.........................................................................`);
// check_leap_year(null);
// console.log(`.........................................................................`);
// check_leap_year("Twenty Twenty");
// console.log(`.........................................................................`);
// check_leap_year(undefined);
// console.log(`.........................................................................`);
// check_leap_year(NaN);
// console.log(`.........................................................................`);
// check_leap_year(1750);
// console.log(`.........................................................................`);
var check_leap_year= function(leap_year) { // null
    if(leap_year === null || leap_year === undefined || isNaN(leap_year) ) {
         console.log(`1. Invalid input ${leap_year}`);
    } else {
         if(leap_year% 4 == 0 && leap_year % 100 !=0 || leap_year%400 ==0 ) {
             console.log(`yes Leap year.. ${ leap_year} `);
         } else{
             console.log(`Not a Leap year.. ${ leap_year} `);
         }
    }
 
  }
 
 check_leap_year(NaN);
  check_leap_year(null);
  check_leap_year(undefined);
 check_leap_year("Twenty Twenty");
  check_leap_year(1999);
  check_leap_year(2000);
  check_leap_year(1600);
  check_leap_year(1945);











