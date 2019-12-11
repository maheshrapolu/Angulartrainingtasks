import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;
  fdata;
  constructor(private formBuilder: FormBuilder,private s:DataService) { }

  ngOnInit() {
    this.getData();
    this.dynamicForm = this.formBuilder.group({
      numberOfAddress: ['', Validators.required],
        address: new FormArray([])
    });
}

// convenience getters for easy access to form fields
get f() { return this.dynamicForm.controls; }
get t() { return this.f.address as FormArray; }

onChangeTickets(e) {
    const numberOfAddress = e.target.value || 0;
    if (this.t.length < numberOfAddress) {
        for (let i = this.t.length; i < numberOfAddress; i++) {
            this.t.push(this.formBuilder.group({
                houseno: [],
                address: [],
                address1: [],
                phonenumber: [],
                state: [],
                pincode: []
            }));
        }
    } else {
        for (let i = this.t.length; i >= numberOfAddress; i--) {
            this.t.removeAt(i);
        }
    }
}
getData()  {
  this.s.get().subscribe(res=>this.fdata=res);
}

onSubmit() {

      this.s.post(this.dynamicForm.value).subscribe(res=>this.getData());
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null));
      
}

onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
}

onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.t.reset();
}
}
