const {mongoose,Schema} = require('../db/moongose');

const userSchema = new Schema({
  username:{
    type:String,
    minLength:4,
    required:true,
    trim:true
  },
  password:{
    type:String,
    minLength:7,
    required:true,
    trim:true
  }
})


let Users = mongoose.model('Users',userSchema);

module.exports = {
  Users
}
