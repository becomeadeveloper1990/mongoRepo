var express = require('express');
var bodyParser = require("body-parser");
const {ObjectID} = require('mongodb');

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

app.get('/todos', (req, res) => {
  todo.find().then((todos) => {
    res.send({todos});
  }, e => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }
  todo.findById({
    _id: id
  }).then(todo => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send(todo.text);
  }).catch(e => res.status(400).send());
});

app.listen(3000, () => {
  console.log("The server has started!");
});

module.exports = {app};
