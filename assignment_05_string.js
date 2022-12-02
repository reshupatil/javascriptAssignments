
console.log("Assignment NO.2:");

console.log(`"  Hey you are doing good, keep it up   "`);
console.log("...................................................................");

greet = "  Hey you are doing good, keep it up  ";
var words = greet.split("");
console.log("Length of String is :",words.length);

console.log("......................................................................");

 var message = `  "Hey you are doing good, keep it up"  `;
 console.log("After Removing Space:"+message.trim());
 
 console.log("....................................................................");

  var len = greet.length;

  var strt=greet.trim();

  var new_len = strt.length;

 var diff = len-new_len;

  console.log(`4.Total space Removed : ${diff}`)

console.log(".......................................................................");

 var first_character = "H";
 var last_character = "P";
 console.log(`First Character: ${first_character}, Last Character:${last_character}`);

console.log("........................................................................");

greet = "Hey you are doing good, keep it up";
var words = greet.split(" ");
console.log(`Total number of words:${words.length}`);

console.log("..........................................................................");

 var position = greet.indexOf("good");
 console.log(`Index of good:${greet.indexOf("good")}`);

console.log("..........................................................................");

var substring = greet.substring(22);
console.log(`Substring starting from Index 22 :`,substring);

console.log("...........................................................................");

console.log(`Is string ends with word "up":`,greet.endsWith("up"));

console.log("...........................................................................");

console.log(`Is string starts with word "Hey" after trimming:`, greet.startsWith("Hey"));







