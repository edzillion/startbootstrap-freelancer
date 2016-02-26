import {Component, EventEmitter} from 'angular2/core';
//import {Alert} from 'ng2-bootstrap';
//import {Signup} from './signup';
import {Navbar} from './navbar';
import {Contact} from './contact';

//uses jspm's CSS plugin
import 'font-awesome/css/font-awesome.css!';
//console.log(window);
@Component({
  selector: 'app',
  directives: [Contact, Navbar],
  //providers:[Window],
  //events: ['updateScroll'],
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  w: any;
  didScroll: boolean;
  obj: any;
  isHeaderShrunk: boolean;

  constructor() {

  }
}
