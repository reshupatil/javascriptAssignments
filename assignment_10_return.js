console.log(`Assignment No. 03`);

console.log(`Check TCS Interview Eligibility: `);

var company_criteria = function(grad_score,hsc_score,ssc_score,candidate_name){
    var criteria = "Congrates! " + candidate_name + "You are eligible for TCS interview";
    var criteria_1 = "Sorry! Unfortunately You are not eligible for TCS interview";
    return grad_score>=70 && hsc_score >=80 && ssc_score>= 90 ? criteria : criteria_1;
}
console.log(`.................................................................`);
var result = company_criteria(80,86,90,"Reshma Patil, ")
console.log(`3.1: Graduation Score = 80%, HSC Score = 86%, SSC Score = 90%`);
console.log(result);

console.log(`.................................................................`);

var result = company_criteria(70,65,55, "Swati Jadhav, " )
console.log(`3.2: Graduation Score = 70%, HSC Score = 65%, SSC Score = 55%`);
console.log(result);

console.log(`.................................................................`);

var result = company_criteria(60,79,88, "Priyanka Jamdade, ")
console.log(`3.3: Graduation Score = 60%, HSC Score = 79%, SSC Score = 88%`);
console.log(result);

console.log(`.................................................................`);