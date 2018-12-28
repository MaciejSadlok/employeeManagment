import { MaterialModule } from './material.module';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import { NgModule, Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {FilterPipe} from './filter.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeletedEmployeesComponent } from './deleted-employees/deleted-employees.component';
import { FilterDeletedEmployeePipe } from './filterDeletedEmployee.pipe';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NewEmployeeComponent,
    EmployeesComponent,
    DeletedEmployeesComponent,
    FilterDeletedEmployeePipe,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    CdkTableModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
