import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task10',
  templateUrl: './task10.component.html',
  styleUrls: ['./task10.component.css']
})
export class Task10Component implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  firstName: string;
  lastName: string;
  flName: string;
  status:boolean=false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: [],
        lastName: [],
    });
}

// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
  this.status=true;
    this.submitted = true;
    this.firstName=this.registerForm.controls['firstName'].value;
    this.lastName=this.registerForm.controls['lastName'].value;
    this.flName=this.firstName.charAt(0)+  this.lastName.charAt(0);
    console.log("tesusjf",this.flName);
    this.registerForm.reset();
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
}
