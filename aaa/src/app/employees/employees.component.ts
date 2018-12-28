import { DisplayEmployeeService } from './../services/display-employee.service';
import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],

})
export class EmployeesComponent implements OnInit {

  deletedTerm: any;
  name: any;
  surname: any;
  hours: any;
  ratePerHour: any;
  summaryBrutto: any;
  summaryNetto: any;
  id: any;
  term: any;
  employees: Array<any> = [];

  constructor(private displayEmployeeService: DisplayEmployeeService) { }

  ngOnInit() {
    this.employees = this.displayEmployeeService.employees;
  }
  deleteEmployee(){
    this.displayEmployeeService.deleteEmployee(event, this.name, this.surname, this.hours, this.ratePerHour, this.summaryBrutto, this.summaryNetto, this.id)
          
    this.term = undefined;
  }

  sortData(sort: Sort) {
    const data = this.employees.slice();
    if (!sort.active || sort.direction === '') {
      this.employees = data;
      return;
    }

    this.employees = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'hours': return compare(a.hours, b.hours, isAsc);
        case 'ratePerHour': return compare(a.ratePerHour, b.ratePerHour, isAsc);
        case 'summaryBrutto': return compare(a.summaryBrutto, b.summaryBrutto, isAsc);
        case 'summaryNetto': return compare(a.summaryNetto, b.summaryNetto, isAsc);
        default: return 0;
      }
    });
 }

}

  function compare(a, b, isAsc) {
   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
