import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import {useSelector} from "react-redux";
import { GrSubtract } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [checkedItems_1, setCheckedItems_1] = useState(false);
  const [checkedItems_2, setCheckedItems_2] = useState(false);
  const [loading, setLoading] = useState(false);
  const space = useRef(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  let user_data = useSelector((store)=>store.auth.data);
  let Email = useSelector((store)=>store.auth.email);
  console.log(user_data);
  let phone_data = useSelector((store)=>store.address);
  console.log(phone_data);
  
  const handleGetCart = async () => {
    setLoading(true);

    try {
      const headers = {
        access_token:
          user_data.AccessToken,
      };
      const res = await axios.get(
        "https://crimson-indri-sock.cyclic.app/cart/items",
        { headers }
      );
      setLoading(false);
      setData(res.data);
      space.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      console.log(error);
    }
  };
  // handleGetCart();
  console.log(data, loading);

  const handlePutCart = async (product_id) => {
    try {
      const headers = {
        access_token:
        user_data.AccessToken,
      };
      const res = await axios.put(
        "https://crimson-indri-sock.cyclic.app/cart/items",
        { productID: product_id },
        { headers }
      );
      // console.log(res);
      handleGetCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostCart = async (product_id) => {
    try {
      const headers = {
        access_token:
        user_data.AccessToken,
      };
      const res = await axios.post(
        "https://crimson-indri-sock.cyclic.app/cart/items",
        { productID: product_id },
        { headers }
      );
      // console.log(res);
      handleGetCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (cart_id) => {
    try {
      const headers = {
        access_token:
        user_data.AccessToken,
      };
      const res = await axios.delete(
        `https://crimson-indri-sock.cyclic.app/cart/items/${cart_id}`,
        { headers }
      );
      handleGetCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async (amount) => {
    if (checkedItems_1 === false && checkedItems_2 === false) {
      return;
    } else if (checkedItems_1 === true) {
      return navigate("/paymentsuccess");
    } else if (checkedItems_2 === true) {
      try {
        // console.log(typeof num);
        const key = await axios.get(`http://localhost:8080/razor/key`);
        const data = await axios.post(`http://localhost:8080/razor/payment`, {
          amount: Math.ceil(amount),
        });
        console.log(data);
        let options = {
          key: key.data.key,
          amount: data.data.amount,
          currency: "INR",
          name: "MEDSHOPPE",
          description: "Make People Happy",
          image: "https://i.ibb.co/s5mNPnz/1.png",
          order_id: data.data.id,
          callback_url: `http://localhost:8080/razor/verification?email=${Email}&amount=${amount}`,
          prefill: {
            name: user_data.username,
            email: "",
            contact: "",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "teal",
          },
        };
        let razorPay = new window.Razorpay(options);

        razorPay.open();
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    handleGetCart();
  }, []);

  const handleChange_1 = (e) => {
    setCheckedItems_1(true);
    setCheckedItems_2(false);
  };
  const handleChange_2 = (e) => {
    setCheckedItems_1(false);
    setCheckedItems_2(true);
  };

  return (
    <>
      <Box
        borderRadius={"15px"}
        mt={"10px"}
        position="absolute"
        height="600px"
        display={"inline-block"}
        ml={"10px"}
        width={"55%"}
      >
        <Box display={"flex"} w={""} justifyContent="space-between">
          <Heading
            ml="100px"
            mt="10px"
            fontFamily={"Ubuntu, sans-serif"}
            fontSize="26px"
            color={"blackAlpha.500"}
          >
            {data.cartItems ? `Your Cart (${data.cartItems.length})` :`Your Cart (${0}))` }
          </Heading>
          <Text
            mt="15px"
            mr="118px"
            fontFamily={"Ubuntu, sans-serif"}
            color={"blackAlpha.700"}
            fontSize="20px"
          >
            Price
          </Text>
        </Box>
        <Flex
          flexDirection={"column"}
          height={"500px"}
          mt={{ base: "-15px", lg: "auto" }}
          overflow="scroll"
        >
          {data.cartItems &&
            data.cartItems.map((el, i) => (
              <>
                <Flex justifyContent={"space-between"}>
                  <Box
                    display={"flex"}
                    flexDirection="column"
                    key={i}
                    justify="right"
                    alignItems="right"
                    height="auto"
                    w={{ base: "auto", lg: "auto" }}
                    mt={{ base: "20px", lg: "20px" }}
                    ml={{ base: "-480px", lg: "40px" }}
                    gap="2"
                  >
                    <Flex gap={5}>
                      <Image className="imageFromPayment" h="180px" maxW={"180px"} src={el.productID.img1} />
                      <Image className="imageFromPayment" h="180px" maxW={"180px"} src={el.productID.img2} />
                    </Flex>
                    <Box>
                      <Text
                        h="auto"
                        fontFamily={"Ubuntu, sans-serif"}
                        color="teal"
                        w="350px"
                        fontSize={"18px"}
                      >
                        {el.productID.title}
                      </Text>
                    </Box>
                  </Box>
                  <Text
                    mt={{ lg: "130px" }}
                    fontSize="24px"
                    fontFamily={"Ubuntu, sans-serif;"}
                    mr={{ lg: "100px" }}
                    color="teal"
                  >
                    ₹ {el.productID.mrp}
                  </Text>
                </Flex>
                <Flex mt="20px" mb="40px">
                  <Text ml="40px" fontSize={"20px"} color="gray">
                    Quantity{" "}
                  </Text>
                  <Flex gap={4}>
                    <Button
                      ml="20px"
                      variant="outline"
                      disabled={el.quantity === 1}
                      colorScheme={"red"}
                      onClick={() => handlePutCart(el.productID._id)}
                    >
                      <GrSubtract />
                    </Button>
                    <Text fontSize={"25px"}>{el.quantity}</Text>
                    <Button
                      colorScheme={"green"}
                      variant="outline"
                      onClick={() => handlePostCart(el.productID._id)}
                    >
                      <AiOutlinePlus />
                    </Button>
                    <Button
                      colorScheme={"red"}
                      onClick={() => handleDelete(el._id)}
                    >
                      DELETE
                    </Button>
                  </Flex>
                </Flex>
              </>
            ))}
          {/* <div ref={space}></div> */}
        </Flex>

        <Box>
          <Flex justifyContent={"space-around"}>
            <Text
              mt="10px"
              fontFamily={"Ubuntu, sans-serif;"}
              color="teal.500"
              fontSize={"24px"}
            >
              Total Amount
            </Text>
            <Text ml="40px" color={"red"} mt="25px">
              {<GrSubtract color="red" />}
            </Text>
            <Text
              mt="10px"
              color="teal.500"
              fontFamily={"Ubuntu, sans-serif"}
              fontSize={"24px"}
            >
              ₹ {data.totalPayment}
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box
        borderRadius={"15px"}
        // border={"0.5px solid blue"}
        mt={"10px"}
        height="570px"
        display={"inline-block"}
        ml={"905px"}
        width={"40%"}
      >
        <Flex justifyContent={"space-around"}>
        <Box h="180px" backgroundColor={"teal.100"} w="220px" borderRadius={"28px"} ml="20px" mt="20px" >
          <Text fontSize={"24px"} color="teal.800"
              fontFamily={"Ubuntu, sans-serif"} textAlign="center" mt="13px" >Total Payable Amount</Text>

              <Text fontSize={"24px"} color="teal.800"
              fontFamily={"Ubuntu, sans-serif"} textAlign="center" mt="13px" > ₹ {data.totalPayment}</Text>

        </Box>

        <Box h="180px" w="220px" backgroundColor={"blue.200"} borderRadius={"28px"} ml="20px" mt="20px">
              <Text fontSize={"24px"} color="blue.800"
              fontFamily={"Ubuntu, sans-serif"} textAlign="center" mt="13px" >Your Cart Items</Text>
              <Text
              fontSize={"24px"} color="blue.800"
              fontFamily={"Ubuntu, sans-serif"} textAlign="center" mt="13px" 
              >{data.cartItems ? data.cartItems.length : 0 } Products</Text>
              <Text fontSize={"24px"} color="blue.800"
              fontFamily={"Ubuntu, sans-serif"} textAlign="center" mt="13px" >Added</Text>

        </Box>


        </Flex>

        <Heading fontSize={"24px"} color="blue.500"
              fontFamily={"Ubuntu, sans-serif"} textAlign="center" mt="44px" >Choose Payment Method</Heading>
        <Box mt="30px">

        <label className="rad-label">
          <input
            type="radio"
            className="rad-input"
            onChange={(e) => handleChange_1(e)}
            value={checkedItems_1}
            name="rad"
          />
          <div className="rad-design"></div>
          <div className="rad-text">Pay on Delivery</div>
        </label>

        <label className="rad-label">
          <input
            type="radio"
            className="rad-input"
            onChange={(e) => handleChange_2(e)}
            value={checkedItems_2}
            name="rad"
          />
          <div className="rad-design"></div>
          <div className="rad-text">Razor Pay Online</div>
        </label>
        </Box>
        <Box textAlign={"center"} mt="20px">
        <Button colorScheme={"green"} variant="solid" onClick={() => handlePayment(data.totalPayment)}>
          PLACE ORDER
        </Button>

        </Box>
      </Box>
    </>
  );
}

export default Payment;
