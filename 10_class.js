class Person {
    first_name
    last_name
    age
    address
    constructor(first_name, last_name, age, address) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.address = address;
    }
    details(){
        console.log(`${this.first_name} ${this.last_name} ${this.age} ${this.address}`);
    }
}
const person_mohit = new Person("Mohit", "Sharma", 31, "Pune Wakad");
const person_chaitali = new Person("Chaitali", "kamble", 22, "satara");
const person_Reshma = new Person("Reshma", "Patil", 30, "Sangli");

console.log(person_mohit);
console.log(person_chaitali);
console.log(person_Reshma);

person_mohit.details();
person_Reshma.details();
person_chaitali.details();


let my_res = person_mohit instanceof Person;
console.log(my_res);
