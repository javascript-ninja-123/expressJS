const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
      return console.log('unable to connect to Mongodb');
    }
    console.log('connected to MongoDB server');
    
    db.collection('Users')
    .insertOne({
      name:'Sungmin Yi',
      age:23,
      location:'1500 7th st'
    })
    .then(result => console.log(result.ops[0]._id.getTimestamp()))
    .catch(err => console.log(err))

    db.close();
});
