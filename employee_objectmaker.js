var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

function Employee(name, empNumber, baseSalary, rating) {
  this.name = name;
  this.empNumber = parseInt(empNumber);
  this.baseSalary = parseInt(baseSalary);
  this.rating = parseInt(rating);
  this.sti = null;
  this.newSalary = this.totalBonus + this.baseSalary;
  this.totalBonus = this.sti * this.baseSalary;
};

/*
function employeeSlurper(empArray) {
  var newEmployee = new Employee(empArray[0], empArray[1], empArray[2], empArray[3]);
  return newEmployee;
};
*/

function employeeSlurper(empArray) {
/*
  var newEmployee = new Employee();
  newEmployee.name = empArray[0];
  newEmployee.empNumber = parseInt(empArray[1]);
  newEmployee.baseSalary = parseInt(empArray[2]);
  newEmployee.rating = parseInt(empArray[3]);
  console.log(newEmployee);
  //return newEmployee;
  */
  var newEmployee = new Employee(empArray[0], empArray[1], empArray[2], empArray[3]);
  return newEmployee;
};
function employeeSlurper(empArray) {
  var newEmployee = new Employee(empArray[0], empArray[1], empArray[2], empArray[3]);
  if (newEmployee.rating <= 2) {
    newEmployee.sti = 0;
  } else if (newEmployee.rating == 3) {
    newEmployee.sti = .04;
  } else if (newEmployee.rating == 4) {
    newEmployee.sti = .06;
  } else if (newEmployee.rating == 5) {
    newEmployee.sti = .10;
  };
  if (newEmployee.empNumber.length > 3) {
    newEmployee.sti += 5;
  } else if (newEmployee.baseSalary > 65000) {
    newEmployee.sti -= 1;
  } else if (newEmployee.sti > 13) {
    newEmployee.sti = 13;
  };
  newEmployee.newSalary = this.totalBonus + this.baseSalary;
  newEmployee.totalBonus = this.sti * this.baseSalary;
  return newEmployee;
};

console.log(employeeSlurper(atticus));
