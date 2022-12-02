function string_assignment() {
 var   given_string = "  Hey you are doing good, keep it up   ";
console.log(`1. Given string= ${given_string}`);

var  length_str = given_string.length;
console.log(`2. Length: ${length_str}`);

var trimmed_str = given_string.trim(); //please use this string going forward
console.log(`3. Trimmed string: ${trimmed_str}`);

var extra_spaces = length_str - trimmed_str.length;
console.log(`4. Extra spaces removed count :${extra_spaces}`);

var pos_of_last_char = trimmed_str.length - 1;
var last_char = trimmed_str.charAt(pos_of_last_char);
var first_char = trimmed_str.charAt(0);
console.log(`5. First and Last character : ${first_char} ${last_char}`); //${

var split_string = trimmed_str.split(" ");
var words_count = split_string.length;
console.log(`6. Words count : ${words_count}`);

var index_Of = trimmed_str.indexOf("good");
console.log(`7. Index of good: ${index_Of}`);

var substr = trimmed_str.substring(22);
console.log(`8. Substring: ${substr}`);

var ends_with = trimmed_str.endsWith("up");
console.log(`9. Ends With: ${ends_with}`);

var starts_with = trimmed_str.startsWith("Hey");
console.log(`9. Ends With: ${starts_with}`);

var last_index_Of = trimmed_str.lastIndexOf("y");
console.log(`11. Last index of : ${last_index_Of}`);

}
string_assignment();




