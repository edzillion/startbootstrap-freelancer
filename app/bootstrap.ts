import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {provide} from 'angular2/core';

// interface for Window
interface Window {
  // add some stuff here
}

console.log(window);
bootstrap(AppComponent,[provide(Window, {useValue: window})]);
