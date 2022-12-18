import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
function Order(){
const { data } = useSelector(store=>store.auth)
useEffect(()=>{
 
},[])

  const { isOpen,onOpen, onClose } = useDisclosure();
    return <Flex w='100%'>
             <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
             <Box w={['100%','100%','100%','80%']} ml={['0px','0px','0px','20%']} mb='60px'>
             <Navbar onOpen={onOpen}/>
             </Box>
           </Flex>
}


export default Order;