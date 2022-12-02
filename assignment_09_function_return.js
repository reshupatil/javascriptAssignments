console.log(`Assignment No. 02`);

console.log(`Marriage eligibility check`);
console.log(`.......................................................................`);

function marriage_m(gender_m, age_m){
    var result = gender_m == "male" && age_m >=21 ? "congratulations! you are eligible for Marriage" : "Sorry! you are not eligible for marriage";
    return (result);
}

console.log(`condition Check for Male:`);
var a1 = marriage_m("male", 30);
console.log(`gender:"male" age:30 = ${a1}`);

var a1 = marriage_m("male", 20);
console.log(`gender: "male, age:20 =${a1}`);
console.log(`......................................................................`);

function marriage(gender, age){
    var result = gender == "female" && age >=18 ? "congratulations! you are eligible for Marriage" : "Sorry! you are not eligible for marriage";
    return (result);
}

console.log(`condition Check for female:`);
var a2 = marriage("female", 13);
console.log(`gender:"female" age:13 = ${a2}`);
var a2 = marriage("female", 22);
console.log(`gender:"female, age:22 = ${a2}`);

console.log(`.......................................................................`);
