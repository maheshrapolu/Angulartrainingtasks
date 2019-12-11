import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tash12',
  templateUrl: './tash12.component.html',
  styleUrls: ['./tash12.component.css']
})
export class Tash12Component implements OnInit {
  countryList: Array<any> = [
   
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona','hyd','marrigda'], },
    { name: 'USA', cities: ['Downers Grove','Vanasthilipuram','Lbnagar'] },
    { name: 'India', cities: ['Hyderabad','Mumbai','Tirupati','Pune'] },
    { name: 'China', cities: ['Beijing'] },
  ];
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
    console.log("resutlsss",this.cities);
  }
  constructor() { }

  ngOnInit() {
  }

}

