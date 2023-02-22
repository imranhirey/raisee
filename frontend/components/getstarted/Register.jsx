import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Input, useToast } from "@chakra-ui/react";
import React from "react";
import checkregister from "../../checkers/register.cjs";
import fundriserquestions from "./questions.js";
import {getNames}  from 'country-list'

const Register = () => {
  const toast = useToast()
  let [cureentStep, setCurrentStep] = React.useState(0);
  let [userinfo, setUserInfo] = React.useState({});
  let [countrylist, setCountryList] = React.useState([
    ...getNames()
  
  ]);

  let handlechange = (e) => {
    setUserInfo({ ...userinfo, [e.target.name]: e.target.value });
    console.log(userinfo);
  }
  let questions = fundriserquestions;
  let handleback = () => {
    if (cureentStep > 0) {
      setCurrentStep(cureentStep - 1);
    }
  };
  let handlenext = () => {
    // if ithe step is the country step
    if (cureentStep === 2) {
     let isvalid=checkregister.iscountryvalid(userinfo,countrylist);
    if (isvalid.status=="found"){
      alert("country found")
    }
    else{
      toast({
        title: 'oops! country not found but we have found a similar country name '+isvalid.country,
        description: "We've created your account for you.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    }
    if (cureentStep===questions.length-1) {
      let phonenumebr = userinfo["phone"];
      let jawaab= checkregister.isphonevalid(phonenumebr);
      console.log(jawaab);
    }
    if (cureentStep < questions.length - 1) {
      
      setCurrentStep(cureentStep + 1);
      // clear the input field
      document.querySelector("input").value = "";
    } else {
      console.log("done");
    }
  };
  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: "30px",
          color: "#E5E4E2",
        }}
      >
        LETS GET STARTED BY CREATING YOUR FUNDRAISER ACCOUNT
      </p>

      <Input
        name={questions[cureentStep].name}
        type={questions[cureentStep].type}
        variant="flushed"
        onChange={handlechange}
        style={{
          width: "100%",
          height: "100px",
          marginBottom: "10px",
          fontSize: "60px",
          color: "#081f33",
        }}
        placeholder={questions[cureentStep].question}
        size="md"
      />
   
      <div
        style={{
          display: "flex",

          width: "100%",
        }}
      >
        {cureentStep > 0 ? (
          <>
            <Button
              onClick={handleback}
              leftIcon={<ArrowBackIcon />}
              variant="link"
              width={200}
              
              colorScheme="gray"
            >
              Back
            </Button>
          </>
        ) : null}
        <Button onClick={handlenext} width={200} colorScheme="messenger">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Register;
