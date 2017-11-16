const mongoose = require('mongoose');
const {Schema} = mongoose;


mongoose.Promise = global.Promise;
//process.env.MONGODB_URI || for heroku
mongoose.connect(process.env.MONGOLAB_GRAY_URI || 'mongodb://localhost:27017/Product');


module.exports = {
  mongoose,
  Schema
}
