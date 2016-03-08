var config = {};

config.domain = "example.com";
config.port = "9089";

config.mailgun = {};
config.mailgun.api_key = "key-XXXXXXXXXXXXXXXXXXXXXXXX";
config.mailgun.domain = "mg.example.com";
config.mailgun.from_email = "mail@example.com";
config.mailgun.to_email = "to@example.com";

module.exports = config;
