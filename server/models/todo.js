var mongoose = require('mongoose');

var todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
  // complete: {
  //   type: Boolean,
  //   default: false,
  //   required: true
  // },
  // completedAt: {
  //   type: Number,
  //   default: null,
  //   required: true
  // }
});
//
// var newTodo = new todo({
//   text: "Hi",
//   completed: true,
//   completedAt: 1
// });
//
// newTodo.save().then((doc) => {
//   console.log(`Saved todo: ${doc}`);
// }, e => {
//   console.log("Unable to save todo!");
// });

module.exports = {todo};
