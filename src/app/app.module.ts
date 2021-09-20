import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { MainDetailComponent } from './main/main-detail/main-detail.component';
import { MainItemsComponent } from './main/main-list/main-items/main-items.component';
import { MainListComponent } from './main/main-list/main-list.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainDetailComponent,
    MainListComponent,
    MainItemsComponent,
    EmployeeComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
