import { Injectable } from '@angular/core';
import { Employee } from '../employeeClass';
import { DeletedEmployee } from '../deletedEmployeeClass';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DisplayEmployeeService {

  public term: string;
  deletedTerm: string;
  employees: Array<Employee> = [
    {name: 'Maciej', surname: 'Sadlok', hours: 150, wage: 231.01, gross: 38652, net: 22523, id: 0},
    {name: 'Tomasz', surname: 'Borowski', hours: 151, wage: 555.01, gross: 23166, net: 17000, id: 1},
    {name: 'Jacek', surname: 'Manelski', hours: 211, wage: 321.01, gross: 36663, net: 25523, id: 2},
    {name: 'Michał', surname: 'Kalemba', hours: 177, wage: 765.01, gross: 38652, net: 28523, id: 3},
    {name: 'Giovanni', surname: 'Dziadzia', hours: 251, wage: 432.01, gross: 51652, net: 38523, id: 4},
    {name: 'Człowiek', surname: 'Sztos', hours: 355, wage: 500, gross: 93652, net: 65000, id: 5},
  ];
  deletedEmployeeArray = [
    {name: 'Dziki', surname: 'Don', hours: 1550, wage: 231.01, gross: 33333, net: 22523, id: 6}
  ];

  amountEmployees = new BehaviorSubject(this.employees.length);

  public addEmployee(formValue, id): void {
    const employee = new Employee(formValue.name, formValue.surname, formValue.hours, formValue.wage, id);
    employee.gross = Math.round(formValue.wage * formValue.hours);
    employee.net  =  Math.round((employee.gross - 4400) * 0.65) + 4400;
    this.employees.push(employee);
    this.amountEmployees.next(this.employees.length);
    }

    deleteEmployee(event, name, surname, hours, wage, gross, net, id) {
      const deleteEmployeeOrNot = prompt('Czy chcesz usunąć pracownika ' + [event.target.value] + ' ? ');
      if (deleteEmployeeOrNot === 'tak') {
        const deletedEmployee = new DeletedEmployee(name, surname, hours, wage, gross, net, id);
        deletedEmployee.name = this.employees[event.target.id].name;
        deletedEmployee.surname = this.employees[event.target.id].surname;
        deletedEmployee.hours = this.employees[event.target.id].hours;
        deletedEmployee.wage = this.employees[event.target.id].wage;
        deletedEmployee.gross = this.employees[event.target.id].gross;
        deletedEmployee.net = this.employees[event.target.id].net;
        deletedEmployee.id = this.employees[event.target.id].id;
        this.deletedEmployeeArray.push(deletedEmployee);
        this.employees.splice(event.target.id, 1);
        this.employees.filter(function(employee) {}).splice(event.target.id, 1);
        for(let i = 0; i < this.employees.length; i++){
          this.employees[i].id = i;
        }
    }
      this.term = undefined;
    }
}

