'use strict';

var Promise = require('bluebird');
var Request = require('request');
var _ = require('lodash');

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
function sendSMS(text, sender, recipient, options) {
	return new Promise(function(resolve, reject) {
		options = options || {};
		var payload = {
			text: text,
			username: username, 
			password: password,
			sender: sender, 
			GSM: recipient,
		};
	
		payload = _.merge(payload, options);
	
		Request.post({
			headers: {'content-type' : 'application/json'},
			url: mainEndpoint,
			json: payload
		}, 
		function(error, response, body) {
			
			if (body.status != "0") { // an error ocurred
				var errorItem = Config.errors[body.status];
				return reject({
					code: body.status,
					status: errorItem.status,
					description: errorItem.description
				});
			}
			
			resolve(body);
		});
	});
}

exports.init = init;
exports.sendSMS = sendSMS;