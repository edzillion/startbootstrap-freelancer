import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl, NgClass} from 'angular2/common';

@Component({
  selector: 'nav-bar',
  //template: '<div (click)="clickNavbar()">CLICKCLICKCLICKCLICKCLICKLCIKCLCICKLCICK</div>"'
  templateUrl: 'app/navbar'
})

export class Navbar {
  clickNavbar: any;
  trayOpen: boolean;
  didScroll: boolean;
  isHeaderShrunk: boolean;

  @Input() shrink;

  updateScroll () {
    //this.didScroll & setTimeout used to throttle event calls.
    if( !this.didScroll ) {
      this.didScroll = true;
      setTimeout( function(b) {
        var currScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currScroll > 300) {
          console.log("down");
          this.isHeaderShrunk = true;
        }
        else {
          console.log("up");
          this.isHeaderShrunk = false;
        }
        this.didScroll = false;
      }.bind(this), 250);
    }
  }

  setNavBarClass() {
    return {
      'navbar-shrink': this.isHeaderShrunk
    }
  }
  constructor() {

    this.didScroll = false;
    this.isHeaderShrunk = false;
    window.addEventListener( 'scroll', this.updateScroll.bind(this), false );

    this.trayOpen = false;
    this.clickNavbar = function (event) {
      this.trayOpen = !this.trayOpen;
    }
  }
}
