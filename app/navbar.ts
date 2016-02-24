import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl, NgClass} from 'angular2/common';

@Component({
  selector: 'nav-bar',
  templateUrl: 'app/navbar'
})

export class Navbar {

  trayOpen: boolean;
  didScroll: boolean;
  isHeaderShrunk: boolean;
  navBarButtonElem: any; //what type should this be?

  @Input() shrink;

  updateScroll () {
    //this.didScroll & setTimeout used to throttle event calls.
    if( !this.didScroll ) {
      this.didScroll = true;
      setTimeout( function(b) {
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
  }

  setNavBarClass() {
    return {
      'navbar-shrink': this.isHeaderShrunk
    }
  }

  clickNavButton(e) {
    if (!this.navBarButtonElem) {
      this.navBarButtonElem = (e.target || e.srcElement);
    }
    this.trayOpen = !this.trayOpen;
  }

  closeTray() {
    this.navBarButtonElem.click();
  }

  constructor() {
    this.didScroll = false;
    this.isHeaderShrunk = false;
    this.trayOpen = false;
    window.addEventListener( 'scroll', this.updateScroll.bind(this), false );
  }
}
