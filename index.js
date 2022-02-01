// Write your solution in this file!
const employee = {
name: { 
  name1: "Rodney",
  name2: "Anthony",
  name3: "Sarah"},
streetAddress: {
  line1: "Trotman",
  line2: "Himrod",
  line3: "Central",
},
};

function updateEmployeeWithKeyAndValue(employee,name, value) {
 const newEmployee = {...employee};
 newEmployee[name] = value;
 return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee,name, value){
   employee[name] = value;
   return employee;
};

function deleteFromEmployeeByKey(employee,name,key) {
    const newEmployeeList = {...employee};
    if (employee.name === employee.name) {
        delete newEmployeeList.name;
        return newEmployeeList;
    };
    newEmployeeList[name] = value;
    return newEmployeeList;
};

function destructivelyDeleteFromEmployeeByKey(employee,name, key){
    if (employee.key === employee.key) {
        delete employee.name;
        return employee;
    };
employee[name] = value;
return employee;
};