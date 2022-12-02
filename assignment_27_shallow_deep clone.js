console.log(`                   Assignment 01:                      `);
console.log(`====================1. Shallow clone==========================`);
const array_original = [20, 3, 4, 56, 90, 400, 49];
array_copy = array_original;
console.log(array_original);
console.log(array_copy);

console.log(`==========================================================`);

console.log(`2: Update Cloned array with values 55 & 66:->`);
const after_spilce_insert_middle = array_original.splice(4, 0, "55", "66");
console.log(array_original);

console.log(`==================== deep clone=================================`);

let array_nums = [...array_original]; // Deep Copy


array_original.push(10, 25);

console.log(array_original);
console.log(array_nums);

console.log(`==========================================================`);
console.log(`3. Merge array with array_even:->`);
const array_even = [2, 30, 14, 8];

console.log(`${array_original} ${array_even}`);

console.log(`=======================Employee Info=========================`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    adrress: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(` 5. Employee Details: `);
console.log(`Adrress = ${employee_info.adrress.locality.colony} ${employee_info.adrress.locality.street}`);
console.log(`city = ${employee_info.adrress.city}, state =  ${employee_info.adrress.state}, country =${employee_info.adrress.country}`);
console.log(`Mobiles = ${employee_info.mobiles}`);

console.log(`==============================================================`);
console.log(` 6. Update cloned object street: `);
let value_original = "Kanch Pokli, 431202";
let value_copy = value_original;
console.log(`Street before update : ${value_original}`);

value_original = "Pune, 431202";
console.log(`Street After update : ${value_original}`);
console.log(`==============================================================`);
console.log(`Update Mobiles: `);
let mobile_original = "+91 8600 3456 88,1800- 4567 32,+91- 9096 5678 77";
let mobile_copy = mobile_original;
console.log(`Mobiles before Update: ${mobile_original}`);

mobile_original = "+91 7387 1829 71, 1800- 4567 32, +91- 9096 5678 77";
console.log(`Mobiles After Update: ${mobile_original}`);

console.log(`==============================================================`);

console.log(`7. Update Using JSON.stringify:`);
const employee_details = JSON.parse(JSON.stringify(employee_info));
employee_details.salary.july_month = "80,000INR";
employee_details.adrress.country = "United Kingdom";
console.log(`Original July month Salary: ${employee_info.salary.july_month}`);
console.log(`Updated July month Salary: ${employee_details.salary.july_month}`);

console.log(`Original Country: ${employee_info.adrress.country}`);

console.log(`Updated Country: ${employee_details.adrress.country}`);










