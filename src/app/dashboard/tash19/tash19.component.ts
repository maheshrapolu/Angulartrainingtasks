import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tash19',
  templateUrl: './tash19.component.html',
  styleUrls: ['./tash19.component.css']
})
export class Tash19Component implements OnInit {
  btnd:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  myFunction()
  {
      
this.btnd=false;
  }
}
