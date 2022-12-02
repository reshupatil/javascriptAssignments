function Person(first_name,city){
this.first_name = first_name;
this.city = city;

}
const person_anil = new Person("Anil","Pune");
const person_radha = new Person("Radha","Pune");
const person_ash = new Person("Ashwini","Pune");
const person_sunil = new Person("Sunil","Pune");
const person_neha = new Person("Neha","Pune");


console.log(`${person_anil.first_name}`);
console.log(`${person_anil.city}`);

// prototype wala code
Person.prototype.country = "India";
console.log(`${person_anil.country}`);
console.log(`${person_neha.country}`);