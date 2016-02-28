import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl} from 'angular2/common';

@Component({
  selector: 'contact-section',
  directives: [FORM_DIRECTIVES],
  template: `
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <h2>Contact Me</h2>
        <hr class="star-primary">
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <form name="sentMessage" id="contactForm" [ngFormModel]="myForm"
        (ngSubmit)="onSubmit(myForm.value)" novalidate>
        <div class="row control-group">
          <div class="form-group col-xs-12 floating-label-form-group controls">
            <label>Name</label>
            <input type="text" class="form-control"
            id="name"
            placeholder="Name"
            [ngFormControl]="myForm.controls['name']"/>

            <div *ngIf="!name.valid && formSubmitted" class="help-block">
              <ul role="alert">
                <li><p class="text-danger">Please enter your name.</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row control-group">
          <div class="form-group col-xs-12 floating-label-form-group controls">
            <label>Email Address</label>
            <input type="email" class="form-control"
            id="email"
            placeholder="Email Address"
            [ngFormControl]="myForm.controls['email']"/>

            <div  *ngIf="!email.valid && formSubmitted" class="help-block">
              <ul role="alert">
                <li><p class="text-danger">Please enter your email address.</p></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row control-group">
          <div class="form-group col-xs-12 floating-label-form-group controls">
            <label>Phone Number</label>
            <input type="tel" class="form-control"
            placeholder="Phone Number"
            id="phone"
            [ngFormControl]="myForm.controls['phone']"/>

            <div *ngIf="!phone.valid && formSubmitted" class="help-block">
                <ul role="alert">
                  <li><p class="text-danger">Please enter your phone number.</p></li>
                </ul>
              </div>
          </div>
        </div>
        <div class="row control-group">
          <div class="form-group col-xs-12 floating-label-form-group controls">
            <label>Message</label>
            <textarea rows="5" class="form-control"
            placeholder="Message"
            id="message"
            [ngFormControl]="myForm.controls['message']"></textarea>

            <div *ngIf="!message.valid && formSubmitted" class="help-block">
              <ul role="alert">
                <li><p class="text-danger">Please enter a message.</p></li>
              </ul>
            </div>
          </div>
        </div>
        <br>
        <div id="success"></div>
        <div class="row">
          <div class="form-group col-xs-12">
            <button type="submit" class="btn btn-success btn-lg">Send</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>

  `
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
