console.log(`                                         Assignment                          `);
console.log(`------------------------------------------------------------------------------------------`);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company ){
        
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(emp_anil);
console.log(emp_radha);
console.log(emp_rishi);
console.log(emp_sonali);
console.log(emp_monika);
console.log(emp_viny);
console.log(emp_mahi);

console.log(`================================================================================================`);

console.log(`1. Employees Working in "TCS" : `);

for (const element of array_employees) {
    if(element.emp_company == "TCS") {
        console.log(`Employee Name: ${element.emp_name}, Company: ${element.emp_company}`);
    }
}
console.log(`================================================================================================`);

console.log(`2. Employees whose working in Finance Department: `);
for (const element of array_employees) {
    if (element.emp_dept == "Finance"){
        console.log(`Employee Name: ${element.emp_name}, Department: ${element.emp_dept}`);
    }
}
console.log(`================================================================================================`);
console.log(`3. Employees whose Name start with "R" : `);

 for (const emp of array_employees) {
    if(emp.emp_name.startsWith("R")) {
        console.log(emp);
    }
}
console.log(`================================================================================================`);

console.log(`4. Employees whose salary is greater than 70000 : `);
for (const salary of array_employees) {
    if(salary.emp_salary > 70000) {
        console.log(`Employee Name :- ${salary.emp_name}, Company Name:- ${salary.emp_company}, Salary:- ${salary.emp_salary}`);
    }
}
console.log(`================================================================================================`);

console.log(`5. Employee whose salary is greater than or equal to 50000 and from IT departments : `);
for (const element of array_employees) {
    if(element.emp_salary >= 50000 && element.emp_dept == "IT") {
        console.log(element);
    }
}
console.log(`================================================================================================`);

console.log(`6. Employees from Company "Infy" :`);
for (const element of array_employees) {
    if (element.emp_company == "Infy") {
        console.log(element);
    }
}

console.log(`================================================================================================`);
