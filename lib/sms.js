'use strict';

var Promise = require('bluebird');
var Request = require('request');
var _ = require('lodash');

var Config = require('./config');

var mainEndpoint = Config.sms.MAIN_ENDPOINT;
var _username, _password;
 
 /**
  * Initializes the client with the username and password for authentication
  * 
  * @param username Infobip account username
  * @param password Infobip account password
  */
 function init (username, password) {
	 _username = username;
	 _password = password;
 };
 
/**
 * Sends an SMS message
 */
function sendSMS(text, sender, recipients, options) {
	return new Promise(function(resolve, reject) {
		options = options || {};
		recipients = _.map(recipients, function(recipient) {
			return { gsm: recipient };	
		});
		var payload = {
			authentication: {
				username: _username, 
				password: _password,
			},
			messages: [{
				sender: sender,
				text: text,
				recipients: recipients
			}]
		};
	
		payload.messages[0] = _.merge(payload.messages[0], options);
		Request.post({
			headers: {'Content-type' : 'application/json'},
			url: mainEndpoint,
			json: payload
		}, 
		function(error, response, body) {
			if (body.results[0].status != "0") { // an error ocurred
				var errorItem = Config.errors[body.results[0].status];
				errorItem = errorItem || { status: "UNKNOWN", description: "Unknown error code" };
				return reject({
					code: body.results[0].status,
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