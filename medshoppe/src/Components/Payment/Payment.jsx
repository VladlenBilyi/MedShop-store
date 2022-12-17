import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [checkedItems_1, setCheckedItems_1] = useState(false);
  const [checkedItems_2, setCheckedItems_2] = useState(false);
  const [loading, setLoading] = useState(false);
  const space = useRef(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleGetCart = async () => {
    setLoading(true);

    try {
      const headers = {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWRlNDM4MzM4ZDdmMWJiNDY4N2E5OCIsImVtYWlsIjoidW1hbmdhcm9yYTAxMzRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ1bWFuZyBhcm9yYSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY3MTI5MTk3MCwiZXhwIjoxNjcxMzc4MzcwfQ.Go1z6-W0P6I2oAMJWpJZHqixbW_-E6In5BSc91Xd1fg",
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
  console.log(data,loading);

  const handlePutCart = async (product_id) => {
    try {
      const headers = {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWRlNDM4MzM4ZDdmMWJiNDY4N2E5OCIsImVtYWlsIjoidW1hbmdhcm9yYTAxMzRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ1bWFuZyBhcm9yYSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY3MTI5MTk3MCwiZXhwIjoxNjcxMzc4MzcwfQ.Go1z6-W0P6I2oAMJWpJZHqixbW_-E6In5BSc91Xd1fg",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWRlNDM4MzM4ZDdmMWJiNDY4N2E5OCIsImVtYWlsIjoidW1hbmdhcm9yYTAxMzRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ1bWFuZyBhcm9yYSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY3MTI5MTk3MCwiZXhwIjoxNjcxMzc4MzcwfQ.Go1z6-W0P6I2oAMJWpJZHqixbW_-E6In5BSc91Xd1fg",
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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWRlNDM4MzM4ZDdmMWJiNDY4N2E5OCIsImVtYWlsIjoidW1hbmdhcm9yYTAxMzRAZ21haWwuY29tIiwidXNlcm5hbWUiOiJ1bWFuZyBhcm9yYSIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY3MTI5MTk3MCwiZXhwIjoxNjcxMzc4MzcwfQ.Go1z6-W0P6I2oAMJWpJZHqixbW_-E6In5BSc91Xd1fg",
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

  const handlePayment = async (num) => {
    if (checkedItems_1 === false && checkedItems_2 === false) {
      return;
    } else if (checkedItems_1 === true) {
      return navigate("/paymentsuccess");
    } else if (checkedItems_2 === true) {
      try {
        console.log(num);
        const key = await axios.get(`http://localhost:8080/razor/key`);
        const data = await axios.post(`http://localhost:8080/razor/payment`, {
          amount: num,
        });
        let options = {
          key: key.data.key,
          amount: num,
          currency: "INR",
          name: "MEDSHOPPE",
          description: "Make People Happy",
          image: "https://i.ibb.co/s5mNPnz/1.png",
          order_id: data.data.id,
          callback_url: `http://localhost:8080/razor/verification?email=umangarora0134@gmail.com&amount=${num}`,
          prefill: {
            name: "Umang Arora",
            email: "umangarora0134@gmail.com",
            contact: "9999999999",
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
      border={"0.5px solid teal"}
      mt={"10px"}
      position="absolute"
      height="570px"
      display={"inline-block"}
      ml={"10px"}
      width={"55%"}
      >
        <Box display={"flex"} w={""} justifyContent="space-between">
          <Heading ml="100px" mt="10px">Product Details</Heading>
          <Text mt="15px" mr="100px">Price</Text>

        </Box>
        <Flex
         flexDirection={"column"}
         height={"480px"}
         mt={{ base: "-15px", lg: "auto" }}
         overflow="scroll"
        >
        {data.cartItems &&
          data.cartItems.map((el, i) => (
            <Box key={i}
            justify="right"
            alignItems="right"
            height="auto"
            w={{ base: "auto", lg: "auto" }}
            mt={{ base: "20px", lg: "20px" }}
            ml={{ base: "-480px", lg: "40px" }}
            gap="2"
           
            >
              <Text>{el.productID.title}</Text>
              <Image h="80px" w={"80px"} src={el.productID.img1} />
              <Text>MRP : {el.productID.mrp}</Text>
              <Button onClick={() => handlePutCart(el.productID._id)}>-</Button>
              <Text>Quantity {el.quantity}</Text>
              <Button onClick={() => handlePostCart(el.productID._id)}>
                +
              </Button>
              <Button onClick={() => handleDelete(el._id)}>
                Delete This Product From Cart
              </Button>
            </Box>
          ))}
          {/* <div ref={space}></div> */}


        </Flex>
        <Box>
          <Text>Total Payment - {data.totalPayment}</Text>
        </Box>
      </Box>
      <Box
       borderRadius={"15px"}
       border={"0.5px solid blue"}
       mt={"10px"}
       height="570px"
       display={"inline-block"}
       ml={"905px"}
       width={"40%"}
      >
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
        <Button onClick={() => handlePayment(data.totalPayment)}>Pay Now</Button>
      </Box>
    </>
  );
}

export default Payment;
