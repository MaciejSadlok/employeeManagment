import { DisplayEmployeeService } from './services/display-employee.service';
import { Component } from '@angular/core';
import { Employee } from './employeeClass';
import { FilterPipe } from './filter.pipe';
import { Sort } from '@angular/material';
import { DeletedEmployee } from './deletedEmployeeClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DisplayEmployeeService]
})

export class AppComponent {

  /* displayDeletedEmployee(){
   /*var txt = " ";
   [1]["0"].name
   for(let i=0;i<this.deletedEmployeeArray.length;i++){
    for(let x in this.deletedEmployeeArray[i]){
      txt += this.deletedEmployeeArray[x].name + " ";
      document.getElementById("deletedEmployee").innerHTML = txt;
      console.log(this.deletedEmployeeArray);
    }


  changeValueOfSelectedEmployee(event){
    let insertedValue: any = prompt(document.getElementById(event.target.id).innerHTML);
    if(insertedValue == ''){
      document.getElementById(event.target.id).innerHTML = document.getElementById(event.target.id).innerHTML;
      }
    else if(event.target.id === this.hours + this.id){
      this.employees[2].summaryBrutto = Math.round(insertedValue * this.employees[2].ratePerHour);
    }
    else{
      document.getElementById(event.target.id).innerHTML = insertedValue;
    }
  }

  constructor() {
    this.employees = this.employees.slice();
  }



} */
}