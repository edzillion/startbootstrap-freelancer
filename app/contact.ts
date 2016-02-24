import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl} from 'angular2/common';

@Component({
  selector: 'contact-section',
  directives: [FORM_DIRECTIVES],
  templateUrl: 'app/contact'
})

export class Contact {
  myForm: ControlGroup;
  formSubmitted: boolean;

  name: AbstractControl;
  email: AbstractControl;
  phone: AbstractControl;
  message: AbstractControl;

  constructor(fb: FormBuilder) {
    this.formSubmitted = false;
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required],
      'message':['', Validators.required]
    });

    this.name = this.myForm.controls['name'];
    this.email = this.myForm.controls['email'];
    this.phone = this.myForm.controls['phone'];
    this.message = this.myForm.controls['message'];
  }

  onSubmit(value: string): void {
    this.formSubmitted = true;
    console.log('you submitted value: ', value);
  }
}
