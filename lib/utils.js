'use strict';

var isoCountries = require('./config').countryCodes,
    PNF = require('google-libphonenumber').PhoneNumberFormat,
    phoneUtil = require('google-libphonenumber').phoneUtil,
    _ = require('lodash');

function getCountryCodes() {
    return isoCountries;
}

function isValidCountryCode(countryCode) {
    return isoCountries.indexOf(countryCode) != -1;
}

/**
 * Formats an array of phone numbers to the international format
 *
 * @param {Array<String>} phoneNumbers Phone numbers to format
 * @param {String} countryCode ISO Country code that the phone numbers belong to, see the list of valid country codes here: http://www.countryareacode.net/
 *
 * @returns {Array<String>} Array of formatted phone numbers
 */
function formatPhoneNumbers(phoneNumbers, countryCode) {
    return _.map(phoneNumbers, function(phoneNumber) {
        try {
            phoneNumber = phoneUtil.parse(phoneNumber, countryCode);
            return phoneUtil.format(phoneNumber, PNF.INTERNATIONAL);
        } catch(error) { // extend the exception information with the defected phone number
            error.message += ": " + phoneNumber;
            throw error;
        }
    });
}

exports.getCountryCodes = getCountryCodes;
exports.isValidCountryCode = isValidCountryCode;
exports.formatPhoneNumbers = formatPhoneNumbers;
