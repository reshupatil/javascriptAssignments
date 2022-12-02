console.log("Assignment:");
console.log("Q1: ");

class Tata_motors {
    vehicle_name
    vehicle_cc
    vehicle_type
    seater
    vehicle_color
    constructor(vehicle_name, vehicle_cc, vehicle_type, seater, vehicle_color,) {

        this.vehicle_name = vehicle_name;
        this.vehicle_cc = vehicle_cc;
        this.vehicle_type = vehicle_type;
        this.seater = seater;
        this.vehicle_color = vehicle_color;
    }
}
const Tata_motors_tataVista = new Tata_motors("Tata Vista", "1200", "diesel", "5 seater", "White");
const Tata_motors_tataIndica = new Tata_motors("Tata Indica", "1000", "Petrol", "5 seater", "Gray");
const Tata_motors_tataNexon = new Tata_motors("Tata Nexon", "1500", "Petrol", "5 seater", "Black");
const Tata_motors_tataNano = new Tata_motors("Tata Nano", "800", "Petrol", "5 seater", "Red");
console.log(Tata_motors_tataVista);
console.log(Tata_motors_tataIndica);
console.log(Tata_motors_tataNexon);
console.log(Tata_motors_tataNano);

console.log(`==========================================================================================`);

console.log(`Q2:`);

class College {
    college_name
    university
    department
    address
    constructor(college_name, university, department, address) {
        this.college_name = college_name;
        this.university = university;
        this.department = department;
        this.address = address;
    }
}
const College_pdvp = new College("P.D.V.P. College", "Kolhapur", "Arts,Commerce,Science", "Tasgaon");

const College_yc = new College("Y.C. college", "Mumbai", "Arts,Commerce,Science", "karad");

const College_kbp = new College("K.B.P. College", "Kolhapur", "Arts,Commerce,Science", "Islampur");

const College_DADA = new College("DADA College", "Pune", "Engineering", "Sangli");

console.log(College_pdvp);
console.log(College_yc);
console.log(College_kbp);
console.log(College_DADA);
console.log("=============================================================================================");

console.log("Q.3");

let college_location = {
    College_pdvp: "Tasgaon",
    College_yc: "karad",
    College_kbp: "Islampur",
    College_DADA: "Sangli",

}
for (const key in college_location) {
    if (Object.hasOwnProperty.call(college_location, key)) {
        const element = college_location[key];
        console.log(`The College "${key}" locatated in "${element}".`);
    }
}
console.log("=============================================================================================");
console.log("Q3.1");

for (const key in College_pdvp) {
    if (Object.hasOwnProperty.call(College_pdvp, key)) {
        const element = College_pdvp[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("=================================================================================");

for (const key in College_yc) {
    if (Object.hasOwnProperty.call(College_yc, key)) {
        const element = College_yc[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("=================================================================================");

for (const key in College_DADA) {
    if (Object.hasOwnProperty.call(College_DADA, key)) {
        const element = College_DADA[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("========================2nd method (Sir)=========================================================");

function traverse_object(object_College) {
    for (const key in object_College) {
        if (Object.hasOwnProperty.call(object_College, key)) {
            const element = object_College[key];
            console.log(`${key} ${element}`);

        }
    }
}
traverse_object(College_pdvp);
console.log("=================================================================================");
traverse_object(College_yc);
console.log("=================================================================================");
traverse_object(College_kbp);
console.log("=================================================================================");
traverse_object(College_DADA);

console.log("=================================================================================");
//fn f(n-1) + (n-2)
// 0 1 1 2 3 5 8
let first_number = 0;
let second_number = 1;


for (let index = 0; index < 8; index++) {
    console.log(first_number);
    next_number = first_number + second_number;
    second_number = next_number;
    first_number = second_number;
}


let my_res = College instanceof College;
console.log(my_res);