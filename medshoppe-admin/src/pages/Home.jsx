import { Box, Flex, Heading, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Cdata } from "../config/chart";
import LineChart from "../components/chart.line";
import { BsFillCartCheckFill } from "react-icons/bs";
import {GiCartwheel} from 'react-icons/gi'
import {FaRupeeSign} from 'react-icons/fa'
import PieChart from "../components/donutChart";
function Home(){
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
                         <Text fontWeight='600' fontSize='20px'>1 lac</Text>
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
                        <Text fontWeight='600'  fontSize='20px'>Total Items Sale</Text>
                         <Text fontWeight='600'fontSize='20px'>100 Product</Text>
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
                         <Text fontWeight='600' fontSize='20px'>50 Orders</Text>
                        </Box>

                      </Flex>
                      
                    </Box>
              </Flex>

             </Box>
             <Box mt='50px'>
                 <PieChart />
             </Box>
              <Box>
              <Text fontSize='30px' color='green' fontWeight='600'>Current Sale Chart</Text> 
              <LineChart  chartData ={Cdata}/>
              </Box>
             </Box>
             </Box>
           </Flex>
}


export default Home;