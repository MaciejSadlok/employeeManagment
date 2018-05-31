import { Injectable } from '@angular/core';
import { Employee } from '../employeeClass';
import { DeletedEmployee } from '../deletedEmployeeClass';

@Injectable()
export class DisplayEmployeeService {

  term: any;
  deletedTerm: any;
  employees = [
    {name: 'Maciej Sadlok', hours: 150, ratePerHour: 231.01, summaryBrutto: 38652, summaryNetto: 22523, id: 0},
    {name: 'Tomasz Borowski', hours: 151, ratePerHour: 555.01, summaryBrutto: 23166, summaryNetto: 17000, id: 1},
    {name: 'Jacek Manelski', hours: 211, ratePerHour: 321.01, summaryBrutto: 36663, summaryNetto: 25523, id: 2},
    {name: 'Michał Kalemba', hours: 177, ratePerHour: 765.01, summaryBrutto: 38652, summaryNetto: 28523, id: 3},
    {name: 'Giovanni Dziadzia', hours: 251, ratePerHour: 432.01, summaryBrutto: 51652, summaryNetto: 38523, id: 4},
    {name: 'Człowiek Sztos', hours: 355, ratePerHour: 500, summaryBrutto: 93652, summaryNetto: 65000, id: 5},
  ];
  deletedEmployeeArray = [
    {name: 'Dziki Don', hours: 1550, ratePerHour: 231.01, summaryBrutto: 33333, summaryNetto: 22523, id: 6}
  ];
   
  constructor() { }

  addEmployee(name, hours, ratePerHour, summaryBrutto, summaryNetto, id) {
    const employee = new Employee(name, hours, ratePerHour, summaryBrutto, summaryNetto, id);
    employee.summaryBrutto = Math.round(ratePerHour * employee.hours);
    employee.summaryNetto  =  Math.round((ratePerHour * employee.hours) * 0.65);
    this.employees.push(employee);
    }
                
    deleteEmployee(event, name, hours, ratePerHour, summaryBrutto, summaryNetto, id) {
      let deleteEmployeeOrNot = prompt("Czy chcesz usunąć pracownika " + [event.target.value] + " ?");
      if(deleteEmployeeOrNot == "tak"){
        let deletedEmployee = new DeletedEmployee(name,hours,ratePerHour,summaryBrutto,summaryNetto,id);
        deletedEmployee.name = this.employees[event.target.id].name;
        deletedEmployee.hours = this.employees[event.target.id].hours;
        deletedEmployee.ratePerHour = this.employees[event.target.id].ratePerHour;
        deletedEmployee.summaryBrutto = this.employees[event.target.id].summaryBrutto;
        deletedEmployee.summaryNetto = this.employees[event.target.id].summaryNetto;
        deletedEmployee.id = this.employees[event.target.id].id;
        this.deletedEmployeeArray.push(deletedEmployee);
        this.employees.splice(event.target.id, 1);
        this.employees.filter(function(employee){}).splice(event.target.id, 1);
        for(let i=0;i< this.employees.length;i++){
          this.employees[i].id = i;
        }
    }
    }
}

