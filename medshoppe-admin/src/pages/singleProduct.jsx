import { Box, Flex, Heading, Image, SimpleGrid, Skeleton, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
function SingleProduct(){
  const {id} = useParams();
  const { isOpen,onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const [data,setData] = useState({
    _id:'',
    title:'',
    mrp:0,
    quantity:0,
    ancestor:[],
    brand:'',
    img1:'',
    img2:'',
    img3:'',
    strike:0,
    instock:false
  });
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
   setLoading(true)
    async function getData(){
        let res = await axios.get(`https://crimson-indri-sock.cyclic.app/product/${id}`).finally((e)=>setLoading(false))
        if(res.data.status){
            setData(res.data.data[0])
            console.log(res.data.data)
        }
        else{
            toast({
                title: 'Not Found',
                description: "Product is not found",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position:'top'
              })
        }
    }
    getData()
  },[])
    return <Flex w='100%'>
             <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
             <Box w={['100%','100%','100%','80%']} ml={['0px','0px','0px','20%']} mb='60px'>
             <Navbar onOpen={onOpen}/>
             <Box w='90%' m='auto'>
                <Box w='50%' textAlign='left'>
                <Box mt='30px'>
                {
                    loading?<Skeleton m='auto' width='100%' height='200px' />:
                 <Flex gap='10px'>
                    <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='10px'>
                    <Image  maxW='90px' h='90px' src={data.img1} />
                    </Box>
                    <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='10px'>
                    <Image  maxW='90px' h='90px' src={data.img2} />
                    </Box>
                    <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='10px'>
                    <Image  maxW='90px' h='90px' src={data.img3} />
                    </Box>
                </Flex>               
                }
                </Box>
                <Text mt='10px' noOfLines='1'>{data.title}</Text>
                <Box>
                    <Flex mt='10px'>
                        <Box w='150px' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Price</Box>
                        <Box w='250px' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.mrp}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='150px' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Strike Price</Box>
                        <Box w='250px' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.strike}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='150px' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Brand</Box>
                        <Box w='250px' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.brand}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='150px' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Quantity</Box>
                        <Box w='250px' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.quantity}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='150px' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >In Stock</Box>
                        <Box w='250px' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.instock?'Available':'Not Available'}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Flex alignItems='center' w='150px' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Category</Flex>
                        <Text w='250px' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.ancestor.join(',')}</Text>
                    </Flex>
                </Box>
                </Box>
                
             </Box>
             </Box>
           </Flex>
}


export default SingleProduct;