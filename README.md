# ng2-freelancer

This is an Angular 2 version of [Freelancer](http://startbootstrap.com/template-overviews/freelancer/) which is a one page freelancer portfolio theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/). This theme features several content sections, a responsive portfolio grid with hover effects, full page portfolio item modals, and a working PHP contact form.

* angular 2
* jspm
* gulp
* typescript
* expressjs backend

### This is a work in progress



## Getting Started

First, clone the rep
* `git clone https://github.com/edzillion/startbootstrap-freelancer.git`

Install dependencies
* `npm install`

Run locally
* `npm start`

Build the app:
* `gulp build`

## Project structure (ignoring jspm & node)

    .
    ├── app                    # Typescript src with inlined html
    ├── css                    # Un-minified CSS, font & bootstrap css compiled here
    ├── fonts                  # Font awesome fonts etc TODO: add local google fonts here
    ├── img                    # Images
    ├── less                   # Custom less rules
    ├── lib                    # angular2-polyfills needs to be loaded first
    ├── public                 # Build folder
    └── server                 # Server backend


## Deploy

* Upload public files to /server/public

* Upload server.js & package.json and run `npm install`

* You should end up with a structure similar to this:

* Update your webserver to host example.com at the port specified in config.js

### Deploy Structure

    .
    ├── public_html            # Empty public folder, express will serve files from here
    └── server                 #
          ├── node_modules     # Server modules
          ├── public           # Location of public files
          ├── config.js        # Server config
          ├── package.json     # Server package.json
          └── server.js        # Server module

* Your config.js file should look like this:


```javascript
  var config = {};

  config.domain = "example.com";
  config.port = "9089";

  config.mailgun = {};
  config.mailgun.api_key = "key-XXXXXXXXXXXXXXXXXXXXXXXX";
  config.mailgun.domain = "mg.example.com";
  config.mailgun.from_email = "mail@example.com";
  config.mailgun.to_email = "to@example.com";

  module.exports = config;
```

## Bugs and Issues

* Less rewrite - currently just overriding specific CSS rules
* Portfolio modals not displaying
* Animations not included until release of ng2 animation system

Have a bug or an issue with this template? [Open a new issue](https://github.com/edzillion/startbootstrap-freelancer/issues)

## Creator

ng2-bootstrap was created by [edzillion](https://github.com/edzillion) using the excellent [Freelancer Theme from Start Bootstrap](http://startbootstrap.com/template-overviews/freelancer/) which in turn was created and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* https://twitter.com/edzillion
* https://github.com/edzillion


## Copyright and License

Copyright 2013-2016 Blackrock Digital LLC. Code released under the [MIT](https://github.com/edzillion/startbootstrap-freelancer/blob/gh-pages/LICENSE) license.
