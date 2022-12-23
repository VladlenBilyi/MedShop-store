import { Box, Flex, Heading, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import LineChart from "../components/chart.line";
import { BsFillCartCheckFill } from "react-icons/bs";
import {GiCartwheel} from 'react-icons/gi'
import {FaRupeeSign} from 'react-icons/fa'
import PieChart from "../components/donutChart";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
function Home(){
  const {data} = useSelector(store=>store.auth)
  const [rev,setRev] = useState(0)
  const [os,setOs] = useState(0)
  const [op,setOp] = useState(0)
  useEffect(()=>{
    setRev(0);
    setOs(0);
    setOp(0);
     const getData = async()=>{
     let da = fetch('https://crimson-indri-sock.cyclic.app/order',{headers : {access_token : data.AccessToken}})
     .then((er)=>er.json()).then((er)=>{
      if(er.data.length !==0){
        er.data.map((ele)=>{
           setRev((prev)=>prev+ele.totalBill)
           setOs((prev)=>prev+ele.orderData.length)
           if(ele.delivered  == false){
             setOp((prev)=>prev+1)
           }
        })
      }
     })
    }
     getData();
  },[])
  const { isOpen,onOpen, onClose } = useDisclosure();
    return <Flex w='100%'>
             <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
             <Box w={['100%','100%','100%','80%']} ml={['0px','0px','0px','20%']} mb='60px'>
             <Navbar onOpen={onOpen}/>
             <Box w='90%' m='auto'>
              <Box>
              <Flex flexWrap='wrap' gap='30px' justifyContent='center' alignItems='center' mt='50px' mb='70px'>
              <Box borderRadius='10px' w='300px' p='20px' bg='#ffcff2' color='#ff4bcc'>
                      <Flex alignItems='center' gap='20px'>
                      <Box >
                          <Flex alignItems='center' justifyContent='center' borderRadius='10px' bg='#ff4bcc' w='40px' p='8px 3px'  color='white'>
                               <FaRupeeSign fontSize='20px' />
                          </Flex>
                        </Box>
                        <Box>
                        <Text fontWeight='600' fontSize='20px' >Total Revenue</Text>
                         <Text fontWeight='600' fontSize='20px'>{Math.ceil(rev)}</Text>
                        </Box>
                      </Flex>
                      
                    </Box>
                    <Box borderRadius='10px' w='300px' p='20px' bg='#ffd49f' color='#c07700'>
                      <Flex alignItems='center' gap='20px'>
                        <Box>
                          <Flex alignItems='center' justifyContent='center' borderRadius='10px' bg='#c07700' w='40px' p='8px 3px'  color='white'>
                               <BsFillCartCheckFill fontSize='20px' />
                          </Flex>
                        </Box>
                        <Box>
                        <Text fontWeight='600'  fontSize='20px'>Total Product Sale</Text>
                         <Text fontWeight='600'fontSize='20px'>{os + op} Product</Text>
                        </Box>

                      </Flex>
                      
                    </Box>
                    <Box borderRadius='10px' w='300px' p='20px' bg='#bef0ff' color='#0087b0'>
                      <Flex alignItems='center' gap='20px'>
                        <Box>
                        <Flex alignItems='center' justifyContent='center' borderRadius='10px' bg='#0087b0' w='40px' p='8px 3px'  color='white'>
                               <GiCartwheel fontSize='20px' />
                          </Flex>
                        </Box>
                        <Box>
                        <Text fontWeight='600'  fontSize='20px'>Total Order Pending</Text>
                         <Text fontWeight='600' fontSize='20px'>{op} Orders</Text>
                        </Box>
                      </Flex>
                      
                    </Box>
              </Flex>

             </Box>
             <Box mb='30px'><Text fontWeight='600' fontSize='20px'>Details Graph And Chart</Text></Box>
             <Flex alignItems='center' justifyContent='space-between' w='90%' m='auto' flexDir={['column','column','column','row']}>
             <Box w={['100%','100%','80%','40%']}>
                 <PieChart />
             </Box>
              <Box w={['100%','100%','80%','60%']} >
              <LineChart />
              </Box>
             </Flex>
              <Box>
              </Box>
             </Box>
             </Box>
           </Flex>
}


export default Home;