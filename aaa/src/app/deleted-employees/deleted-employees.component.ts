import { Component, OnInit } from '@angular/core';
import { DisplayEmployeeService } from '../services/display-employee.service';
import { DeletedEmployee } from '../deletedEmployeeClass';

@Component({
  selector: 'app-deleted-employees',
  templateUrl: './deleted-employees.component.html',
  styleUrls: ['./deleted-employees.component.scss']
})
export class DeletedEmployeesComponent implements OnInit {

  deletedTerm: any;
  term: any;
  deletedEmployeeArray: Array<any> = [];
  employees = this.displayEmployeeService.employees;

  constructor(private displayEmployeeService: DisplayEmployeeService) { }

  ngOnInit() {
    this.deletedEmployeeArray = this.displayEmployeeService.deletedEmployeeArray;
  }


}
