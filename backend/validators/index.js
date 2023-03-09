class Appvalidator {
isregisterationdatavalid(data){
    let valid = true;
    let requiredfields = ["name", "address", "email", "phone", "country", "password"];
    for (let i = 0; i < requiredfields.length; i++) {
        if (!data[requiredfields[i]]) {
            valid = false;
            break;
        }
        }
        return valid;


}
}

let appvalidator = new Appvalidator();
module.exports = appvalidator;