import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";

function PaymentSuccess() {
  const searchQuery = useSearchParams()[0];
  const ReferenceKey = searchQuery.get("reference");

  return (
    <Box>
        
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successfull</Heading>
      { ReferenceKey!==undefined ? <Text>Order will be delivered to your given address</Text> :<Text>Reference No. {ReferenceKey}</Text>}
      </VStack>
    </Box>
  );
}

export default PaymentSuccess;
