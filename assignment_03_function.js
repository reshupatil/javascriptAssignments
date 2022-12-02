var Ques1="Q1->";
console.log(Ques1);

function display_name(my_name,message) {
    console.log(my_name);
    console.log(message);
}
display_name("Hi I am Reshma Patil", "Now I am learning JavaScript");

 console.log(".....................................................");
 var Ques2="Q2->";
 console.log(Ques2);

function full_name(first_name, last_name) {
    var result = first_name + last_name;
    console.log("Full Name :", result);
}
var add_return = full_name("Reshma ", "Patil");

 console.log("......................................................");
 var Ques3="Q3->";
 console.log(Ques3);

 function swap_values(cricket,industry){
 console.log("Before Swapping :",cricket,industry );
}
swap_values("Virat", "Anushka");

function swap_values1(cricket,industry){
    var temp = cricket;
    var cricket = industry;
    var industry = temp;
    console.log("After Swapping :", cricket,industry);
}
swap_values1("Virat", "Anushka");

console.log("........................................................");

function values(value1, value2) {
    console.log("Before Swapping :", value1, value2);
    
}
values("1000" , "2000");

function values1(value1, value2) {
    var temp = value1;
    var value1= value2;
    var value2 = temp;
    console.log("After Swapping :" , value1, value2);

}
values1("1000" , "2000");

console.log("...................................................");

var Ques4="Q4->";
 console.log(Ques4);

 function add_three_numbers(arg_1, arg_2, arg_3){
    var result= arg_1 + arg_2 + arg_3;
    console.log("Addition of Three Numbers :", result);
    return result;
 }
var add_return= add_three_numbers(10.23, 600, 40);

function add_three_values(arg1, arg2, arg3) {
    var result= arg1 + arg2 + arg3;
    console.log("Addition of Three Values :", result);
}
 var add_return = add_three_values("Hello " , "Good " , "Morning...");

console.log(".......................................................");







