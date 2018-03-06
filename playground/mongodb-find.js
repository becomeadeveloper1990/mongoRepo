// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server!');
  }
  console.log('Connected to MongoDB server!');
  const db= client.db('TodoApp')

  db.collection('Users').find({name: "Tom Hutton"}).toArray().then(res => {
    console.log("Users");
    console.log(JSON.stringify(res, undefined, 2));
  }, err => {
    console.log(err);
  })

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a9dfb025b65b51bd391118f')
  // }).toArray().then(docs => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, err => {
  //   console.log(err);
  // });

  // db.collection('Todos').find().count().then(count => {
  //   console.log(`Todos count: ${count}`);
  // }, err => {
  //   console.log(err);
  // });


  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert todo!", err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

//   db.collection('Users').insertOne({
//     name: "Kathryn Hutton",
//     age: 29,
//     location: "Brockville"
//   }, (err, result) => {
//     if (err) {
//       return console.log("Unable to insert into users!", err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
//   })
//   client.close();
});
