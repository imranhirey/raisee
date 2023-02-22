import {isValidNumber, parsePhoneNumber } from 'libphonenumber-js'
import levenshteinDistance from '../algos/twostringdistances';

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
    iscountryvalid(userinfo, countrylist){
        let country=userinfo["country"]
        country = country.toLowerCase();
        countrylist = countrylist.map((country) => country.toLowerCase());
        const countryindex = countrylist.indexOf(country)
  
        if (countryindex !== -1) {
         return {
            status: 'found',
            country: countrylist[countryindex],
         }
        } else {
          // If the user's input is not in the list, find the closest match
          let closestMatch = '';
          let closestDistance = Infinity;
        
          for (const name of countrylist) {
            const distance = levenshteinDistance(country, name);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestMatch = name;
            }
          }
        
         return {
            status: 'notfound',
            country: closestMatch,
         }
        }
    }
}

let checkregister = new Checkregister();

module.exports = checkregister;

