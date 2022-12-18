import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Spacer,
  Text,
  SimpleGrid,
  Container,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { CarouselBox_Third } from "./SahilComponents/HomeComponents/CarouselBox_third";

export const ProductInfo = () => {
  //   const { loading, data, token } = useSelector((store) => store.auth);
  const [data1, setData] = useState();
  const params = useParams();
  const toast = useToast();
  const id = params.id;
  const [Added, setAdded] = useState(false);
  useEffect(() => {
    fetch(`https://crimson-indri-sock.cyclic.app/product/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data[0]);
        setData(res.data[0]);
      });
  }, []);

  let user_data = useSelector((store) => store.auth.data);

  const postProduct = () => {
    if (!user_data.AccessToken) {
      toast({
        title: "You've to Login First",

        status: "warning",
        duration: 2000,
      });
    } else {
      try {
        fetch("https://crimson-indri-sock.cyclic.app/cart/items", {
          method: "POST",
          body: JSON.stringify({ productID: id }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            access_token: user_data.AccessToken,
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
        toast({
          title: "1 Item added to Cart",

          status: "success",
          duration: 2000,
        });
      } catch (error) {
        console.log(error);
      }
      setAdded(true);
    }
    // console.log(token);
  };

  return (
    <>
      <Box
        paddingLeft="50px"
        paddingRight="50px"
        paddingTop="40px"
        paddingBottom="40px"
      >
        {/* <Flex> */}
        <SimpleGrid columns={[1, 1, 3, 3]} gap="0px">
          <Container w="300px" padding="20px">
            <Box borderRadius="5px" padding="10px" border="1px solid grey">
              <Image h="150px" maxW="100%" margin="auto" src={data1?.img1} />
            </Box>
            <Flex gap="15px" marginTop="10px">
              <Box borderRadius="5px" padding="10px" border="1px solid grey">
                <Image margin="auto" boxSize="100px" src={data1?.img2} />
              </Box>
              <Box borderRadius="5px" padding="10px" border="1px solid grey">
                <Image margin="auto" boxSize="100px" src={data1?.img3} />
              </Box>
            </Flex>
            <Text marginTop="10px" color="grey" fontSize="12px">
              Non Returnable
            </Text>
          </Container>
          <Container w={["300px", "450px"]} padding="25px">
            <Text
              fontWeight="bold"
              color="rgb(79, 88, 94)"
              fontSize={["20px", "25px"]}
              fontFamily="sans-serif"
            >
              {data1?.title}
            </Text>
            <Text
              fontWeight="semibold"
              color="rgb(16,132,126)"
              fontSize={["15px", "20px"]}
              fontFamily="sans-serif"
            >
              {data1?.ancestor[1]}
            </Text>
            <Flex padding="20px">
              <Box>
                <Flex alignItems="center">
                  <BiRupee fontSize="40px" />
                  <Text fontWeight="bold" fontSize="20px">
                    {data1?.mrp}
                  </Text>
                  <Text marginLeft="15px" marginRight="5px" fontSize="15px">
                    MRP-
                  </Text>
                  <Text
                    fontSize="15px"
                    marginRight="20px"
                    textDecorationLine="line-through"
                  >
                    {data1?.strike}
                  </Text>
                  <Flex
                    w="100%"
                    alignItems="center"
                    paddingLeft="10px"
                    color="white"
                    borderRadius="10px"
                    bg="rgb(249,140,142)"
                  >
                    <BiRupee fontSize="15px" />
                    <Text w="50px">
                      {Math.floor(data1?.strike - data1?.mrp)} off
                    </Text>
                  </Flex>
                </Flex>
                <Text fontSize="15px" color="grey">
                  Inclusive of all taxes
                </Text>
                <Flex>
                  <Text marginRight="7px">Delivery by</Text>
                  <Text fontWeight="bold"> 27 Dec - 28 Dec</Text>
                </Flex>
              </Box>
              <Spacer />
            </Flex>
            <Box>
              <Button
                onClick={postProduct}
                _hover={{ bg: "teal.300" }}
                color="white"
                bg="rgb(16,132,126)"
              >
                Add To Cart
              </Button>
            </Box>
          </Container>
          <Container
            w="260px"
            paddingLeft="10px"
            paddingRight="10px"
            paddingTop="100px"
          >
            <Text marginBottom="20px" fontSize="18px" color="rgb(79,88,94)">
              {Added ? "Go To Your Cart..." : "Please add item(s) to proceed"}
            </Text>
            <Link to={"/cart"}>
              <Button
                disabled={Added === false}
                _hover={{ bg: "rgb(149,149,100)" }}
                w="100%"
                color="white"
                bg={Added ? "teal" : "rgb(149,149,149)"}
              >
                View Cart {">"}
              </Button>
            </Link>
          </Container>
        </SimpleGrid>
        {/* </Flex> */}
        <Divider
          marginBottom="20px"
          marginTop="20px"
          orientation="horizontal"
        />
        <Text
          fontWeight="bold"
          color="rgb(79, 88, 94)"
          fontSize="25px"
          fontFamily="sans-serif"
        >
          Shop by Categories
        </Text>
        <section>
          <CarouselBox_Third />
        </section>
      </Box>
           
    </>
  );
};
