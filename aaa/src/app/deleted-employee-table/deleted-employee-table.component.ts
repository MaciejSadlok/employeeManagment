import { Component, OnInit } from '@angular/core';
import { DisplayEmployeeService } from '../services/display-employee.service';
import { DeletedEmployee } from '../deletedEmployeeClass';

@Component({
  selector: 'app-deleted-employee-table',
  templateUrl: './deleted-employee-table.component.html',
  styleUrls: ['./deleted-employee-table.component.css']
})
export class DeletedEmployeeTableComponent implements OnInit {

  deletedTerm: any;
  term: any;
  deletedEmployeeArray = this.displayEmployeeService.deletedEmployeeArray;
  employees = this.displayEmployeeService.employees;
 
  constructor(private displayEmployeeService: DisplayEmployeeService) { }

  ngOnInit() {
   
  }
   


}
