let express = require("express");
let app = express();
let mongoose = require("mongoose");
let config = require("./config");

let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

//mongoose connection stays open
mongoose.connect(config.getDbConnectionString);

app.listen(port);

