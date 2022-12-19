import { Box, Flex, Heading, Image, Input, InputGroup, InputLeftAddon, SimpleGrid, Skeleton, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
function SingleProduct(){
  const {data} = useSelector(store=>store.auth)
  const {id} = useParams();
  const { isOpen,onOpen, onClose } = useDisclosure();
  const toast = useToast()
  const redirect = useNavigate();
  const [data1,setData] = useState({
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
  useEffect(()=>{
   setLoading(true)
    async function getData(){
        let res = await axios.get(`https://crimson-indri-sock.cyclic.app/product/${id}`).finally((e)=>setLoading(false))
        if(res.data.status){
            setData(res.data.data[0])
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
         setData({...data1,[name]:value.split(',')})
      }
      else if(name !== 'ancestor'){
        setData({...data1,[name]:value})
      }
  }
  const updateQuantity = async(id,val)=>{
     let res = await axios.patch(`https://crimson-indri-sock.cyclic.app/product/update/${id}`,{val :val} ,{headers:{access_token:data?.AccessToken}})
      if(res.status){
         setLoading(true)
        let res1 = await axios.get(`https://crimson-indri-sock.cyclic.app/product/${id}`).finally((e)=>setLoading(false))
        if(res1.data.status){
            setData(res1.data.data[0])
        }
     }
     else{
        toast({
            title: 'Wrong Operation',
            description: "Something went wrong please try again !",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position:'top'
          })
     }

  }

const handleUpdateObject = async(id)=>{
    let res = await fetch(`https://crimson-indri-sock.cyclic.app/product/${id}`,{
        method : 'PATCH',
        body:JSON.stringify(data1),
        headers:{access_token:data?.AccessToken}
       }).then((re)=>re.json()).then((re)=>{
        console.log(re)
        if(re.status){
          let res1 = fetch(`https://crimson-indri-sock.cyclic.app/product/${id}`)
          .then((re1)=>re1.json()).then((re1)=>{
            if(re1.data.status){
              setData(re1.data.data[0])
          }
          })
          .finally((e)=>setLoading(false))
            toast({
                title: 'Updated Success',
                description: "Product is updated",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
        }
        else{
            toast({
                title: 'Update Error',
                description: "Product is not updated",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position:'top'
              })
        }
       }
       
       )
       .catch((e)=>{
           toast({
            title: 'Updated Error',
            description: e.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
            position:'top'
          })
       })
}


  const deleteItem = async(id)=>{
    let res = fetch(`https://crimson-indri-sock.cyclic.app/product/${id}`,{
        method:'DELETE',
        headers:{
          access_token : data?.AccessToken
        }
  }).then((e)=>e.json()).then((e)=>{
  if(e.status){
    toast({
      title: 'Deleted Success',
      description: "Product is deleted success",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
    return redirect('/product')
  }
  else{
    toast({
      title: 'Not Authorize',
      description: "Product is not deleted",
      status: 'error',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  }
}
  )
  .catch((err)=>{
    toast({
      title: 'Not Authorize',
      description: "Product is not deleted",
      status: 'error',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  })
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
                    <Image  maxW='100%' h='90px' src={data1.img1} />
                    </Flex>
                    <Flex alignItems='center' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='10px'>
                    <Image  maxW='100%' h='90px' src={data1.img2} />
                    </Flex>
                    <Flex alignItems='center' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' p='10px'>
                    <Image  maxW='100%' h='90px' src={data1.img3} />
                    </Flex>
                </SimpleGrid>               
                }
                </Box>
                <Text mt='10px' noOfLines='1'>{data1.title}</Text>
                <Box w='100%'>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Price</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data1.mrp}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Strike Price</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data1.strike}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Brand</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data1.brand}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Quantity</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{Math.ceil(data1.quantity)}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Box w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >In Stock</Box>
                        <Box w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data1.instock?'Available':'Not Available'}</Box>
                    </Flex>
                    <Flex mt='10px'>
                        <Flex alignItems='center' w='30%' bg='green' color='white' fontWeight='500' borderRadius='5px 0px 0px 5px' p='10px' >Category</Flex>
                        <Text w='70%' border='1px solid gray' fontWeight='500' borderRadius='0px 5px 5px 0px' p='10px 20px'>{data1.ancestor.join(',')}</Text>
                    </Flex>
                    <Flex w='100%' justifyContent='center' gap='40px' mt='20px'>
                <Flex onClick={()=>updateQuantity(data1._id , -1)} w='50%' mt='15px' fontWeight='600' gap='10px' bg='red' color='white' borderRadius='5px' p='10px' alignItems='center' justifyContent='center'>
                   <Text>DEC Quantity</Text> 
                </Flex>
                <Flex w='50%' onClick={()=>updateQuantity(data1._id , 1)} mt='15px' fontWeight='600' gap='10px' bg='green' color='white'  borderRadius='5px' p='10px' alignItems='center' justifyContent='center'>
                   <Text>INC Quantity</Text>
                </Flex>
               </Flex>
                </Box>
                </Box>
                <Box mt='50px' w={['100%','80%','60%','50%']} m='auto'>
                <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Img1' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.img1} name='img1' onChange={handleChange}  />
               </InputGroup>
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Img2' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.img2} name='img2' onChange={handleChange}  />
               </InputGroup>
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Img3' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.img3} name='img3' onChange={handleChange} />
               </InputGroup>
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Title' />1
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.title} name='title' onChange={handleChange} />
               </InputGroup>
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Price' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.mrp} name='mrp' onChange={handleChange} />
               </InputGroup> 
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Strike' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.strike} name='strike' onChange={handleChange} />
               </InputGroup> 
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Quantity' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white'type='text' value={Math.ceil(data1.quantity)} name='quantity' onChange={handleChange} />
               </InputGroup> 
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Brand' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.brand} name='brand' onChange={handleChange} />
               </InputGroup> 
               <InputGroup mt='5px'>
                   <InputLeftAddon fontWeight='500' w='30%' children='Category' />
                   <Input fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.ancestor.join(',')} name='ancestor' onChange={handleChange} />
               </InputGroup> 
               <Flex w='100%' justifyContent='center' gap='40px' mt='20px'>
                <Flex onClick={()=>deleteItem(data1._id)} w='50%' mt='15px' fontWeight='600' gap='10px' bg='red' color='white' borderRadius='5px' p='10px' alignItems='center' justifyContent='center'>
                   <Text>Delete</Text> <RiDeleteBin5Line fontWeight='600' color='white' />
                </Flex>
                <Flex onClick={()=>handleUpdateObject(data1._id)} w='50%' mt='15px' fontWeight='600' gap='10px' bg='green' color='white'  borderRadius='5px' p='10px' alignItems='center' justifyContent='center'>
                   <Text>Save</Text> <MdOutlineSecurityUpdate fontWeight='600' color='white' />
                </Flex>
               </Flex>
                </Box>
                
             </Flex>
             </Box>
           </Flex>
}


export default SingleProduct;