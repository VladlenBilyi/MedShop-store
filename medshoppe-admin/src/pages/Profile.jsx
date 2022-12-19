import { Box, Flex, Input, InputGroup, InputLeftAddon, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
let initState = {
  title:'',
  mrp:'',
  quantity:'',
  ancestor:[],
  brand:'',
  img1:'',
  img2:'',
  img3:'',
  strike:'',

}
function Profile(){
  const { isOpen,onOpen, onClose } = useDisclosure();
  const [data1,setData] = useState(initState);
  const [loading,setLoading] = useState(false);
  const {data} = useSelector(store=>store.auth)
  const toast = useToast()

  const handleChange = (e)=>{
    let {name , value} = e.target;
    if(name == 'ancestor'){
       setData({...data1,[name]:value.split(',')})
    }
    else if(name !== 'ancestor'){
      setData({...data1,[name]:value})
    }
}

const handleUpdateObject = async()=>{
    setLoading(true);
    let res = await axios.post('https://crimson-indri-sock.cyclic.app/product',data1 , {headers : {access_token :data.AccessToken}})
    setLoading(false)
    if(res.data.status){
      toast({
        title: 'Posted Success',
        description: "Product is posted successfully",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position:'top'
      })
    }
    else{
      toast({
        title: 'Posted Error',
        description: "Something went wrong try again !",
        status: 'error',
        duration: 2000,
        isClosable: true,
        position:'top'
      })
    }
}
    return <Flex w='100%'>
             <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
             <Box w={['100%','100%','100%','80%']} ml={['0px','0px','0px','20%']} mb='60px'>
             <Navbar onOpen={onOpen}/>
             <Box w='90%' m='auto'>

<Box m='auto' mt='50px' w={['100%','80%','60%','50%']} >
   <InputGroup mt='5px'>
      <InputLeftAddon borderColor='green' bg='green' color='white' fontWeight='500' w='30%' children='Img1' />
      <Input borderColor='green' fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.img1} name='img1' onChange={handleChange}  />
  </InputGroup>
  <InputGroup mt='5px'>
      <InputLeftAddon borderColor='green' bg='green' color='white' fontWeight='500' w='30%' children='Img2' />
      <Input borderColor='green' fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.img2} name='img2' onChange={handleChange}  />
  </InputGroup>
  <InputGroup mt='5px'>
      <InputLeftAddon borderColor='green' bg='green' color='white' fontWeight='500' w='30%' children='Img3' />
      <Input borderColor='green' fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.img3} name='img3' onChange={handleChange} />
  </InputGroup>
  <InputGroup mt='5px'>
      <InputLeftAddon borderColor='green' bg='green' color='white' fontWeight='500' w='30%' children='Title' />1
      <Input borderColor='green' fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.title} name='title' onChange={handleChange} />
  </InputGroup>
  <InputGroup mt='5px'>
      <InputLeftAddon borderColor='green' bg='green' color='white' fontWeight='500' w='30%' children='Price' />
      <Input borderColor='green' fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.mrp} name='mrp' onChange={handleChange} />
  </InputGroup> 
  <InputGroup mt='5px'>
      <InputLeftAddon borderColor='green' bg='green' color='white' fontWeight='500' w='30%' children='Strike' />
      <Input borderColor='green' fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.strike} name='strike' onChange={handleChange} />
  </InputGroup> 
  <InputGroup mt='5px'>
      <InputLeftAddon borderColor='green' bg='green' color='white' fontWeight='500' w='30%' children='Quantity' />
      <Input borderColor='green' fontSize='13px' fontWeight='400' focusBorderColor='white'type='text' value={data1.quantity} name='quantity' onChange={handleChange} />
  </InputGroup> 
  <InputGroup mt='5px'>
      <InputLeftAddon borderColor='green' bg='green' color='white' fontWeight='500' w='30%' children='Brand' />
      <Input borderColor='green' fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.brand} name='brand' onChange={handleChange} />
  </InputGroup> 
  <InputGroup mt='5px'>
      <InputLeftAddon borderColor='green' bg='green' color='white' fontWeight='500' w='30%' children='Category' />
      <Input borderColor='green' fontSize='13px' fontWeight='400' focusBorderColor='white' type='text' value={data1.ancestor.join(',')} name='ancestor' onChange={handleChange} />
  </InputGroup> 
   <Flex onClick={handleUpdateObject} mt='15px' fontWeight='600' gap='10px' bg='green' color='white'  borderRadius='5px' p='10px' alignItems='center' justifyContent='center'>
      <Text>Save</Text> <MdOutlineSecurityUpdate fontWeight='600' color='white' />
   </Flex>
   </Box>

     </Box>
             </Box>
           </Flex>
}


export default Profile;