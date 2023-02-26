class Registerhandler {
  steps = {
    name: 0,
    email: 1,
    country: 2,
    phone: 3,
    address: 4,
    password1: 5,
    password2: 6,
  };
  handlenext(
    cureentStep,
    checkregister,
    toast,
    questions,
    userinfo,
    setUserInfo,
    countrylist,
    setCurrentStep,
    setmodalprops
  ) {
    switch (cureentStep) {
      case this.steps.country:
        let isvalid = checkregister.iscountryvalid(userinfo, countrylist);
        if (isvalid.status == "found") {
          setCurrentStep(cureentStep + 1);
          document.querySelector("input").value = "";
        } else {
          setmodalprops({
            isOpen: true,
            onClose: () => {
              setmodalprops({ isOpen: false });
            },
            title: "Country not found",
            body: `Sorry! We did not find that , Did you mean ${isvalid.country}?`,
            onConfirm: () => {
              setUserInfo({ ...userinfo, country: isvalid.country });
              setmodalprops({ isOpen: false });
              setCurrentStep(cureentStep + 1);
              document.querySelector("input").value = "";
            },

            confirmText: "Yes",
            cancelText: "No",
          });
        }
        break;
      case this.steps.phone:
        let phone = userinfo["phone"];
        let country = userinfo["country"];
        let isvalidphone = checkregister.isphonevalid(phone, country);
        if (isvalidphone.status == "valid") {
          setCurrentStep(cureentStep + 1);
          document.querySelector("input").value = "";
        }
        if (isvalidphone.status == "invalid") {
          toast({
            title: "Invalid phone number",
            description: "Please enter a valid phone number",
            status: "error",
            duration: 5000,
            isClosable: true, // this
          });
        }
        if (isvalidphone.status == "missmatch") {
          setmodalprops({
            isOpen: true,
            onClose: () => {
              setmodalprops({ isOpen: false });
            },
            title: "Phone number missmatch",
            body: `The phone number you entered does not match the country you selected. Did you mean ${isvalidphone.phone}?`,
            onConfirm: () => {
              setUserInfo({ ...userinfo, phone: isvalidphone.phone });
              setmodalprops({ isOpen: false });
              setCurrentStep(cureentStep + 1);
              document.querySelector("input").value = "";
            },
            confirmText: "Yes",
            cancelText: "No",
          });
        }
        break;
      case this.steps.name:
        let name = userinfo["name"];
        if (name.length > 5) {
          setCurrentStep(cureentStep + 1);
          document.querySelector("input").value = "";
        } else {
          toast({
            title: "valid name required",
            description: "Please enter a valid name",
            status: "error",
            duration: 5000,
            isClosable: true, // this
          });
        }
      default:
        setCurrentStep(cureentStep + 1);
        document.querySelector("input").value = "";
    }
  }
  handlechange(e, userinfo, setUserInfo) {
    setUserInfo({ ...userinfo, [e.target.name]: e.target.value });
    console.log(userinfo);
  }
}

let registerhandler = new Registerhandler();

module.exports = registerhandler;

/**
 *  if (cureentStep == this.steps.email) {
      let isvalid = checkregister.isemailvalid(userinfo["email"]);
      alert(isvalid);

    }
 */
