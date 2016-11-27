var mongoose = require('mongoose');
var config = require('../config');
var zero = 'привет мир';

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));
// function mongoose () {
//     console.log(config)
// }
module.exports = mongoose;
