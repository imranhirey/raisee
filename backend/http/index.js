let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let cors = require("cors");
const connecttodb = require("../db/connection");
app.use(cors({
  origin: "*",
}));

connecttodb()
// let connection = require("../db/connection/index");
// let mongoose = require("mongoose");
// mongoose.connect("dabasreurl");
// let db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("console-connected-to-db");  
//   // create sample schema name= "user"
//   let userSchema = new mongoose.Schema({
//     name: String, 
//     age: Number,
//     email: String
//   })
//   // create sample model name= "User"
//   let User = mongoose.model("User", userSchema);
//   // create sample document
//   let user = new User({
//     name: "John",
//     age: 20,
//     email: "jjd"
//   })
//   // save sample document
//   user.save(function (err, user) {
//     if (err) return console.error(err);
//     console.log("user saved");
//   }
//   );
  


      
    
// });
app.listen(4000, () => {
  console.log("Server is running on port 3000");
});
module.exports = app;

if (module) {
  module.exports = app;
}

// Path: db/connection/index.js
