import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Task1Component } from './dashboard/task1/task1.component';
import { Task2Component } from './dashboard/task2/task2.component';
import { Task3Component } from './dashboard/task3/task3.component';
import { Task4Component } from './dashboard/task4/task4.component';
import { Task5Component } from './dashboard/task5/task5.component';
import { Task6Component } from './dashboard/task6/task6.component';
import { Task7Component } from './dashboard/task7/task7.component';
import { Task8Component } from './dashboard/task8/task8.component';
import { Task9Component } from './dashboard/task9/task9.component';
import { Task10Component } from './dashboard/task10/task10.component';
import { Tash11Component } from './dashboard/tash11/tash11.component';
import { Tash12Component } from './dashboard/tash12/tash12.component';
import { Tash13Component } from './dashboard/tash13/tash13.component';
import { Tash14Component } from './dashboard/tash14/tash14.component';
import { Tash15Component } from './dashboard/tash15/tash15.component';
import { Tash16Component } from './dashboard/tash16/tash16.component';
import { Tash17Component } from './dashboard/tash17/tash17.component';
import { Tash18Component } from './dashboard/tash18/tash18.component';
import { Tash19Component } from './dashboard/tash19/tash19.component';
import { NgxImageCompressService } from 'ngx-image-compress';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import {NgxPaginationModule} from 'ngx-pagination';
import { AvatarModule } from 'ngx-avatar';
import { ReversePipe } from './reverse.pipe';
import { HomeComponent } from './dashboard/tash16/home/home.component';
import { TaskComponent } from './dashboard/task/task.component';
import { TreeModule } from 'angular-tree-component';
//import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    Task6Component,
    Task7Component,
    Task8Component,
    Task9Component,
    Task10Component,
    Tash11Component,
    Tash12Component,
    Tash13Component,
    Tash14Component,
    Tash15Component,
    Tash16Component,
    Tash17Component,
    Tash18Component,
    Tash19Component,
    HomeComponent,
    TaskComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    NgxPaginationModule,
    AvatarModule,
    TreeModule.forRoot()
    
  ],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
