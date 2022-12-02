let age = 30;
const person = {
    first_name: `Reshma`,
    last_name: `Patil`,
    mobile: `738 718 2971`,
    adhar: `1234 5789 01234`,
    address : {
        city : `Islampur`,
        state : `MH`,
        country : `India`,
        district : `Sangli`,
        taluka : `Walwa`,
        village : `Takari`,
        pin : `415313`,
    },
    details : function (){
        return`person details ${this.first_name} ${this.last_name} ${this.mobile} ${this.adhar}`;
 //other method --> // console.log(`person details ${this.first_name} ${this.last_name} ${this.mobile} ${this.adhar}`);
    }
} 
console.log(person.first_name);  // access the property
console.log(person.last_name);
console.log(person.mobile);
console.log(person["adhar"]); // or we can use [""]

person.pan_card = "CDBK123456"; // adding new property
console.log(person);
person.father_name = "Shahaji";
console.log(person);
person.mother_name = "Rekha";
console.log(person);

person.first_name = "Anjali"; //update
console.log(person);

delete person.adhar; // delete property
console.log(person);

console.log(person.isMarried);

//person.details();  // function call for console
let details =person.details(); // function call for return
console.log(details);

console.log(typeof person.address);
console.log(person.address.city, person.address.village);
person.address.pin_code = 123456;
console.log(person.address);

console.log(`================================================================`);
const student = {
    first_name: `Mohit`,
    last_name: `Sharma`,
    age : 31,
address: `Pune Wakad`,
marks :`80%`,
}
const student_keys = Object.keys(student);
 console.log(student_keys);

 const student_values = Object.values(student);
 console.log(student_values);




const student_entries = Object.entries(student);
console.log(student_entries);
for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(`${key}  ${element}`);
    }
}

const is_first_name_available = "first Name"in student;
console.log(`Is Available ${is_first_name_available}`);

const is_first_name_2_available = "first Name_2"in student;
console.log(`Is Available ${is_first_name_2_available}`);

