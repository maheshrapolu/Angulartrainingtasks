import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tash15',
  templateUrl: './tash15.component.html',
  styleUrls: ['./tash15.component.css']
})
export class Tash15Component implements OnInit {

  constructor() { }
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    },
    {
      id: 5,
      name: 'root3',
      children: [
        { id: 9, name: 'child2.1' },
        { id: 9, name: 'child2.1' },
        {
          id: 10,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' },
            { id: 9, name: 'child2.1' }
          ]
        }
      ]
    }
  ];
  options = {};
  ngOnInit() {
  }

}

