import { Avatar, Box, Button,
         Drawer,
         DrawerBody,
         DrawerCloseButton,
         DrawerContent,
         DrawerHeader,
         DrawerOverlay, 
         Flex, 
         Image, 
         Text, 
         } from "@chakra-ui/react";
import {AiOutlineHome , AiOutlineProject}  from 'react-icons/ai'   
import {CgProfile} from 'react-icons/cg'
import {BsBoxSeam} from 'react-icons/bs'
import {TbLogin} from 'react-icons/tb';
import {BiLogIn} from 'react-icons/bi'
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'
const  Sidebar = ({isOpen,onOpen, onClose})=> {
    const btnRef = React.useRef()
    const [currentPage , setCP] = useState('/')
     const onClose1 = (val)=>{
      localStorage.setItem('crp',JSON.stringify(val))
        setCP(val);
     }
     const onClose2 = (val)=>{
      localStorage.setItem('crp',JSON.stringify(val))
        setCP(val);
     }
     useEffect(()=>{
       let crp = JSON.parse(localStorage.getItem('crp')) || 'home';
       setCP(crp)
     },[])
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          h='100vh'
          >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton fontSize='16px' mt='18px' mr='10px'/>
            <DrawerHeader>
                <Flex alignItems='center' gap='20px'  mb='30px'>
                <Image maxW='50px' maxH='50px' borderRadius='50%' src='https://i.ibb.co/s5mNPnz/1.png' />
                <Text fontWeight='600' fontSize='20px'>MedShoppe</Text>
            </Flex>
            </DrawerHeader>
  
            <DrawerBody>
            <Flex className="otherPageLink" flexDirection='column' gap='15px'>
             <Link onClick={()=>onClose1('home')} className={currentPage == 'home' ? 'current':'navLink'} to='/'><Flex alignItems='center' gap='20px' fontSize='20px'><AiOutlineHome fontSize='30px' color='orange' /><Text>Home</Text></Flex></Link>
             <Link onClick={()=>onClose1('product')} className={currentPage == 'product' ? 'current':'navLink'} to='/product'><Flex alignItems='center' gap='20px' fontSize='20px'><AiOutlineProject fontSize='30px' color='orange' /><Text>Products</Text></Flex></Link>
             <Link onClick={()=>onClose1('order')} className={currentPage == 'order' ? 'current':'navLink'} to='/order'><Flex alignItems='center' gap='20px' fontSize='20px'><BsBoxSeam fontSize='30px' color='orange' /><Text>Orders</Text></Flex></Link>
             <Link onClick={()=>onClose1('profile')} className={currentPage == 'profile' ? 'current':'navLink'} to='/profile'><Flex alignItems='center' gap='20px' fontSize='20px'><CgProfile fontSize='30px' color='orange' /><Text>My Profile</Text></Flex></Link>
             <Link onClick={()=>onClose1('login')} className={currentPage == 'login' ? 'current':'navLink'} to='/login'><Flex alignItems='center' gap='20px' fontSize='20px'><BiLogIn fontSize='30px' color='orange' /><Text>Login</Text></Flex></Link>
            </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box w='20%' display={['none','none','none','block']} p='30px 10px' bg='#475056' h='100vh' position='fixed'>
            <Flex alignItems='center' gap='20px'  mb='30px'>
                <Image maxW='50px' maxH='50px' borderRadius='50%' src='https://i.ibb.co/s5mNPnz/1.png' />
                <Text fontWeight='600' fontSize='20px' color='white'>MedShoppe</Text>
            </Flex>
            <Box>
            <Flex className="otherPageLink" flexDirection='column' gap='15px'>
             <Link onClick={()=>onClose2('home')} className={currentPage == 'home' ? 'current':'navLink'} to='/'><Flex alignItems='center' gap='20px' fontSize='20px'><AiOutlineHome fontSize='30px'  /><Text >Home</Text></Flex></Link>
             <Link onClick={()=>onClose2('product')} className={currentPage == 'product' ? 'current':'navLink'} to='/product'><Flex  alignItems='center' gap='20px' fontSize='20px'><AiOutlineProject fontSize='30px'   /><Text >Products</Text></Flex></Link>
             <Link onClick={()=>onClose2('order')} className={currentPage == 'order' ? 'current':'navLink'} to='/order'><Flex  alignItems='center' gap='20px' fontSize='20px'><BsBoxSeam fontSize='30px'   /><Text >Orders</Text></Flex></Link>
             <Link onClick={()=>onClose2('profile')} className={currentPage == 'profile' ? 'current':'navLink'} to='/profile'><Flex  alignItems='center' gap='20px' fontSize='20px'><CgProfile fontSize='30px'   /><Text >My Profile</Text></Flex></Link>
             <Link onClick={()=>onClose2('login')} className={currentPage == 'login' ? 'current':'navLink'} to='/login'><Flex alignItems='center' gap='20px' fontSize='20px'><BiLogIn fontSize='30px' color='orange' /><Text>Login</Text></Flex></Link>
             
              </Flex>
            </Box>
            </Box>
            </>
    )
  }

  export {Sidebar}