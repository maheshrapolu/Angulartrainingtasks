import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {
  data;
  constructor( private http:HttpClient) { }

  ngOnInit() {
    this.getdata();
  }
  getdata(){
    return this.http.get("http://localhost:3000/comments").subscribe((res) =>{
   this.data=res;
console.log('msdbfhsd',this.data)
      });
  }

}
