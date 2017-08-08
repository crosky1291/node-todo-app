let Todos = require("../models/todoModel");

module.exports = function(app) {
  app.get("/api/setupTodos", function(req, res) {
    
    //seed database
    let starterTodos = [
      {
        username: "test",
        todo: "Buy milk",
        isDone: false,
        hasAttachment: false
      },
      {
        username: "test",
        todo: "feed dog",
        isDone: false,
        hasAttachment: false
      },
      {
        username: "test",
        todo: "Learn node",
        isDone: false,
        hasAttachment: false
      }
    ];

    Todos.create(starterTodos, function(err, results) {
      res.send(results);
    });
  });
};