import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  messages: string;

  constructor() { }

  ngOnInit() {
  }
  upload(event) {
   
    const size = event.srcElement.files[0].size;
    if(size>=1000000)
    {
      this.messages="Sorry! Upload file is not more than 1MB";
     
    }
    else{
      this.messages="File Succesfully Updated...";
      
    }
}
}
