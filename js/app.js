'use strict';

let table = document.getElementById('table');
let form = document.getElementById('form');

function Employee(name , Email , department){
  this.name = name;
  this.Email = Email;
  this.department = department;
  this.salary = Math.floor(Math.random()*(500 - 100)+100);
  Employee.all.push(this);
  setEmployee();
}
Employee.all= [];

function setEmployee(){
  let data = JSON.stringify(Employee.all);
  localStorage.setItem('NewEmployee',data);
}


function getEmployee(){
  let normalOpj = JSON.parse(localStorage.getItem('NewEmployee'));
  if (normalOpj!== null){
    Employee.all = normalOpj;
  }
  render();
}



function render (){
  for (let i = 0 ; i< Employee.all.length;i++){
    let trElData = document.createElement('tr');
    table.appendChild(trElData);
    let nameEl = document.createElement('td');
    let EmailEl = document.createElement('td');
    let department = document.createElement('td');
    let salary = document.createElement('td');

    trElData.appendChild(nameEl);
    trElData.appendChild(EmailEl);
    trElData.appendChild(department);
    trElData.appendChild(salary);

    nameEl.textContent= Employee.all[i].name;
    EmailEl.textContent = Employee.all[i].Email;
    department.textContent = Employee.all[i].department;
    salary.textContent = Employee.all[i].salary;

  }
}






form.addEventListener('submit',getValue);

function getValue(event){
  event.preventDefault();
  let name = event.target.name.value;
  let Email = event.target.Email.value;
  let department = event.target.department.value;

  new Employee(name , Email , department);
  render ();
  location.reload();
}
getEmployee();
