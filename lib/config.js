module.exports = {
    sms: {
        MAIN_ENDPOINT: 'http://api.infobip.com/api/v3/sendsms/json',
        SECONDARY_ENDPOINT: 'http://api2.infobip.com/api/v3/sendsms/json'
    },
    Options: {
        Ton: {
            UNKNOWN: 0,
            INTERNATIONAL: 1,
            NATIONAL: 2,
            NETWORK_SPECIFIC: 3,
            SUBSCRIBER_NUMBER: 4,
            ALPHANUMERIC: 5,
            ABBREVIATED: 6
        },
        Npi: {
            Unknown: 0,
            ISDN: 1,
            DATA: 3,
            TELEX: 4,
            LAND_MOBILE: 6,
            NATIONAL: 8,
            PRIVATE: 9,
            ERMES: 10,
            INTERNET: 14,
            WAP_CLIENT: 18
        }
    },
    errors: {
        "0": {
            status: 'ALL_RECIPIENTS_PROCESSED',
            description: 'Request was successful (all recipients)'
        },
        "-1": {
            status: "SEND_ERROR",
            description: "Error in processing the request"
        },
        "-2": {
            status: 'NOT_ENOUGH_CREDITS',
            description: 'Not enough credits on a specific account'
        },
        "-3": {
            status: 'NETWORK_NOTCOVERED',
            description: 'Targeted network is not covered on specific account'
        },
        "-5": {
            status: 'INVALID_USER_OR_PASS',
            description: 'Username or password is invalid'
        },
        "-6": {
            status: 'MISSING_DESTINATION_ADDRESS',
            description: 'Destination address is missing in the request'
        },
        "-10": {
            status: 'MISSING_USERNAME',
            description: 'Username is missing in the request'
        },
        "-11": {
            status: 'MISSING_PASSWORD',
            description: 'Password is missing in the request'
        },
        "-13": {
            status: 'INVALID_DESTINATION_ADDRESS',
            description: 'Number is not recognized by Infobip platform'
        },
        "-22": {
            status: 'SYNTAX_ERROR',
            description: 'Incorrect JSON format, caused by syntax error'
        },
        "-23": {
            status: 'ERROR_PROCESSING',
            description: 'General error, reasons may vary'
        },
        "-26": {
            status: 'COMMUNICATION_ERROR',
            description: 'General API error, reasons may vary'
        },
        "-27": {
            status: 'INVALID_SENDDATETIME',
            description: 'Invalid scheduling parameter'
        },
        "-28": {
            status: 'INVALID_DELIVERY_REPORT_PUSH_URL',
            description: 'Invalid PushURL in the request'
        },
        "-30": {
            status: 'INVALID_CLIENT_APPID',
            description: 'Invalid APPID in the request'
        },
        "-33": {
            status: 'DUPLICATE_MESSAGEID',
            description: 'Duplicated MessageID in the request'
        },
        "-34": {
            status: 'SENDER_NOT_ALLOWED',
            description: 'Sender name is not allowed'
        },
        "-99": {
            status: 'GENERAL_ERROR',
            description: 'Error in processing request, reasons may vary'
        },
        "1": {
            status: "EC_UNKNOWN_SUBSCRIBER"
        },
        "1027": {
            status: "EC_OR_encapsulatedAC_NotSupported"
        },
        5: {
            status: "EC_UNIDENTIFIED_SUBSCRIBER"
        },
        1028: {
            status: "EC_OR_transportProtectionNotAdequate"
        },
        "6": {
            status: "EC_ABSENT_SUBSCRIBER_SM"
        },
        "1030": {
            status: "EC_OR_potentialVersionIncompatibility"
        },
        "9": {
            status: "EC_ILLEGAL_SUBSCRIBER"
        },
        "1031": {
            status: "EC_OR_remoteNodeNotReachable"
        },
        "11": {
            status: "EC_TELESERVICE_NOT_PROVISIONED"
        }
    }
};