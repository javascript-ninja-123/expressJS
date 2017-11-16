const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if(err){
      return console.log('unable to connect to Mongodb');
    }
    console.log('connected to MongoDB server');

    db.collection('Todos')

    //delteMany
    // db.collection('Todos')
    // .deleteMany({text:"Eat lunch"})
    // .then(({result}) => console.log(result))
    // .catch(err => console.log(err))

    //deleteOne
    // db.collection('Todos')
    // .deleteOne({text:"poop"})
    // .then(({result}) => console.log(result))
    // .catch(err => console.log(err))

    //fineOneAndDelte
    // db.collection('Todos')
    // .findOneAndDelete({completed:true})
    // .then(result => console.log(result))
    // .catch(err => console.log(err))



    // db.close();
});
