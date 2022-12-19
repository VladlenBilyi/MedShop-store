import { Box, Flex, Image, SimpleGrid, Text, Tooltip, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsFileCode } from "react-icons/bs";
import {HiOutlineMail} from 'react-icons/hi'
import {HiDevicePhoneMobile} from 'react-icons/hi2';
import {FaRegAddressBook} from 'react-icons/fa'
import {MdLocationCity} from 'react-icons/md'
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import { colors } from "./colors";
function getTool(ele){
  return <Box >
  <Box p='10px'>
    <Flex alignItems='center' gap='30px' mt='15px'>
    <BiUserCircle fontSize='25px' color='orange' />
    <Text>{ele.userDetails.name } </Text>
    </Flex>
    <Flex alignItems='center' gap='30px' mt='15px'>
    <HiDevicePhoneMobile fontSize='25px' color='orange' /> 
    <Text>{ele.userDetails.phone } </Text>
    </Flex>
    <Flex alignItems='center' gap='30px' mt='15px'>
    <HiOutlineMail fontSize='25px' color='orange' />
    <Text> {ele.userID.email } </Text>
    </Flex>
    <Flex alignItems='center' gap='30px' mt='15px'>
    <MdLocationCity fontSize='25px' color='orange' />
    <Text> {ele.userDetails.city_name } </Text>
    </Flex>
   <Flex alignItems='center' gap='30px' mt='15px'>
   <BsFileCode fontSize='25px' color='orange' />
    <Text> {ele.userDetails.zip_code } </Text>
   </Flex>
   <Flex alignItems='center' gap='30px' mt='15px'>
   <FaRegAddressBook fontSize='25px' color='orange' />
    <Text> {ele.userDetails.address} </Text>
   </Flex>
  </Box>
</Box>
}

function getProdOrder(ele){
  return <SimpleGrid p='15px' bg='white' columns='2' spacing='10px'>
  {
    ele.orderData.map((ele)=>{
       return <Flex flexDirection='column' gap='20px' alignItems='center' justifyContent='center'>
         <Image maxW='100%' h='100px' src={ele.productID.img1} />
         <Text color='black' noOfLines='1'>{ele.productID.title}</Text>
       </Flex>
    })
  }
</SimpleGrid>
}
function OrderPending({show , handleShow}){
const [orderS , setOrderS] = useState([])
const [orderP , setOrderP] = useState([])
const { isOpen,onOpen, onClose } = useDisclosure();
const { data } = useSelector(store=>store.auth)
const [count , setCount] = useState(0)
const toast = useToast()
const handleChange= async(val , id)=>{
      if(val == 'packed'){
       let res = await axios.patch(`https://crimson-indri-sock.cyclic.app/order/packed/${id}`,{} , {headers : {access_token : data.AccessToken}})
       if(res.data.status){
        setCount(count+1)
          toast({
            title: 'Order Updated',
            description: "Order Updated Successfully",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position:'top'
          })
       }
       else{
        toast({
          title: 'Not Authorize',
          description: "Your Token is expired !",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position:'top'
        })
       }
       
       return;
      }
      else if (val == 'shipped'){
        let res = await axios.patch(`https://crimson-indri-sock.cyclic.app/order/shipped/${id}`,{} , {headers : {access_token : data.AccessToken}})
        if(res.data.status){
           setCount(count+1)
           toast({
            title: 'Order Updated',
            description: "Order Updated Successfully",
             status: 'success',
             duration: 3000,
             isClosable: true,
             position:'top'
           })
        }
        else{
         toast({
           title: 'Not Authorize',
           description: "Your Token is expired !",
           status: 'error',
           duration: 3000,
           isClosable: true,
           position:'top'
         })
        }
        
        return;

      }
      else if (val == 'delivered'){
        let res = await axios.patch(`https://crimson-indri-sock.cyclic.app/order/delivered/${id}`,{} , {headers : {access_token : data.AccessToken}})
        if(res.data.status){
          setCount(count-1)
           toast({
             title: 'Order Success',
             description: "Order Delivered Successfully", title: 'Order Updated',
             description: "Order Updated Successfully",
             status: 'success',
             duration: 3000,
             isClosable: true,
             position:'top'
           })
        }
        else{
         toast({
           title: 'Not Authorize',
           description: "Your Token is expired !",
           status: 'error',
           duration: 3000,
           isClosable: true,
           position:'top'
         })
        }
        
        return;

      }
}




useEffect(()=>{
  let da = fetch('https://crimson-indri-sock.cyclic.app/order',{headers : {access_token : data.AccessToken}})
  .then((er)=>er.json()).then((er)=>{
   if(er.data.length !==0){
    let Os = [];
    let Op = [];
     er.data.map((ele)=>{
        if(ele.delivered  == false){
           Op.push(ele)
        }
        else{
          Os.push(ele)

        }
     })
     setOrderP(Op)
     setOrderS(Os)
   }
  })
},[count])

    return <Flex w='100%'>
             <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
             <Box w={['100%','100%','100%','80%']} ml={['0px','0px','0px','20%']} mb='60px'>
             <Navbar onOpen={onOpen}/>
             <Flex w='100%'>
              <Box onClick={()=>handleShow(false)} w='50%' borderBottom='3px solid #006600'  bg='white' color='#006600'  fontWeight='500' textAlign='center' p='10px'>Pending Order</Box>
              <Box onClick={()=>handleShow(true)} w='50%' bg='white' fontWeight='500' textAlign='center' p='10px'>Success Order</Box>
             </Flex>
             <SimpleGrid w='90%' m='auto' columns={['1','2','2','3']} spacing='20px' mt='40px'>
               {
                              orderP?.map((ele)=>{
                              return <Box fontSize='14px' textAlign='left' fontWeight='500' gap='10px' p='20px' borderRadius='10px' alignItems='center' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                  <Flex justifyContent='space-between'>
                  <Flex alignItems='center' gap='20px'>
                    <Flex fontSize='20px' borderRadius='50%' w='50px' h='50px' alignItems='center' bg={colors[ele.userID.username[0].toLowerCase()]} color='white' justifyContent='center'>
                   <Box>
                   {
                    ele.userID.username[0].toUpperCase()
                   }
                </Box>
                  </Flex>
                    </Flex>
                    <Box mr='40px'>
                       <Text>
                        Total Bill : {Math.ceil(ele.totalBill)}
                       </Text>
                       <Text onClick={()=>handleChange('packed' , ele._id)}>Packed : {ele.packed ? 'Yes' : 'No' }</Text>
                       <Text onClick={()=>handleChange('shipped' , ele._id)}>Shipped : {ele.shipped ? 'Yes' : 'No' }</Text>
                       <Text onClick={()=>handleChange('delivered' , ele._id)}>Delivered : {ele.delivered ? 'Yes' : 'No' }</Text>
                    </Box>
                  </Flex>
                  <Flex gap='4%' mt='20px' w='100%' justifyContent='center' alignItems='center'>
                    <Box borderRadius='6px' textAlign='center' w='48%' p='10px' boxShadow='white 2px 3px 4px 8px'>
                    <Tooltip label={getTool(ele)} hasArrow arrowSize={15}>
                     <Text>Address</Text>
                   </Tooltip>
                    </Box>
                    <Box borderRadius='6px' textAlign='center' w='48%' p='10px' boxShadow='white 2px 3px 4px 8px'>
                    <Tooltip placement='right' boxShadow='rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px' bg='white'  label={getProdOrder(ele)} hasArrow arrowSize={15}>
                     <Text>Order</Text>
                   </Tooltip>
                    </Box>
                    </Flex>

                    </Box>
                            })
                           }
             </SimpleGrid>
             </Box>
           </Flex>
}


export default OrderPending;