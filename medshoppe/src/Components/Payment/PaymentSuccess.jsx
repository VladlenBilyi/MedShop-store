import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

function PaymentSuccess() {
  const [state, setState] = useState(6);
  const navigate = useNavigate();
  const countDown = () => {
    if (state === 0) {
      localStorage.removeItem("user_details");
      return navigate("/");
    }
    if (state === 6) {
      setState(5);
    } else {
      setTimeout(() => {
        setState((state) => state - 1);
      }, 1000);
    }
  };

  const searchQuery = useSearchParams()[0];
  const ReferenceKey = searchQuery.get("reference");

  let user_data = useSelector((store) => store.auth.data);

  useEffect(() => {
    countDown();
  }, [state]);

  useEffect(() => {
    const handleOrder = async () => {
      const headers = {
        access_token: user_data.AccessToken,
      };
      const data = await axios.get(
        "https://crimson-indri-sock.cyclic.app/cart/items",
        { headers }
      );
      const user_details = JSON.parse(localStorage.getItem("user_details")); 
      const res = await axios.post(
          `https://crimson-indri-sock.cyclic.app/order/create`,
          {
            details: user_details,
            totalBill: data.data.totalPayment,
            paymentType: ReferenceKey ? "Razor Pay Online" : "Cash on Delivery",
          },
          { headers }
        );
      
    };
    handleOrder();
  }, []);

  return (
    <Box>
      <Heading
        fontSize={"24px"}
        color="teal.800"
        fontFamily={"Ubuntu, sans-serif"}
        textAlign="center"
        mt="13px"
      >
        You will be redirected to Home Page in 0{state} seconds
      </Heading>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Successfull</Heading>
        {ReferenceKey ? (
          <Text>Reference No. {ReferenceKey}</Text>
        ) : (
          <Text>Order will be delivered to your given address</Text>
        )}
        <iframe
          title="payment_gifs"
          src="https://giphy.com/embed/ekwEeLxb7G4DW44YaK"
          width="480"
          height="480"
          // frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </VStack>
    </Box>
  );
}

export default PaymentSuccess;
