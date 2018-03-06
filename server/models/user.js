var mongoose = require('mongoose');

var user = mongoose.model('Users', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

// var newUser = new user({
//   email: " thomaswkhutton@gmail.com "
// })
//
// newUser.save().then((doc) => {
//   console.log(`Saved user: ${doc}`);
// }, e => {
//   console.log("Unable to save user!")
// });

module.exports = {user};
