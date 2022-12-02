// print numbers from 1 to 10 
var index = 0;
while (index <= 10){
    console.log(index);
    index ++;
}
console.log(`====================2nd Method========================`);
var counter =0;
do{
console.log(counter);
counter++;
} while (counter <10);
console.log(`==========================================================`);
// var str = "JavaScript"; // a e i o u
// var strLength = str.length;
// var index = 0;
// var count = 0;
// while (index< length) {
//     var char = str.charAt(index);
//     if(char == "a" || char == "A" || char == "e" || char == "E" ){
//         count++;
//     }
//     index++;
// }
console.log(`================================================`);
// var str = "JavaScript"; //aeiou   Element
// var strLength = str.length;
// var index = 0;
// var count = 0;
// while(index<length){
//     var char = str.charAt(index);
//     if(char =="a" || char == "A" || char =="e" || char =="E" ||) {
//         count++;
//     }
//     index++;
// }
console.log(`=====================================================`);
var str = "JavaScript"; //aeiou   Element
var index = 0;
var result = 0;
while(index<str.length){
    var char = str.charAt(index);
    if(char =="a" || char == "A" || char =="e" || char =="E") {
        result++;
    }
    index++;
}



//assignment q 2.5
function is_even_positioned(my_string) {
    console.log(`Even Positioned Characters`);
    var my_string = "Hard work always pays back";
    for (let index = 0; index < my_string.length; index++) {
        var char = my_string.charAt(index);
        if (index % 2 == 0 && char != "") {
            console.log(`${my_string.charAt(index)}`);
        }
    }
}
var my_string = "Hard work always pays back";
is_even_positioned(my_string)

// let index = 0; 

// for (index ; index < 3 ; index++);{
//     console.log(index);
// }
// for (let i = 1; i< 5 ; i++){
//     if (i === 3) continue;
//     console.log(i);
// }