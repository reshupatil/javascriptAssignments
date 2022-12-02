
function count_chars(str) {
    count=0;
    for (var  index = 0; index < str.length; index++) 
    {
        var ch=str.charAt(index);
        if (ch=="a")
         {
            count++;
        }
        
    }
    
}
console.log(`Total Number of characters "a" available in string:->`)
count_chars(`I am Learning Javascript`)
console.log(`"I am Learning Javascript": ${count}`);
count_chars(`My favourite movie is Laggan`)
console.log(`"My favourite movie is Laggan": ${count}`);
// let str = "I am learning JavaScript";
// let counter = 0;
// for (let index = 0; index < str.length; index++) {
//     let char = str.charAt(index);
//     if (char == "a" || char == "A"){
//             counter =  counter + 1;
//         }
    
// }
// console.log(`Total number of characters "a" available in string
//  1: "I am learning JavaScript" is :  ${counter}
//  2: `);
  
//  console.log(`............................................................`);
//  let str_1 = "My favourite movie is laggan";
// let counter_1 = 0;
// for (let index = 0; index < str_1.length; index++) {
//     let char = str_1.charAt(index);
//     if (char == "a" || char == "A"){
//             counter =  counter + 1;
//         }
    
// }
// console.log(`2: "My favourite movie is laggan" is :  ${counter}`);
// console.log(`...............................................................`);

// const student_keys = Object.keys(student);
//  console.log(student_keys);

//  const student_values = Object.values(student);
//  console.log(student_values);

// const student_entries = Object.entries(student);
// console.log(student_entries);


// for (const key in student){
//     if(Object.hasOwnProperty.cell(student,key)){
//         const element = student[key]
//     }
// }
    
