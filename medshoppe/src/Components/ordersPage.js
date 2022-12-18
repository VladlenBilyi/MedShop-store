import { Box, Button, Heading, HStack, Image, Progress, SimpleGrid, Text, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"




export const OrdersPage = () => {
    const navigate = useNavigate()
    const toast=useToast();
    const [v1,setV1]=useState(1)
    const [v2,setV2]=useState(1)
    const [v3,setV3]=useState(1)
    
    let user_data = useSelector((store) => store.auth.data);

    useEffect(() => {
        try {
            fetch('https://crimson-indri-sock.cyclic.app/order/user/get', {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "access_token": user_data.AccessToken
                }
            })
                .then(response => response.json())
                .then((res) => {
                    console.log(res);

                });

        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>

            <Box px={["10px", "20px", "50px", "80px"]} py='20px'>
                
                <Box>
                    <Heading fontSize={'27px'} textAlign='center'>
                        My Orders
                    </Heading>
                    <HStack mt="50px" spacing="0">
                    <Progress colorScheme='green' w="33%" size='sm' value={v1} />
                    <Text fontWeight="bold" borderRadius="5px" p="4px" color="white" bg="#045d2f">Packed</Text>
                        <Progress colorScheme='green'  w="33%" size='sm' value={30} />
                        <Text fontWeight="bold" borderRadius="5px" p="4px" color="white" bg="#045d2f">Shipped</Text>
                        <Progress colorScheme='green'  w="33%" size='sm' value={50} />
                        <Text fontWeight="bold" borderRadius="5px" p="4px" color="white" bg="#045d2f">Delivered</Text>
                    </HStack>
                    <SimpleGrid justifyItems="center" columns={["1", "2", "3"]} bg="#edf3f8" p={["10px", "20px"]} mt='30px' spacing={["20px", "30px"]}>
                        {/* {} */}
                        <Box bg="white" p="20px" w="70%" >
                            <Image m="auto" maxW="100px" src="https://i.ibb.co/CBfC1WK/dettol500ml1.webp" />
                            <Text marginTop="10px" whiteSpace="nowrap" w="100%" overflow="hidden" textOverflow="ellipsis" textAlign="left" fontWeight="bold" color="rgb(79, 88, 94)" >Dettol Antiseptic Liquid Bottle Of 550 Ml</Text>
                        </Box>
                        <Box bg="white" p="20px" w="70%" >
                            <Image m="auto" maxW="100px" src="https://i.ibb.co/CBfC1WK/dettol500ml1.webp" />
                            <Text marginTop="10px" whiteSpace="nowrap" w="100%" overflow="hidden" textOverflow="ellipsis" textAlign="left" fontWeight="bold" color="rgb(79, 88, 94)" >Dettol Antiseptic Liquid Bottle Of 550 Ml</Text>
                        </Box>
                        <Box bg="white" p="20px" w="70%" >
                            <Image m="auto" maxW="100px" src="https://i.ibb.co/CBfC1WK/dettol500ml1.webp" />
                            <Text marginTop="10px" whiteSpace="nowrap" w="100%" overflow="hidden" textOverflow="ellipsis" textAlign="left" fontWeight="bold" color="rgb(79, 88, 94)" >Dettol Antiseptic Liquid Bottle Of 550 Ml</Text>
                        </Box>
                        <Box bg="white" p="20px" w="70%" >
                            <Image m="auto" maxW="100px" src="https://i.ibb.co/CBfC1WK/dettol500ml1.webp" />
                            <Text marginTop="10px" whiteSpace="nowrap" w="100%" overflow="hidden" textOverflow="ellipsis" textAlign="left" fontWeight="bold" color="rgb(79, 88, 94)" >Dettol Antiseptic Liquid Bottle Of 550 Ml</Text>
                        </Box>
                        <Box bg="white" p="20px" w="70%" >
                            <Image m="auto" maxW="100px" src="https://i.ibb.co/CBfC1WK/dettol500ml1.webp" />
                            <Text marginTop="10px" whiteSpace="nowrap" w="100%" overflow="hidden" textOverflow="ellipsis" textAlign="left" fontWeight="bold" color="rgb(79, 88, 94)" >Dettol Antiseptic Liquid Bottle Of 550 Ml</Text>
                        </Box>
                        <Box bg="white" p="20px" w="70%" >
                            <Image m="auto" maxW="100px" src="https://i.ibb.co/CBfC1WK/dettol500ml1.webp" />
                            <Text marginTop="10px" whiteSpace="nowrap" w="100%" overflow="hidden" textOverflow="ellipsis" textAlign="left" fontWeight="bold" color="rgb(79, 88, 94)" >Dettol Antiseptic Liquid Bottle Of 550 Ml</Text>
                        </Box>

                    </SimpleGrid>
                    <Box m='auto' w='fit-content' mt='20px'>
                        <Button colorScheme={'purple'} onClick={() => navigate('/')}>
                            Shop More
                        </Button>
                    </Box>
                </Box>


            </Box>
        </>
    )
}