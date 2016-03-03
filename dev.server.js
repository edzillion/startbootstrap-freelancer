'use strict'
const open = require('open')
//We're using the express framework and the mailgun-js wrapper
var express = require('express');
var Mailgun = require('mailgun-js');
var bodyParser = require('body-parser');
var config = require('./dev.config');

//init express
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('./'));

app.use(bodyParser.json());

// Send a message to the specified email address when you navigate to /submit/someaddr@email.com
// The index redirects here
app.post('/submit', function(req,res) {
  console.log('submitted');
    //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    var mailgun = new Mailgun({apiKey: config.mailgun.api_key, domain: config.mailgun.domain});

    var messageHTML = '<h2>ovidian.eu contact</h2><h2>from' +req.body.name+ ' @' +req.body.phone+ '</h2><p>' +req.body.message+ '</p>';

    var data = {
    //Specify email data
      from: req.body.email,
    //The email to contact
      to: 'edzillion@gmail.com',
    //Subject and text data
      subject: 'ovidian.eu contact',
      html: messageHTML
    }

    //Invokes the method to send emails given the above data with the helper library
    // mailgun.messages().send(data, function (err, body) {
    //     //If there is an error, render the error page
    //     if (err) {
    //         //res.render('error', { error : err});
    //         console.log("got an error: ", err);
    //         res.send("Error - check console");
    //     }
    //     //Else we can greet    and leave
    //     else {
    //         //Here "submitted.jade" is the view file for this landing page
    //         //We pass the variable "email" from the url parameter in an object rendered by Jade
    //         //res.render('submitted', { email : req.params.mail });
    //
    //         console.log(body);
    //         res.send("Contact form sent");
    //     }
    // });

});

// app.get('/validate/:mail', function(req,res) {
//     var mailgun = new Mailgun({apiKey: api_key, domain: domain});
//
//     var members = [
//       {
//         address: req.params.mail
//       }
//     ];
// //For the sake of this tutorial you need to create a mailing list on Mailgun.com/cp/lists and put its address below
//     mailgun.lists('NAME@MAILINGLIST.COM').members().add({ members: members, subscribed: true }, function (err, body) {
//       console.log(body);
//       if (err) {
//         res.send("Error - check console");
//       }
//       else {
//         res.send("Added to mailing list");
//       }
//     });
//
// })
//
// app.get('/invoice/:mail', function(req,res){
//     //Which file to send? I made an empty invoice.txt file in the root directory
//     //We required the path module here..to find the full path to attach the file!
//     var path = require("path");
//     var fp = path.join(__dirname, 'invoice.txt');
//     //Settings
//     var mailgun = new Mailgun({apiKey: api_key, domain: domain});
//
//     var data = {
//       from: from_who,
//       to: req.params.mail,
//       subject: 'An invoice from your friendly hackers',
//       text: 'A fake invoice should be attached, it is just an empty text file after all',
//       attachment: fp
//     };
//
//
//     //Sending the email with attachment
//     mailgun.messages().send(data, function (error, body) {
//         if (error) {
//             res.render('error', {error: error});
//         }
//             else {
//             res.send("Attachment is on its way");
//             console.log("attachment sent", fp);
//             }
//         });
// })

require('chokidar-socket-emitter')({app: server})

server.listen(9089);
open('http://localhost:9089')
