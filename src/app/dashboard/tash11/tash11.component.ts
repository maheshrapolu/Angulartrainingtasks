import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tash11',
  templateUrl: './tash11.component.html',
  styleUrls: ['./tash11.component.css']
})
export class Tash11Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
}
