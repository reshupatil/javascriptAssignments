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
console.log("=======  Find out the ‘TCS’ employee details and log only name & company on console  ======="); 
array_employees.forEach((employee) => {
    if (employee.emp_company == "TCS") {
        console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
    }
});


console.log(` ======================get the only employee name===============`);

const array_employee_names=array_employees.map((employee)=>{
   return employee.emp_name;
})
console.log(array_employee_names);
console.log(`========================OR=======================`);
array_employees.map((employee)=>{
    console.log(employee.emp_name);
 })


