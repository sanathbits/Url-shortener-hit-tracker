'use strict';


exports.port = process.env.PORT || 3000;
exports.mongodb = {
    uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://user:password@ds157078.mlab.com:57078/db'

};
exports.jwtSecret = '';
exports.companyName = '';
exports.cryptoKey = '';
exports.loginAttempts = {
    forIp: 50,
    forIpAndUser: 7,
    logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.mailchimpAPIkey = '';
exports.mandrillappAPIkey = '';
exports.winstonlogger = {
    token : '',
    subdomain : 'main',
    tags : []
};