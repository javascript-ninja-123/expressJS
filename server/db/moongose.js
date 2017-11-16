const mongoose = require('mongoose');
const {Schema} = mongoose;


mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');


module.exports = {
  mongoose,
  Schema
}
