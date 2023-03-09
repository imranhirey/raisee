const { default: mongoose } = require("mongoose");

const connecttodb = () => {
    mongoose.connect("mongodb+srv://imranhirey:yaamaalik321@raisee.gr2el.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log("could not connect to mongodb", err));
}
module.exports = connecttodb;
