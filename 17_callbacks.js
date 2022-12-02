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

//console.log(`================================================`);

// // or if we have two or more function
// function do_assignment(callback, call_back_ravi) {
//     console.log("Vinayak solving assignment.... ");
//     console.log("Completed assignment...");
//     callback();
//     call_back_ravi();
// }
// // Kumar Raut want to copy
// function copy_assignment() {
//     console.log("Copying assignment");
//     console.log("Copying assignment done");
// }
// // Ravi also want to copy

// function copy_assignment_1() {
//     console.log("Ravi Copying assignment");
//     console.log("Copying assignment done");
// }
// do_assignment(copy_assignment,copy_assignment_1);

