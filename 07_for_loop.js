

for (var index = 0; index < 10; index++) {
    console.log(index);
    
}
console.log(`---------------------------------------------`);
// 10 8 6 4 2 0
// start 10 
// end  index > 0
// increment/decrement 2
for (var index = 10; index >= 0; index=index-2) { // index = 10 12 14
    console.log(index); // 10 12 14
    
}

// //0 2 4 6 8 10
// for (var index = 0; index < 10; index = index+2) {  // index++  index = index +1 
//     console.log(index); 
    
// }

// 10 9 8 7 6  5 4 3 2 1 0


for (let index = 10; index > 0; index--) { // index = 10  11 12
    console.log(index);  // 10 11 12
    
}
console.log(`------------------------------------------------------`);
console.log("======================");
//0 1 2 3 4 5 6 7 8 9 10 11 ---- 20
for (let index = 0; index <= 20; index++) {
    if(index%2 == 0){
        console.log(`Even number ${index}`);
    }else{
        console.log(`ODD number ${index}`); 
    }
    
}