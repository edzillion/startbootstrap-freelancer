var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var Navbar = (function () {
    function Navbar() {
        this.didScroll = false;
        this.isHeaderShrunk = false;
        this.trayOpen = false;
    }
    Navbar.prototype.updateScroll = function (event) {
        //this.didScroll & setTimeout used to throttle event calls.
        if (!this.didScroll) {
            this.didScroll = true;
            setTimeout(function (b) {
                var currScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currScroll > 300) {
                    this.isHeaderShrunk = true;
                }
                else {
                    this.isHeaderShrunk = false;
                }
                this.didScroll = false;
            }.bind(this), 250);
        }
    };
    Navbar.prototype.setNavBarClass = function () {
        return {
            'navbar-shrink': this.isHeaderShrunk
        };
    };
    Navbar.prototype.clickNavButton = function (e) {
        if (!this.navBarButtonElem) {
            this.navBarButtonElem = (e.target || e.srcElement);
        }
        this.trayOpen = !this.trayOpen;
    };
    Navbar.prototype.closeTray = function () {
        if (this.trayOpen) {
            this.navBarButtonElem.click();
        }
    };
    __decorate([
        //what type should this be?
        core_1.Input()
    ], Navbar.prototype, "shrink");
    Navbar = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: 'app/navbar'
        })
    ], Navbar);
    return Navbar;
})();
exports.Navbar = Navbar;
