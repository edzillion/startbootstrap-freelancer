'use strict'
//We're using the express framework and the mailgun-js wrapper
var express = require('express');
var helmet = require('helmet');
var Mailgun = require('mailgun-js');
var bodyParser = require('body-parser');
var expressSanitized = require('express-sanitized');
var underscore = require('underscore');

var config = require('./config');

//init express
var app = express();
app.use(helmet());

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(expressSanitized());

// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
app.post('/submit', function(req, res) {
  console.log('submitted');
  //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
  var mailgun = new Mailgun({
    apiKey: config.mailgun.api_key,
    domain: config.mailgun.domain
  });

  var messageHTML = '<h3>ovidian.eu contact</h3><br><p>from' + req.body.name + ' @ ' + req.body.phone + '</p><br><p>' + req.body.message + '</p>';

  var data = {
    //Specify email data
    from: req.body.email,
    //The email to contact
    to: config.mailgun.to_email,
    //Subject and text data
    subject: 'ovidian.eu contact',
    html: messageHTML
  }

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function(err, body) {
    //If there is an error, render the error page
    if (err) {
      console.log("got an error: ", err);
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

app.listen(3030);
