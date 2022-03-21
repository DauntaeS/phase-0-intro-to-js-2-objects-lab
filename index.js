// Write your solution in this file!
const employee = {
    name: "James",
    streetAddress: "9th Street",
    occupation: "Software Engineer"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = Object.assign({}, employee)
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    const newEmployee = employee;
    return newEmployee;
}