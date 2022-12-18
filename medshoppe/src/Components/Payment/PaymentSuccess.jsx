import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";

function PaymentSuccess() {
  const [state,setState] = useState(6);
  const navigate = useNavigate();
  const countDown = ()=>{
    if (state === 0) {
      return navigate("/");
    }
    if(state===6){
      setState(5);
    }
    else {
      setTimeout(() => {
        setState((state) => state - 1);
      }, 1000);
    }
  }
 

  const searchQuery = useSearchParams()[0];
  const ReferenceKey = searchQuery.get("reference") ;

  useEffect(() => {
   
      countDown();
  }, [state]);

  return (
    <Box>
        <Heading>You will be redirected to Home Page in 0{state} seconds</Heading>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successfull</Heading>
      { ReferenceKey ? <Text>Reference No. {ReferenceKey}</Text> : <Text>Order will be delivered to your given address</Text>}
      </VStack>
    </Box>
  );
}

export default PaymentSuccess;
