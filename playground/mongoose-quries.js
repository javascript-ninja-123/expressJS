const {ObjectID}  = require('mongodb');
const {mongoose, Schema} = require('./../server/db/moongose');
const {Todos} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');


var id = '5a0d1814b04bf16583388560';

if(!ObjectID.isValid(id)){
   console.log('ID not valid')
}
else{
  Users.findById(id)
  .then(user => {
    if(!user){
      return console.log('user not found')
    }
    console.log(user)
  })
  .catch(err => console.log(err))
}


// Todos.find({
//   _id:id
// })
// .then(todos => console.log(todos))
// .catch(err => console.log(err))
//
// Todos.findOne({
//   _id:id
// })
// .then(todo => console.log(todo))
// .catch(err => console.log(err))
