var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
//import {Alert} from 'ng2-bootstrap';
//import {Signup} from './signup';
var navbar_1 = require('./navbar');
var contact_1 = require('./contact');
//uses jspm's CSS plugin
require('font-awesome/css/font-awesome.css!');
//console.log(window);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [contact_1.Contact, navbar_1.Navbar],
            //providers:[Window],
            //events: ['updateScroll'],
            templateUrl: 'app/app.component.html'
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
