import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Divider, Input, Select } from "@chakra-ui/react";
import { getCountries } from "libphonenumber-js";
import React, { useEffect } from "react";
import checkregister from "../../checkers/register.cjs";
import fundriserquestions from "./questions.js";
import {getNameList, getNames}  from 'country-list'
import levenshteinDistance from "../../algos/twostringdistances.js";

const Register = () => {
     

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
      let country=userinfo["country"]
      const countryindex = countrylist.indexOf(country);

      if (countryindex !== -1) {
        console.log(`Found: ${countrylist[countryindex]}`);
      } else {
        // If the user's input is not in the list, find the closest match
        let closestMatch = '';
        let closestDistance = Infinity;
      
        for (const name of countrylist) {
          const distance = levenshteinDistance(userInput, name);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestMatch = name;
          }
        }
      
        console.log(`Not found. Closest match: ${closestMatch}`);
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
              widn
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
