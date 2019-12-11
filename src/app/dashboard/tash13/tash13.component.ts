import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tash13',
  templateUrl: './tash13.component.html',
  styleUrls: ['./tash13.component.css']
})
export class Tash13Component implements OnInit {

  employees: any;
  totalRec : number;
  page: number = 1;

  constructor( private http:HttpClient) { }

  ngOnInit() {
    this.details();
  }
details(){
  return this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((res) => {
    this.employees = res;
    this.totalRec = this.employees.length;
    console.log(this.totalRec);
    console.log(this.page);
  })
}
}
