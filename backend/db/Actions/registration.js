const is = require("../../reusable/is");
const appvalidator = require("../../validators");
let RegistrationSchema = require("../schemas/registration");

// // mongoose schema
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const registrationSchema = new Schema({
//   name: String,
//   address: String,
//   email: String,
//   phone: String,
//   country: String,
//   password: String,
// });
// const Registration = mongoose.model("Registration", registrationSchema);  i

class Registration {

  /**
   *  name: 'Abdinur hashi egalle',
  email: 'admin@gmail.com',
  country: 'somalia',
  phone: '+8801730978088',
  address: 'bansree',
  password1: 'Zd4cR9BBWJt5sEc',
  password2: 'Zd4cR9BBWJt5sEc'

   */

  // if 
  constructor({ name, address, email, phone, country, password1 }) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.country = country;
    this.password = password1;
  }
  save() {
    return new Promise((resolve, reject) => {
      console.log("save method is called", this.email);
      let data={
        name: this.name,
        address: this.address,
        email: this.email,
        phone: this.phone,
        country: this.country,
        password: this.password
        
      }
      console.log(data);
      let emptyfield = is.thereemptyfield(data);
      console.log(emptyfield);
      let is_ok = appvalidator.isregisterationdatavalid(data) && !emptyfield;
      console.log('is ok ',is_ok);
      if (is_ok) {
        let registration = new RegistrationSchema({
          name: data.name,
          address: data.address,
          email: data.email,
          phone: data.phone,
          location: {
            country: data.country,
          },
          password: data.password,
          userid: "P"+is.generateid(10),
          verifications: {
            isemailverified: false,
            isphoneverified: false,
            isidverified: {
              status: false,
               documenttype: "",
              documentnumber: "",
              documentimage: "",
            }
          }

        });
        registration.save().then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
        
      } else {
        reject("there is an empty field or invalid data");
        
      }

    
    });
  }
}

module.exports = Registration;
