const {mongoose,Schema} = require('../db/moongose');


const productSchema = new Schema({
  title:{
    type:String,
    required:true,
    minLength:2,
    trim:true
  },
  origin:{
    type:String,
    default:'N/A',
    trim:true
  },
  assignUID:{
    type:String,
    default:null
  }
});


const Products = mongoose.model('products',productSchema);

module.exports = {
  Products
}
