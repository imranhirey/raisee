// mongodb registration schema 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registrationSchema = new Schema({
    userid: String,
    name: String,
    address: String,
    email: String,
    phone: String,
    location: {},
    password: String,
    verifications: {}
});
const Registration = mongoose.model("Registration", registrationSchema);
    

module.exports = Registration;