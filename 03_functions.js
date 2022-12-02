
function display_name(my_name, age, pin_code, city) { 
    console.log(my_name,age,pin_code,city);
}
display_name("Mohit Sharma", 30, 1234567, "Pune");

var age = 30;
var first_name = "Reshma";
var last_name = "Patil";
var is_married = true;
var pin_code;

type_check(age);
type_check(first_name);
type_check(last_name);
type_check(is_married);
type_check(pin_code);

function type_check(value) { //var value
    var data_type = typeof value;
    console.log("Type of", " ", value, data_type); 
}

// function with return value
var message = log_message();
console.log(message);

function log_message() {
    return "Hello";
}
var add_return = add(10, 20);
console.log("Addition of number is", add_return);

var add_result = add("Good" , "Morning");
console.log(add_result);

console.log("Good" + "Afternoon");

function add(arg_1, arg_2) { // arg_1 = 10, arg_2 = 20
    var result = arg_1 + arg_2;
    return result;
}

function fun1() {
    console.log("Hello");   
}

fun1();
function fun1(){
    console.log("Hello");
}
fun2(20, 30);
function fun2(v1, v2) {
  console.log(v1, v2);
}

var result_2 =fun3();
function fun3() {
    return "Hello";
}

 var result_1 = fun4(70, 80);
function fun4(v4, v5) {
    return "30";
}
