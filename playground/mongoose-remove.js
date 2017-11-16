const {ObjectID}  = require('mongodb');
const {mongoose, Schema} = require('./../server/db/moongose');
const {Todos} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');



// Todos.remove({})
// .then(result => console.log(result))
// .catch(err => console.log(err))
//
// Todos.findOneAndRemove()
// .then(result => console.log(result))

Todos.findByIdAndRemove('5a0dd3c229e47faabe875b14')
.then(doc => console.log(doc))
.catch(err => console.log(err))
