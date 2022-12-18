import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Image,
  Box,
  Center,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { TbDiscount2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logoutAPI } from "../../../Store/Auth/auth.action";

function Navbardrawer() {
  const dispatch = useDispatch();
  const { data, isAuth, email } = useSelector((store) => store.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box _hover={{ cursor: "pointer" }}>
        <AiOutlineMenu
          ref={btnRef}
          color="white"
          fontSize={"27px"}
          onClick={onOpen}
        />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="full"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent background="#10847e">
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>
              <Link to={"/"} onClick={onClose}>
                <Box boxSize="90px" mt={"4"}>
                  <Image
                    src="https://i.ibb.co/s5mNPnz/1.png"
                    alt="logo"
                    borderRadius={"50%"}
                  />
                </Box>
              </Link>
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <Flex
              flexDirection={"column"}
              justifyContent="center"
              alignItems={"center"}
              gap="2rem"
            >
              <Link to={"/ordermedicine"} onClick={onClose}>
                <Text fontSize={"lg"} color="white">
                  Order Medicines
                </Text>
              </Link>
              <Link to={"/category"} onClick={onClose}>
                <Text fontSize={"lg"} color="white">
                  Healthcare Products
                </Text>
              </Link>
              <Link to={"/"} onClick={onClose}>
                <Text fontSize={"lg"} color="white">
                  Lab tests
                </Text>
              </Link>
              <Link to={"/"} onClick={onClose}>
                <Text fontSize={"lg"} color="white">
                  RTPCR
                </Text>
              </Link>

              <Link onClick={onClose} to={"/"}>
                <Flex alignItems={"center"} gap="5px">
                  <TbDiscount2 color="white" fontSize={"20px"} />
                  <Text fontSize={"lg"} color="white" w={"55px"}>
                    Offers{" "}
                  </Text>
                </Flex>
              </Link>

              {isAuth ? (
                <Menu>
                  <MenuButton color={"white"}>Hii, {data?.username}</MenuButton>
                  <MenuList>
                    <MenuItem>{data?.username}</MenuItem>
                    <MenuItem>{email}</MenuItem>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={() => dispatch(logoutAPI())}>
                      Loguot
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Link onClick={onClose} to={"/login"}>
                  <Flex alignItems={"center"} gap="5px">
                    <CgProfile color="white" fontSize={"20px"} />
                    <Text fontSize={"lg"} color="white" w={"115px"}>
                      Login/Signup
                    </Text>
                  </Flex>
                </Link>
              )}
              <Link onClick={onClose} to={"/cart"}>
                <Flex alignItems={"center"} gap="5px">
                  <BsCartFill color="white" />
                  <Text fontSize={"lg"} color="white" w={"40px"}>
                    {" "}
                    Cart
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbardrawer;
