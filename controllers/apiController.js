let Todos = require("../models/todoModel");
let bodyParser = require("body-parser");

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  //get all the todos
  app.get("/api/todos/:username", function(req, res) {
    Todos.find({username: req.params.username},
    function(err, todos) {
      if (err) throw err;

      res.send(todos);
    });
  });

  //get a specific todo
  app.get("/api/todo/:id", function(req, res) {
    Todos.findById({_id: req.params.id}, function(err, todo) {
      if (err) throw err;

      res.send(todo);
    });
  });

  //update a todo or add a new todo
  app.post("/api/todo", function(req, res) {
    
    if(req.body.id) {
      Todos.findByIdAndUpdate(req.body.id, {
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment 
      }, function(err, todo) {
        if (err) throw err;

        res.send("Todo Updated");
      });
    } else {
      let newTodo = Todos({
        username: "test",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment
      });

      newTodo.save(function(err) {
        if (err) throw err;
        res.send("New todo Added");
      });
    }
  });

  //delete a todo
  app.delete("/api/todo", function(req, res) {
    Todos.findByIdAndRemove(req.body.id, function(err) {
      if (err) throw err;
      res.send("Todo Deleted");
    });
  });


};