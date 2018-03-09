var express = require('express');
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {todo} = require("./models/todo");
var {user} = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var Todo = new todo({
    text: req.body.text
  });

  Todo.save().then(doc => {
    res.send(doc);
  }, e => {
    res.status(400).send(e);
  })
})

app.listen(3000, () => {
  console.log("The server has started!");
});

module.exports = {app};
