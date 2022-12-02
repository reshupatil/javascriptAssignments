console.log(`                        Assignment "A"                        `);
console.log(`1.Create the object bank_sbi using literals with 4 properties:=>`);
const bank_sbi = {
bank_name: "State Bank of India",
customer_name: "Reshma Patil",
account_number: 1234567890,
ifsc_code: "SBI123456"
}
const bank_location = {
    street: "Karad Road",
    city: "Islampur",
    pin_code: 112233
}

const bank_sbi_cloned = Object.assign({ }, bank_sbi);
console.log(bank_sbi_cloned);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`2.Bank Location using literals with properties street,city,pin_code:=>`);

const location_obj = Object.assign({ }, bank_location);
console.log(location_obj);
console.log(`--------------------------------------------------------------------------------------`);
console.log(`3 a. cloning object using object assign:=>`);
 const assign_obj = Object.assign({}, bank_sbi);
 console.log(bank_sbi_cloned);
 console.log(location_obj);
 console.log(`--------------------------------------------------------------------------------------`);
 console.log(`3 b. cloning object using spread operator:=>`);
 let me = {...bank_sbi}
console.log(me); 
 console.log(`--------------------------------------------------------------------------------------`);
 console.log(`4. create the object using literals:=>`);
 const rate_of_interest = {
home_loan_interest: "7% ",
personal_loan_interest: "5%",
due_interest:"6%"
 }

 rate_of_interest_cloned = Object.assign({ },rate_of_interest);
 console.log(rate_of_interest_cloned);
 console.log(`--------------------------------------------------------------------------------------`);
console.log(`5. Merge Bank, Bank location and Rate of Interest:=>`);
 
 sbi_details = Object.assign({}, bank_sbi, bank_location, rate_of_interest);
 console.log(sbi_details);
 console.log(`--------------------------------------------------------------------------------------`);
 
 
 
 //  const array_original = [1, 2, 3, 4, 6, 77, 88 ];
//  //let array_copy = array_original;
//  let array_copy = [...array_original]
//  console.log(array_original);
//  console.log(array_copy);
//  // or
//  // console.log(array_original, array_copy);
 
//  array_original.push(9999);
//  console.log(array_original);
//  console.log(array_copy)

 // // Cloning an object
// const emp_cloned = Object.assign({ }, employee); // assign(target, source)
// console.log(emp_cloned);

// // Merge an objects - employee and address 
// const merged_obj =  Object.assign({}, employee, address);
// console.log(merged_obj);
