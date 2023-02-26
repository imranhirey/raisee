import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button, Input, useToast } from "@chakra-ui/react";
import React from "react";
import checkregister from "../../checkers/register.cjs";
import fundriserquestions from "./questions.js";
import { getNames } from "country-list";
import registerhandler from "../../handelers/handleregister.js";
import ConfirmModel from "../models/ConfirmModel.jsx";

const Register = () => {
  const toast = useToast();
  let [cureentStep, setCurrentStep] = React.useState(0);
  let [userinfo, setUserInfo] = React.useState({});
  let [countrylist, setCountryList] = React.useState([...getNames()]);
  let [modelprops, setModelProps] = React.useState({
    isOpen: false,
    onClose: () => {
      setModelProps({ isOpen: false });
    },
    title: "",
    body: "",
    onConfirm: () => {},
    confirmText: "",
    cancelText: "",
  });

  let handlechange = (e) => {
    registerhandler.handlechange(e, userinfo, setUserInfo);
  };
  let questions = fundriserquestions;
  let handleback = () => {
    if (cureentStep > 0) {
      setCurrentStep(cureentStep - 1);
    }
  };
  let handlenext = () => {
    registerhandler.handlenext(
      cureentStep,
      checkregister,
      toast,
      questions,
      userinfo,
      setUserInfo,
      countrylist,
      setCurrentStep,
      setModelProps
    );
    // if ithe step is the country step
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
      <ConfirmModel {...modelprops} />
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
