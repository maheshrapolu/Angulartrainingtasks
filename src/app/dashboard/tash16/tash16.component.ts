import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tash16',
  templateUrl: './tash16.component.html',
  styleUrls: ['./tash16.component.css']
})
export class Tash16Component implements OnInit {
  token:any;
  constructor(private s: DataService, private fb: FormBuilder, private myRoute: Router) { }

  form = this.fb.group({
    username: [],
    password: []
  })
  ngOnInit() {
  }
  su() {
    if(this.form.value.username==18164 && this.form.value.password=="Ojas1525")
    {
    this.s.pot(this.form.value).subscribe((res)=>{
      this.form.value
      console.log("token", res);
      this.token=res['authorization']
    console.log("kjhfd",this.form.value)
    localStorage.setItem('Token', this.token);
  });
this.myRoute.navigate(["/home"]);
  }
  else {
    alert('Invalid credentials');
    this.form.reset();
  }
}
onLogout() {
  localStorage.removeItem('Token');
 
}
}
