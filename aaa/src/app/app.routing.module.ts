import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { DeletedEmployeesComponent } from './deleted-employees/deleted-employees.component';

const appRoutes: Routes = [
{
    path: 'add',
    component: NewEmployeeComponent
},
{
    path: 'employees',
    component: EmployeesComponent
},
{
    path: 'deletedemployees',
    component: DeletedEmployeesComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
