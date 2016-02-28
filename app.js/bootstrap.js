var browser_1 = require('angular2/platform/browser');
var app_component_1 = require("./app.component");
var core_1 = require('angular2/core');
browser_1.bootstrap(app_component_1.AppComponent, [core_1.provide(Window, { useValue: window })]);
