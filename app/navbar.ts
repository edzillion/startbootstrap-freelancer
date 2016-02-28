import {Component, Input} from 'angular2/core';
import {FORM_DIRECTIVES, ControlGroup, FormBuilder, Validators, AbstractControl, NgClass} from 'angular2/common';

@Component({
  selector: 'nav-bar',
  template: `
  <!-- Navigation -->
  <nav class="navbar navbar-default navbar-fixed-top" [ngClass]="{'navbar-shrink': isHeaderShrunk}" (window:scroll)="updateScroll($event)">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button (click)="clickNavButton($event)" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" [ngClass]="{'in': trayOpen}" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right" (click)="closeTray()">
          <li class="hidden">
            <a href="#page-top"></a>
          </li>
          <li class="page-scroll">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li class="page-scroll">
            <a href="#about">About</a>
          </li>
          <li class="page-scroll">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
`
})

export class Navbar {

  trayOpen: boolean;
  didScroll: boolean;
  isHeaderShrunk: boolean;
  navBarButtonElem: any; //what type should this be?

  @Input() shrink;

  updateScroll (event) {

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
    if (this.trayOpen) {
      this.navBarButtonElem.click();
    }
  }

  constructor() {
    this.didScroll = false;
    this.isHeaderShrunk = false;
    this.trayOpen = false;
  }
}
