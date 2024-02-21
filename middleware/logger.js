const moment = require('moment');

function logger (req, res, next){
    console.log(`The moment of login is ${moment().format()}`);
    next();
};

module.exports = logger;