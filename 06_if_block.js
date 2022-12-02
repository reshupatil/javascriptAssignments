var  my_number = 10;
var withdraw_amount = 2000;
var bank_amount;
if (withdraw_amount>bank_amount) {  //&& my_number!= 0 || my_number%2 == 0
               if (bank_amount - withdraw_amount==500) {
                
               }
console.log(``);    
}

var age = 27;
if (age>=21) {
    console.log(`Hey ${age} Now you are eligible for marriage`);
    console.log(`Please start searching girl`);
} else{
    console.log(`Sorry! not eligible for marriage, please try next time`);
}
console.log(`Operation done!`);
console.log(`.......................................................`);
var  male_marriage_check = function(gender, age){
if (gender==="Male" && age >= 21) {
    console.log(`Hey boy you are eligible for marriage`);
    //return "Hey boy you are eligible for marriage";
 } else {
    return "Sorry you are not eligible for marriage";

 }
}
var result = male_marriage_check("male, 20");
console.log(result);
console.log(`.........................................................`);
var  male_marriage_check = function(gender, age){
    if (gender==="Male") {
        if (age >= 21) {
            return "Hey boy you are eligible for marriage";
        }else{
            return "Sorry you are not eligible for marriage";
        }

        //console.log(`Hey boy you are eligible for marriage`);
        
     } else {
        return "Sorry you are not eligible for marriage";
    
     }
    }
    var result = male_marriage_check("male, 20");
    console.log(result);

console.log(`.................................................................`);
// var age = 27;
// if (age>=21) {

//     if (educated && jOb){ 
        
//     }else {
        
//     }
//     console.log(`Hey ${age} Now you are eligible for marriage`);
//     console.log(`Please start searching girl`);
// } else{
//     console.log(`Sorry! not eligible for marriage, please try next time`);
// }
// console.log(`Operation done!`);

console.log(`..............................................................`);
// Grade design Function
function grade_design_new(score) {
    if (score >= 0 && score <= 100) { // true
        console.log(`Valid score`);
        if (score < 35) { // 34 < 35
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
grade_design_new(89);
// grade_design(-10);


   console.log(`........................................................................`);
// other method
function grade_design(score) {
    if (score >= 0 && score <= 100) { // true
        console.log(`Valid score`);
        if (score < 35) { // 34 < 35
            console.log(`Unfortunately you are failed`);
        } else{ 
            console.log(`Congrats you are passed`);
            if(score >= 35 && score <= 60){
                console.log(`Your grade is C`);
            }
            else{
                if (score>60 && score < 80) {
                    console.log(`Your grade is B`); 
                }
                else{
                    if (score>80 && score < 90) {
                        console.log(`Your grade is A`);    
                }
                else{
                    console.log(`Your grade is A+`);    
                }
            }
        }
    }
}
    else {
        console.log(`Please provide valid score`);
    }
}
grade_design(89);

console.log(`--------------------------------------------------------`);

