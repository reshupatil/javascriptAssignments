console.log(`                        Assignment D                        `);
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

console.log(`----------------------------------------------------------------------------------`);
console.log(`1. All the employees from "wipro" company:=>`);
const array_emp_wipro =  array_employees.filter( (employee) => {
    return employee.emp_company=="Wipro";
});
array_emp_wipro.forEach((employee)=> {
    console.log(employee);
});
console.log(`----------------------------------------------------------------------------------`);
console.log(`2. All the employees from "IT" or "HR" dept:=>`);
const array_dept = array_employees.filter(employee => {
    return employee.emp_dept=="IT" || employee.emp_dept=="HR";
   
});
array_dept.forEach((employee)=> {
    console.log(employee);
 });

console.log(`-------------------------------------------------------------`);
console.log(`3. All the employees whose emp id's are greater than 50:=>`);
const array_id = array_employees.filter((employee) =>{
    return employee.emp_id>50;

});
array_id.forEach((employee) =>{
console.log(employee);
});

console.log(`-------------------------------------------------------------`);
console.log(`4. All the employees whose name starts with letter "A" or "V" or "M":=>`);
const array_filter = array_employees.filter((employee) =>{
    if (employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")){
     return employee;
  }
});
array_filter.forEach((employee) =>{
    console.log(employee);

});
console.log(`-------------------------------------------------------------`);
console.log(`5. Average salary of the employees:=>`);
const sum_emp_salary = array_employees.reduce((total,employee) => {
    return total+employee.emp_salary;

},0);
Average=sum_emp_salary/array_employees.length;

console.log(Average);


console.log(`-------------------------------------------------------------`);
console.log(`6) Find the average salary for "IT" department:`);

const emp_of_it_dept=array_employees.filter((employee) => {
    return employee.emp_dept=="IT";
})

 const sum_of_salary_of_it_dept= emp_of_it_dept.reduce((total,employee) =>{
return total+employee.emp_salary;

  },0)
       Average=sum_of_salary_of_it_dept/emp_of_it_dept.length
       console.log(`Average of IT dept: ${Average}`);
       console.log(`-------------------------------------------------------------`);

       