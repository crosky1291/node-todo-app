let configValues = require("./config");

module.exports = {
  getDbConnectionString: function() {
    return `mongodb://${configValues.username}:${configValues.password}@ds035965.mlab.com:35965/node-todo-app`;
  }
};