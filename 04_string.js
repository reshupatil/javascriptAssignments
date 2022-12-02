var greet = "Good Morning";
var char_in_greet = greet.charAt(3);
console.log(char_in_greet);

var fName = "Reshma";
var lName = " Patil";
var full_name = fName.concat(lName);
console.log(full_name);

var position = greet.indexOf("Morning");
console.log(position);

var uppercase = greet.toLocaleUpperCase();
console.log(uppercase);

var message = "  Good evening    ";
console.log("Before trim()" + message.length);

var trimmedString = message.trim();
console.log("After trim" + trimmedString.length);

var search = greet.search("Mor");
console.log(search);


var slice = greet.slice(5 ,8);
console.log(slice);

var substring = greet.substring(5, 8);
console.log(substring);

greet = "Hello Good Morning Buddy";
var words = greet.split("");
console.log(words.length);

greet.endsWith("Buddy");