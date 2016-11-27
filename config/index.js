var nconf = require('nconf');
var path = require('path');

console.log('привет');

nconf.argv()
  .env()
  .file({ file: path.join(__dirname, 'config.json') });

module.exports = nconf;