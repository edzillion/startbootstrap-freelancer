var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var Contact = (function () {
    function Contact(fb) {
        this.formSubmitted = false;
        this.myForm = fb.group({
            'name': ['', common_1.Validators.required],
            'email': ['', common_1.Validators.required],
            'phone': ['', common_1.Validators.required],
            'message': ['', common_1.Validators.required]
        });
        this.name = this.myForm.controls['name'];
        this.email = this.myForm.controls['email'];
        this.phone = this.myForm.controls['phone'];
        this.message = this.myForm.controls['message'];
    }
    Contact.prototype.onSubmit = function (value) {
        this.formSubmitted = true;
        console.log('you submitted value: ', value);
    };
    Contact = __decorate([
        core_1.Component({
            selector: 'contact-section',
            directives: [common_1.FORM_DIRECTIVES],
            templateUrl: 'app/contact'
        })
    ], Contact);
    return Contact;
})();
exports.Contact = Contact;
