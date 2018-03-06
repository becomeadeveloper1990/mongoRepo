// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server!');
  }
  console.log('Connected to MongoDB server!');
  const db = client.db('TodoApp');

  // findOneAndUpdate

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("5a9e032b5b65b51bd391144c")
  }, {
      $set: {
        completed: true
      }
    }, {
      returnOriginal: false
    }).then(result => {
      console.log(result);
    })

//   client.close();
});
