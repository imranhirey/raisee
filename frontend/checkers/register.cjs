import {isValidNumber, parsePhoneNumber } from 'libphonenumber-js'

class Checkregister{

    isemailvalid(email){
        let emailregex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        return emailregex.test(email);
    }
    
    ispasswordvalid(password){
        // password must be at least 8 characters long and contain atleast 1 number
        let passwordregex = /^(?=.*[0-9]).{8,}$/;
        return passwordregex.test(password);

    }
    isaddressvalid(address){
        /// string must be at least 10 characters long
        let addressregex = /^.{10,}$/;
        return addressregex.test(address);
    }
    isphonevalid(phone){
        const number = isValidNumber(phone);

        if (number) {
          console.log('Valid phone number:', number);
        } else {
          console.log('Invalid phone number');
        }

    }
}

let checkregister = new Checkregister();
checkregister.isphonevalid("0615345088");

module.exports = checkregister;
