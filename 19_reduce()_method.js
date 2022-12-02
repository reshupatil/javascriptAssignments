const array_numbers = [20, 30, 4, 5, 11, 7, 8]; // ==> one_value

const sum =  array_numbers.reduce((currentTotal, value) => {
    return currentTotal + value;
}, 100);
console.log(sum);

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

const array_employees= [ emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi ];

// find the average salary of tcs employee
//1st use filter then reduce
const tcs_employees = array_employees.filter((employee)=>{
    return employee.emp_company=="TCS";
});
const tcs_emp_salary_sum = tcs_employees.reduce((total, emp)=>{
    return total + emp.emp_salary;
});


const sum_employees_salary = array_employees.reduce( (current_total, employee)=> {
    return current_total+employee.emp_salary;
},0);
console.log(sum_employees_salary);









