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
   
  deleteEmployee(event,name,hours,ratePerHour,summaryBrutto,summaryNetto,id){
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
    this.term = undefined;
    this.deletedTerm = undefined;
  }
 }

}
