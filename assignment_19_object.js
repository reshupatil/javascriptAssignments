console.log("Assignment:->");
const teacher = {
    first_name: "Reshma",
    last_name: "Patil",
    mobile: "738 718 2971",
    email: "abc123@gmail.com",
    work_experience: `5 years`,
    degrees: {
        degree_1: `engineering : CSC`,
        degree_2: `PHD: Adv Computing`,
        degree_3:`Angular`,
     },
     certificates:{
        certificate_1:`Hacker Rank Participation`,
        certificate_2: `certificate in Adv Programming`,
        certificate_3: `certificate in IFE course`,
        certificate_4: `certificate in Angular`,
    },
    total_degrees: function () {
        return `${this.degrees.degree_1}, ${this.degrees.degree_2}, ${this.degrees.degree_3}`;
    }
}
console.log("Teacher Details:");
console.log(teacher.first_name);
console.log(teacher.last_name);
console.log(teacher.mobile);
console.log(teacher.email);
console.log(teacher.work_experience);
console.log(teacher);

console.log(`.............................................................................................................................`);
console.log("Added nested object 'Degrees':- ");
console.log(teacher.degrees.degree_1);
console.log(teacher.degrees.degree_2);
console.log(teacher.degrees.degree_3);
console.log(teacher.degrees);

console.log(`.............................................................................................................................`);

console.log("Added nested object 'Certificates':- ");
console.log(teacher.certificates.certificate_1);
console.log(teacher.certificates.certificate_2);
console.log(teacher.certificates.certificate_3);
console.log(teacher.certificates);

console.log(`.............................................................................................................................`);

console.log("Added Function value:- ");
let details = teacher.total_degrees();
console.log(`Teachers Degrees are:- ${details}`);

console.log(`.............................................................................................................................`);

console.log("Added New property 'City':- ");
teacher.city = "Islampur"
console.log(teacher.city); 

console.log(`.............................................................................................................................`);

console.log("Modified existing Name property:- ");
teacher.first_name = "Anjali";
console.log(teacher.first_name);
console.log(teacher);

console.log(`.............................................................................................................................`);

console.log("Deleted one certificate from nested object:- ");
delete teacher.certificates.certificate_3;
console.log(teacher.certificates);


console.log(`.............................................................................................................................`);

console.log("Added new certificate in nested object:- ");
teacher.certificates.certificate_3 = "Certificate in JavaScript";
console.log(teacher.certificates.certificate_3)
console.log(teacher.certificates);
console.log(`.............................................................................................................................`);

console.log("The nested object Certificates on console:- ");
console.log(teacher.certificates);