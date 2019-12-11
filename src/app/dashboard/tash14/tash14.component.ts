import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tash14',
  templateUrl: './tash14.component.html',
  styleUrls: ['./tash14.component.css']
})
export class Tash14Component implements OnInit {
  fdata;
  constructor(private s: DataService, private fb: FormBuilder) {}
    form = this.fb.group({
    id: [],
    fname: [],
    lname: []
  })
ngOnInit() {
    this.getData();
  }
  getData()  {
    this.s.ge().subscribe(res=>this.fdata=res);
  }
  su() {
    this.s.po(this.form.value).subscribe(res=>this.getData());
    this.form.reset();
  }
  del(d) {
    this.s.de(d.id).subscribe(res=>this.getData());
  }
  ed(d) {
    this.form.patchValue({
      id: d.id,
      fname: d.fname,
      lname: d.lname
    })
  }
  up() {
    this.s.up(this.form.value).subscribe(res=>this.getData());
    this.form.reset();
  }
}