console.log(`                            Assignment "C"                       `);

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
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
console.log(`---------------------------------------------------------------------------------------`);
console.log(`1. Employees whose work in "TCS":=>`);
array_employees.forEach((employee) => {
    if (employee.emp_company == "TCS") {
        console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
    }
});
console.log(`---------------------------------------------------------------------------------------`);
console.log(`2. Employee whose salary is greater than or equal to 50000:=> `);
array_employees.forEach((employee) => {
    if (employee.emp_salary >= 50000) {
        console.log(`ID: ${employee.emp_id}, Name: ${employee.emp_name},dept:  ${employee.emp_dept}, Salary: ${employee.emp_salary},  Company: ${employee.emp_company}`);    }
});
console.log(`---------------------------------------------------------------------------------------`);
console.log(`3. Sum of all employees Salary:=> `);
let salary_sum=0
array_employees.forEach((sum)=>{
   
    salary_sum =salary_sum+sum.emp_salary;  
});
console.log(salary_sum);
console.log(`---------------------------------------------------------------------------------------`);
console.log(`4.All employees average salary:=>`);

let sal_avg=0
array_employees.forEach((avg)=>{
     sal_avg=salary_sum/(array_employees.length)
})
console.log(sal_avg);

console.log(`---------------------------------------------------------------------------------------`);
console.log(`5. "IT" and "HR" dept employees whose salary is greater than equal to 75000:=>`);
array_employees.forEach((emp)=>{
    if((emp.emp_dept=="IT"|| emp.emp_dept=="HR")&&(emp.emp_salary>= 75000)){
        console.log(emp);
    }
})