console.log("== Before ===");

function show_notification() {
    console.log("Notification");
}

setTimeout(show_notification, 5000);// 1 sec = 1000 millisecond means 5000 = 5 sec
// means this sentence call after 5 sec
console.log("== After setTimeout ===");

// Before
// Notification
// After

setTimeout(() => {
    console.log("Inside arrow function");
}, 7000); // call after 7sec
