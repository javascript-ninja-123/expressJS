const {mongoose,Schema} = require('../db/moongose');

const todoSchema = new Schema({
  text:{
    type:String,
    minLength:1,
    required:true,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  }
})


let Todos = mongoose.model('todos',todoSchema);

module.exports = {
  Todos
}
