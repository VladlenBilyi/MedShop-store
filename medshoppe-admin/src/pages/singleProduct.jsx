import { Box, Flex, Heading, Image, Input, InputGroup, InputLeftAddon, SimpleGrid, Skeleton, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import {RiDeleteBin5Line} from 'react-icons/ri'
import { Navigate, useParams } from "react-router-dom";
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
    instock:true
  });
  const [loading,setLoading] = useState(false);
  const [red,setRed] = useState(false)
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

  const handleChange = (e)=>{
      let {name , value} = e.target;
      if(name == 'ancestor'){
         setData({...data,[name]:value.split(',')})
      }
      else if(name !== 'ancestor'){
        setData({...data,[name]:value})
      }
  }


  const deleteItem = async(id)=>{
    alert(id)
    // let res = await axios.delete(`https://crimson-indri-sock.cyclic.app/product/${id}`);
    // if(res.data.status){
    //   toast({
    //     title: 'Product Deleted',
    //     description: "Product is deleted by Admin",
    //     status: 'success',
    //     duration: 3000,
    //     isClosable: true,
    //     position:'top'
    //   })
    //   setRed(true)
    // }
    // toast({
    //   title: 'Error',
    //   description: res.data.message,
    //   status: 'error',
    //   duration: 3000,
    //   isClosable: true,
    //   position:'top'
    // })
}

if(red){
    setRed(false)
    return <Navigate to='/product' />
}
    return <Flex w='100%'>
             <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
             <Box w={['100%','100%','100%','80%']} ml={['0px','0px','0px','20%']} mb='60px'>
             <Navbar onOpen={onOpen}/>
             <Flex w='90%' flexDirection={['column-reverse','column-reverse','column-reverse','row']} m='auto' mt='30px' gap='30px'>
                <Box w={['100%','80%','60%','50%']} m='auto' textAlign='left'>
                <Box mt='30px'>
                {
                    loading?<Skeleton m='auto' width='100%' height='200px' />:
                 <SimpleGrid columns={['1','2','2','3']} gap='10px' w='100%'>
                    <Flex alignItems='center' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='10px'>
                    <Image  maxW='100%' h='90px' src={data.img1} />
                    </Flex>
                    <Flex alignItems='center' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='10px'>
                    <Image  maxW='100%' h='90px' src={data.img2} />
                    </Flex>
                    <Flex alignItems='center' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='10px'>
                    <Image  maxW='100%' h='90px' src={data.img3} />
                    </Flex>
                </SimpleGrid>               
                }
                </Box>
                <Text mt='10px' noOfLines='1'>{data.title}</Text>
                <Box w='100%'>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Price</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.mrp}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Strike Price</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.strike}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Brand</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.brand}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Quantity</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.quantity}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >In Stock</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.instock?'Available':'Not Available'}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Flex alignItems='center' w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Category</Flex>
                        <Text w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data.ancestor.join(',')}</Text>
                    </Flex>
                </Box>
                </Box>
                <Box mt='50px' w={['100%','80%','60%','50%']} m='auto'>
                <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Img1' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data.img1} name='img1' onChange={handleChange}  />
               </InputGroup>
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Img2' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data.img2} name='img2' onChange={handleChange}  />
               </InputGroup>
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Img3' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data.img3} name='img3' onChange={handleChange} />
               </InputGroup>
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Title' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data.title} name='title' onChange={handleChange} />
               </InputGroup>
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Price' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data.mrp} name='mrp' onChange={handleChange} />
               </InputGroup> 
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Strike' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data.strike} name='strike' onChange={handleChange} />
               </InputGroup> 
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Quantity' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white'type='text' value={data.quantity} name='quantity' onChange={handleChange} />
               </InputGroup> 
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Brand' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data.brand} name='brand' onChange={handleChange} />
               </InputGroup> 
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Category' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data.ancestor.join(',')} name='ancestor' onChange={handleChange} />
               </InputGroup> 
               <Flex w='100%' justifyContent='center' gap='40px' mt='20px'>
                <Flex w='50%' mt='15px' fontWeight='600' gap='10px' bg='red' color='white' borderRadius='5px' p='10px' alignItems='center' justifyContent='center'>
                   <Text>Delete</Text> <RiDeleteBin5Line onClick={()=>deleteItem(data._id)} fontWeight='600' color='white' />
                </Flex>
                <Flex w='50%' mt='15px' fontWeight='600' gap='10px' bg='green' color='white'  borderRadius='5px' p='10px' alignItems='center' justifyContent='center'>
                   <Text>Save</Text> <MdOutlineSecurityUpdate fontWeight='600' color='white' />
                </Flex>
               </Flex>
                </Box>
                
             </Flex>
             </Box>
           </Flex>
}


export default SingleProduct;