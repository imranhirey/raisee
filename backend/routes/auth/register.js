let router = require("express").Router();
let Registration = require("../../db/Actions/registration");
router.post("/new", (req, res) => {

let data= req.body;

  let registration = new Registration({...data});
  registration
    .save()
    .then((result) => {
      res.status(200).send({
        message: "Registration is successful", //  message:"Registration is successful"
      });
    })
    .catch((err) => {
      res.status(400).send(err)
    });
});
module.exports = router;


// if exetute the code above i get the following error displayed in the terminal m=?