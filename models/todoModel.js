let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});

//the model will give me all the post/delete/update methods to use on the database
let Todos = mongoose.model("Todos", todoSchema);

module.exports = Todos;