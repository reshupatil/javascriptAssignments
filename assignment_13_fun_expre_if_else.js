console.log(`Assignment No. 01:`);
console.log(`Q1:`);
var check_eligibility = function(age){
    if ( age === null || age === undefined) {
        console.log(`1. Invalid input ${age}`);
    } else {
        if (age>= 18) {
            console.log(`Congrats! you are eligible for voting, Age ${age} `);
        } else{
        console.log(`Sorry! you are not eligible for voting, Age ${age} `);
    }
    }
}
check_eligibility(45);
check_eligibility(undefined);
check_eligibility(17);
check_eligibility(8);
check_eligibility(20);
check_eligibility(null);
console.log(`......................................................................................`);

console.log(`Q2:`);

var gender_check = function(gender){
if(gender == "Male") { 
    console.log(`Your gender is, ${gender} `); 
} else {
    if(gender === "Female") {
        console.log(`Your gender is, ${gender} `); 
    } else {
        if(gender === "Others") {
            console.log(`Your gender is, ${gender} `); 
        } else {
            console.log(`Invalid gender ${gender}`);
        }
    }
} 

}
gender_check("Male");
gender_check("Others");
gender_check("Female");
gender_check("undefined");
gender_check("null");

console.log("...............................................................................");

console.log(`Q3: `);
var check_number = function(number){
    if ( number === null || number === undefined) {
        console.log(`${number} is Invalid input`);
    } else{
        if(number%2 === 0){
            console.log(`${number} is even number`);
        } else{
            console.log(`${number} is odd number`);
        }
    }
}
check_number(60);
check_number(51);
check_number(0);
check_number(5);
check_number(40);
check_number(NaN);
check_number(undefined);
check_number(null);

console.log(`.................................................................................`);


console.log(`Assignment No. 2: `);

var grade_check = function (score) {
    if (score >= 0 && score <= 100) { 
        console.log(`Valid score`);
        if (score < 35) {
            console.log(`Unfortunately you are failed`);
        } 
        else {
            console.log(`Congrats you are passed`);
            if(score <60 ){
                console.log(`Your grade is C`);
            } 
            if (score>60 && score < 80) {
                console.log(`Your grade is B`); 
            }
            if (score>=80 && score <90) {
                console.log(`Your grade is A`); 
            } 
            if( score>=90 ){
                console.log(`Your grade is A+`);  
            }
        }
    } else {
        console.log(`Please provide valid score`);
    }
}
grade_check(45);
console.log(`...................................................`);
grade_check(null);
console.log(`...................................................`);
grade_check(90);
console.log(`...................................................`);
grade_check(34);
console.log(`...................................................`);
grade_check(undefined);
console.log(`...................................................`);
grade_check(0);
console.log(`...................................................`);
grade_check(67);
console.log(`...................................................`);
grade_check(NaN);
console.log(`.........................................................................`);





















