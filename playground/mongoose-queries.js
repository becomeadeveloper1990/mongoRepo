const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

var id = '5a9e2460e62dde53ccb074b6';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid!');
}


// todo.find({
//   _id: id
// }).then(todos => {
//   if (!todo) {
//     return console.log('ID not found!');
//   }
//   console.log(todos)
// });
//
// todo.findOne({
//   _id: id
// }).then(todo => {
//   if (!todo) {
//     return console.log('ID not found!');
//   }
//   console.log(todo)
// });

// todo.findById({
//   _id: id
// }).then(todo => {
//   if (!todo) {
//     return console.log('ID not found!');
//   }
//   console.log(todo)
// }).catch(e => console.log(e));

user.findById({
  _id: id
}).then(user => {
  if (!user) {
    return console.log('User not found!');
  }
  console.log(user)
}).catch(e => console.log(e));
