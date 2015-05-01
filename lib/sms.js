var Promise = require('bluebird');
var Request = require('request');

var Config = require('./config');

var mainEndpoint = Config.sms.MAIN_ENDPOINT;
var username, password;
 
 /**
  * Initializes the client with the username and password for authentication
  * 
  * @param username Infobip account username
  * @param password Infobip account password
  */
 function init (username, password) {
	 username = username;
	 password = password;
 };
 
/**
 * Sends an SMS message
 */
function sendSMS(msg) {
	msg.username = username;
	msg.password = password;
	return new Promise(function(resolve, reject) {
		Request.post({
			headers: {'content-type' : 'application/json'},
			url: mainEndpoint,
			json: {}
		}, 
		function(error, response, body) {
			resolve(body);
		});
	});
}

exports.init = init;
exports.sendSMS = sendSMS;