import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Image,
  Box,
  Center,
  Flex,
  Text,
  Divider
} from '@chakra-ui/react';
import { TbDiscount2 } from 'react-icons/tb';
import { CgProfile} from 'react-icons/cg';
import {BsCartFill} from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Navbardrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Box _hover={{ cursor: 'pointer' }}>
        <AiOutlineMenu ref={btnRef} color="white" fontSize={"27px"} onClick={onOpen} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}

      >
        <DrawerOverlay />
        <DrawerContent background='#10847e'>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>

              <Box boxSize='90px' mt={"4"}>
                <Image src='https://i.ibb.co/s5mNPnz/1.png' alt='logo' borderRadius={"50%"} />
              </Box>
            </Center>
          </DrawerHeader>

          <DrawerBody>

            <Flex flexDirection={"column"} justifyContent="center" gap="2rem">
              <Link to={"/"} onClick={onClose}><Text fontSize={"lg"} color="white" >Order Medicines</Text></Link>
              <Link to={"/"} onClick={onClose}><Text fontSize={"lg"} color="white" >Healthcare Products</Text></Link>
              <Link to={"/"} onClick={onClose}><Text fontSize={"lg"} color="white" >Lab tests</Text></Link>
              <Link to={"/"} onClick={onClose}><Text fontSize={"lg"} color="white" >RTPCR</Text></Link>


              <Link onClick={onClose} to={"/"}>
                <Flex alignItems={"center"} gap="5px">
                  <TbDiscount2 color="white" fontSize={"20px"} />
                  <Text fontSize={"lg"} color="white" w={"55px"}>Offers </Text>
                </Flex>              
              </Link>

              <Link onClick={onClose} to={"/"}>
                <Flex alignItems={"center"} gap="5px">
                  <CgProfile color="white" fontSize={"20px"} />
                  <Text fontSize={"lg"} color="white" w={"115px"}>Login/Signup</Text>
                </Flex>
              </Link>

              <Link onClick={onClose} to={"/"}>
                <Flex alignItems={"center"} gap="5px">
                  <BsCartFill color="white" />
                  <Text fontSize={"lg"} color="white" w={"40px"}>  Cart</Text>
                </Flex>
              </Link>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbardrawer;
