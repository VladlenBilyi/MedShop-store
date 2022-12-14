import { Box, Button, Divider, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import {BiRupee} from "react-icons/bi"
export const ProductInfo=()=>{
    return(
        <>
        <Box paddingLeft='60px' paddingRight="60px" paddingTop="40px" paddingBottom="40px">
            <Flex>
                <Box padding="20px" w="25%">
                <Box  borderRadius="5px" padding="10px" border="1px solid grey">
                <Image margin="auto" boxSize="200px" src="https://cdn01.pharmeasy.in/dam/products_otc/P65906/duckbill-shape-n95-mask-packet-of-2-2-1641788727.jpg"/>
                </Box>
                <Flex gap="10px" marginTop="10px">
                   <Box  borderRadius="5px"  padding="10px" border="1px solid grey">
                   <Image margin="auto" boxSize="100px" src="https://cdn01.pharmeasy.in/dam/products_otc/P65906/duckbill-shape-n95-mask-packet-of-2-2-1641788727.jpg"/>
                    </Box>   
                   <Box  borderRadius="5px"  padding="10px" border="1px solid grey">
                   <Image margin="auto" boxSize="100px" src="https://cdn01.pharmeasy.in/dam/products_otc/P65906/duckbill-shape-n95-mask-packet-of-2-2-1641788727.jpg"/></Box> 
                </Flex>    
                <Text marginTop="10px" color="grey" fontSize="12px">Non Returnable</Text>
                </Box>
                <Box padding="25px" w="50%">
                  
                    <Text fontWeight="bold" color="rgb(79, 88, 94)" fontSize="25px" fontFamily="sans-serif">Duckbill Shape N95 Mask Packet Of 2</Text>
                    <Text fontWeight="semibold" color="rgb(16,132,126)" fontSize="20px" fontFamily="sans-serif">Covid Essentials</Text>
                    <Flex padding="20px">
                        <Box>
                        <Flex alignItems="center" >
                            
                             <BiRupee  fontSize="20px"/>
                             <Text fontWeight="bold" fontSize="20px">400</Text>
                             <Text marginLeft="15px" marginRight="5px" fontSize="15px">MRP-</Text>
                             <Text fontSize="15px">450</Text>
                             <Flex alignItems="center" paddingLeft="10px" color="white" borderRadius="10px" bg="rgb(249,140,142)" paddingRight="10px" marginLeft="15px">
                             <BiRupee  fontSize="15px"/>
                             <Box >50 off</Box>
                             </Flex>
                        </Flex>
                        <Text fontSize="15px" color="grey">Inclusive of all taxes</Text>
                        <Flex>
                            <Text marginRight="7px">Delivery by</Text>
                            <Text  fontWeight="bold"> 17 Dec - 18 Dec</Text>
                        </Flex>
                       
                        </Box>
                        <Spacer/>
                        <Box>
                            <Button color="white" bg="rgb(16,132,126)">Add To Cart</Button>
                        </Box>
                    </Flex>
                </Box>
                <Box paddingLeft="10px" paddingRight="10px" paddingTop="100px" w="25%">
                    <Text marginBottom="20px" fontSize="18px" color="rgb(79,88,94)">Please add item(s) to proceed</Text>
                    <Button w="100%" color="white" bg="rgb(149,149,149)">View Cart {">"}</Button>
                </Box>
            </Flex>
            <Divider marginBottom="20px" marginTop="20px" orientation='horizontal' />
        </Box>
        </>
    )
}