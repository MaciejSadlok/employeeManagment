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
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { DeletedEmployeeTableComponent } from './deleted-employee-table/deleted-employee-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    NewEmployeeComponent,
    EmployeeTableComponent,
    DeletedEmployeeTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    CdkTableModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
