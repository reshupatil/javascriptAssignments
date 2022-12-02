// 1. Function can be stored in a variable
let show = function() {
    console.log("Inside show function");
}
show();

//2. Function can be passed as an argument to another function
function do_assignment(callback) {
    console.log("Vinayak solving assignment.... ");
    console.log("Completed assignment...");
    callback();
}
// Kumar Raut want to copy
function copy_assignment() {
    console.log("Copying assignment");
    console.log("Copying assignment done");
}

do_assignment(copy_assignment);


//3. A function can return another function
function outer_fun() {
    console.log("Inside outer function...");
    let my_variable = function() {
        console.log("Hello I am good ");
    }
    return my_variable;
}
let inner = outer_fun();
inner();