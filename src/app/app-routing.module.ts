import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HomeComponent } from './dashboard/tash16/home/home.component';
import { TaskComponent } from './dashboard/task/task.component';
//import { AuthGuard } from './auth.guard';






const routes: Routes = [
  
  {path: '', component: DashboardComponent,
  children: [     
  {path: '', component: TaskComponent},
  {path: 'task1', component: Task1Component},
  {path: 'task2', component: Task2Component},
  {path: 'task3', component: Task3Component},
  {path: 'task4', component: Task4Component},
  {path: 'task5', component: Task5Component},
  {path: 'task6', component: Task6Component},
  {path: 'task7', component: Task7Component},
  {path: 'task8', component: Task8Component},
  {path: 'task9', component: Task9Component},
  {path: 'task10', component: Task10Component},
  {path: 'task11', component: Tash11Component},
  {path: 'task12', component: Tash12Component},
  {path: 'task13', component: Tash13Component},
  {path: 'task14', component: Tash14Component},
  {path: 'task15', component: Tash15Component},
  {path: 'task16', component: Tash16Component},
  {path: 'task17', component: Tash17Component},
  {path: 'home', component: HomeComponent},
  {path: 'animals/:animal', component: Tash18Component},
  {path: 'task19', component: Tash19Component},
  
  
  ]},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
