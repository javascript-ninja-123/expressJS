const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
      return console.log('unable to connect to Mongodb');
    }
    console.log('connected to MongoDB server');

    db.collection('Todos')
    .find({
      _id:new ObjectID('5a0d077f5e742d6416135fd4')
    })
    .toArray()
    .then(docs => {
      console.log(`Todos ${JSON.stringify(docs,undefined,2)}`)
    })
    .catch(err => console.log(err))


    db.collection('Todos')
    .find()
    .count()
    .then(count => console.log(`count:${count}`))
    .catch(err => console.log(err))



    db.collection('Users')
    .find()
    .toArray()
    .then(docs => console.log(JSON.stringify(docs,undefined,2)))
    .catch(err => console.log(err))
    // db.close();
});
