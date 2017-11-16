const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
      return console.log('unable to connect to Mongodb');
    }
    console.log('connected to MongoDB server');

    db.collection('Users')
    .findOneAndUpdate(
      {
        _id:new ObjectID('5a0d0c1700157264388c1e86')
      },
      {
        $inc: {
        age:10
        }
      },
      {
        returnOriginal:false
      }
  )
  .then(result => console.log(result))
  .catch(err => console.log(err))


});
