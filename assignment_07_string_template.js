function word_length_square(word)
{
    var word_length=word.length;
    var length_square=word_length * word_length;
    console.log(`Length of word = ${word_length}, Square of length = ${length_square}`);
}
word_length_square("Javascript");
word_length_square("Google");
word_length_square("Developer");

console.log("................................................................");

function string_length()
{
 var given_string="I am Angular Developer";
 console.log(`Given String = ${given_string}`);

 var given_string = given_string.split("");
console.log(`Splitted String = ${given_string}`);

var reverse_char = given_string.reverse();
console.log(`Reverse Splitted String Is = ${reverse_char}`);

var given_string_length = reverse_char.join("");
console.log(`Reverse String is = ${given_string_length}`);

var given_string_length = given_string.length;
console.log(`Length of String = ${given_string_length}`);


var given_string="I am Angular Developer";
var words = given_string.split(" ");
var total_words = words.length;
console.log(`Total words in a String = ${total_words}`);

var result = given_string_length / total_words;
console.log(`Length divided by total words = ${result}`);

var result=given_string_length * total_words;
 console.log(`Length multiply by total words = ${result}`);

}
 string_length();
 console.log("................................................................");