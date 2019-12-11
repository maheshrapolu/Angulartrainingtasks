import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css']
})
export class Task9Component implements OnInit {
  part1: boolean = false;
  part2: boolean = false;
 
  makeP1True() {
    this.part1 = true;
    this.part2 = false;
  }
 
  makeP2True() {
    this.part2 = true;
    this.part1 = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
