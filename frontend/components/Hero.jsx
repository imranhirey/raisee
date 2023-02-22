import { ArrowForwardIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // backround image
            backgroundImage: "url('/pics/backround.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

          }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              maxHeight: "300px",
              maxWidth: "450px",
              color: "gray",
              textAlign: "center",
              // remove space between lines
              lineHeight: "1.2",
            }}
          >
            START RAISING FUNDS FOR YOUR CAUSE WITH RAISEE
          </p>
         <div style={{
              display: 'flex',
         }}>
             <Button
          
          colorScheme="blackAlpha"
          style={{
            marginTop: "20px",
          }}
          rightIcon={<InfoOutlineIcon />}
        >
          Demo
        </Button>
        <Link href="/auth/register">
        <Button
            colorScheme="green"
            style={{
              marginTop: "20px",
              marginLeft: "20px",
            }}
            rightIcon={<ArrowForwardIcon />}
          >
            Get Started
          </Button>
        </Link>
         
         
         </div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
