import { Injectable } from '@angular/core';
import { Employee } from '../employeeClass';

@Injectable()
export class DisplayEmployeeService {

  employees = [
    {name: 'Maciej Sadlok', hours: 150, ratePerHour: 231.01, summaryBrutto: 38652, summaryNetto: 22523, id: 0},
    {name: 'Tomasz Borowski', hours: 151, ratePerHour: 555.01, summaryBrutto: 23166, summaryNetto: 17000, id: 1},
    {name: 'Jacek Manelski', hours: 211, ratePerHour: 321.01, summaryBrutto: 36663, summaryNetto: 25523, id: 2},
    {name: 'Michał Kalemba', hours: 177, ratePerHour: 765.01, summaryBrutto: 38652, summaryNetto: 28523, id: 3},
    {name: 'Giovanni Dziadzia', hours: 251, ratePerHour: 432.01, summaryBrutto: 51652, summaryNetto: 38523, id: 4},
    {name: 'Człowiek Sztos', hours: 355, ratePerHour: 500, summaryBrutto: 93652, summaryNetto: 65000, id: 5},
  ];
  constructor() { }

  displayEmployee(){

  }
  addEmployee(name, hours, ratePerHour, summaryBrutto, summaryNetto, id) {
    if (name !== '' && hours !== 0 && this.selectedRate !== 0) {
    const employee = new Employee(name, hours, ratePerHour, summaryBrutto, summaryNetto, id);
    employee.ratePerHour = this.selectedRate;
    employee.summaryBrutto = Math.round(this.selectedRate * employee.hours);
    employee.summaryNetto  =  Math.round((this.selectedRate * employee.hours) * 0.65);
    this.employees.push(employee);
    this.term = undefined;
    this.deletedTerm = undefined;
    } else {
      alert('DEJ MNIE TE DANE CHŁOPAK!');
    }
   }
}
