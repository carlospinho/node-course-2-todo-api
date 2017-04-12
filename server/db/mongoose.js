var mongoose = require('mongoose');
var uri = 'mongodb://carlos:nikita@ds159050.mlab.com:59050/todoapi'

mongoose.Promise = global.Promise;
mongoose.connect(uri || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
