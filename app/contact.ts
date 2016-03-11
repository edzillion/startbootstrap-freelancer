import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, Control, FormBuilder, Validators, AbstractControl} from 'angular2/common';
import {Http, Headers, Response, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

interface ValidationResult {
  [key: string]: boolean;
}
class CustomValidator {
  static email(control: Control): ValidationResult {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (!EMAIL_REGEXP.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }
  static sanitize(control: Control): ValidationResult {
    var curValue = control.value;
    var newValue = curValue
      .replace(/&gt;/gi, '>')
      .replace(/&lt;/gi, '<')
      .replace(/<(.|n)*?>/gim, '')
      .replace(/(&gt;|&lt;|&copy;|&quot;|&amp;)/gi, '');

    if (curValue !== newValue) {
      return { invalidSanitize: true };
    }
    return null;
  }
}

@Component({
  selector: 'contact-section',
  viewProviders: [HTTP_PROVIDERS],
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


            <div *ngIf="!name.valid && !name.pristine" class="help-block">
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

            <div  *ngIf="!email.valid && !email.pristine" class="help-block">
              <ul role="alert">
                <li><p class="text-danger">Please enter a valid email address.</p></li>
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

            <div *ngIf="!phone.valid && !phone.pristine" class="help-block">
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

            <div *ngIf="!message.valid && !message.pristine" class="help-block">
              <ul role="alert">
                <li>
                  <p [hidden]="!message.errors.required" class="text-danger">Please enter a message.

                  </p>
                  <p [hidden]="!message.errors.invalidSanitize" class="text-danger">HTML is not permitted</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br>
        <div id="success">
          <div [hidden]="!formSubmitted || !formSuccess || formSending" class='alert alert-success'>
            <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
            <strong>Your message has been sent. </strong>
          </div>
          <div [hidden]="!formSubmitted || formSuccess || formSending" class='alert alert-danger'>
            <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
            <strong>Sorry {{name.value}}, it seems that my mail server is not responding. Please try again later!</strong>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-xs-12">
            <button type="submit" class="btn btn-success btn-lg" [disabled]="!myForm.valid || formSending">Send</button>
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
  formSuccess: boolean;
  formSending: boolean;

  name: AbstractControl;
  email: AbstractControl;
  phone: AbstractControl;
  message: AbstractControl;

  constructor(public http: Http, fb: FormBuilder) {
    this.http = http;
    this.formSubmitted = false;
    this.formSuccess = false;
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, CustomValidator.email])],
      'phone': ['', Validators.required],
      'message': ['', Validators.compose([Validators.required, CustomValidator.sanitize])]
    });

    this.name = this.myForm.controls['name'];
    this.email = this.myForm.controls['email'];
    this.phone = this.myForm.controls['phone'];
    this.message = this.myForm.controls['message'];
  }

  onSubmit(value: string): void {

    this.formSubmitted = true;
    this.formSending = true;

    if (!this.myForm.valid) {
      return;
    }
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    //post form data here
    this.http.post('https://localhost:9089/submit', JSON.stringify(value), {
      headers: headers
    })
      .map(res => res.json())
      .subscribe((res: Response) => this.onFormComplete(res));
  }

  onFormComplete(result): void {
    this.formSuccess = result;
    this.formSending = false;
  }
}
