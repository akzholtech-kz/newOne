import { MainDetailComponent } from './main/main-detail/main-detail.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from './employee/employee.component';
import { MainComponent } from "./main/main.component";
import { MainStartComponent } from "./main/main.start/main.start.component";
import { MainEditComponent } from './main/main-edit/main-edit.component';

const appRouts: Routes =[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: MainComponent, children: [
        {path: '', component: MainStartComponent},
        {path: 'new', component: MainEditComponent},
        {path: ':id', component: MainDetailComponent},
        {path: ':id/edit', component: MainEditComponent}
    ]},
    {path: 'countries', component: EmployeeComponent}
]
@NgModule({
imports:[RouterModule.forRoot(appRouts)],
exports: [RouterModule]
})

export class AppRoutingModule{

}