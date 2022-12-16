import { Box, Button, Checkbox, Divider, Flex, Grid, GridItem, Image, Input, InputGroup, InputRightElement, Select, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../Store/products/products.action";
export const Productspage = () => {
    const {loading,data}=useSelector((store)=>store.products)
    const [products,setProducts]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProducts()).then((res)=>
         setProducts(res.data)
        )
    },[])
    console.log(products)
    return (
        <>
            <Flex paddingLeft='100px' gap="50px" paddingRight="100px" paddingTop="40px" paddingBottom="40px" border="1px solid">
                <Box w="350px">
                    <Text fontWeight="bold" color="rgb(79, 88, 94)" fontSize="30px" fontFamily="sans-serif">Filter</Text>
                    <Text marginTop="30px" fontWeight="semibold" fontSize="20px" color="rgb(79, 88, 94)">Category</Text>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Beauty</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Skin Care</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Personal Care</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Mother and Baby Care</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Health Food and Drinks</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Home Care</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Fitness & Supplements</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Covid Essentials</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Ayurvedic Care</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">All Categories</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Skin Creams & Hair Removal</Checkbox>
                    <Divider marginBottom="20px" marginTop="20px" orientation='horizontal' />
                    {/* <Text marginBottom="15px" marginTop="30px" fontWeight="semibold" fontSize="20px" color="rgb(79, 88, 94)">Brand</Text>
                    <InputGroup paddingLeft="20px" size='md'>
                        <Input pr='4.5rem' placeholder='Search'/>
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' >
                                <BsSearch />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Checkbox paddingTop="15px" paddingLeft="20px">&me</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">2baconil</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">3 Ply</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">3m Avagard</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">A2 Lite</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Allen</Checkbox> */}
                    {/* <Divider marginBottom="20px" marginTop="20px" orientation='horizontal' /> */}
                    <Text marginBottom="15px" marginTop="30px" fontWeight="semibold" fontSize="20px" color="rgb(79, 88, 94)">Price</Text>
                    <Checkbox paddingTop="15px" paddingLeft="20px">Below 99</Checkbox>

                    <Checkbox paddingTop="15px" paddingLeft="20px">100 - 199</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">200 - 299</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">300 - 399</Checkbox>
                    <Checkbox paddingTop="15px" paddingLeft="20px">400 - 499</Checkbox>

                </Box>
                <Box w="100%">
                    <Flex  gap="100px">
                        <Text fontWeight="bold" color="rgb(79, 88, 94)" fontSize="30px" fontFamily="sans-serif">Mega Clearance Sale</Text>
                        <Flex  alignItems="center">
                            <Text textAlign="center" w="100px">Sort By:</Text>
                            <Select border="2px" w="200px" >
                               
                                <option value="ASC">Price low to high</option>
                                <option value="DSC">Price high to low</option>
                            </Select>
                        </Flex>

                    </Flex>
                    <Grid marginTop="40px" templateColumns='repeat(3, 1fr)' gap={6}>
                        {products.map((el)=>(
                             <GridItem key={el._id} h="300px" borderRadius="10px" alignItems="center"  padding="15px" border="1px solid gray" w='100%'>
                             <Image   boxSize="70%" src={el.img1}/>
                             <Text textAlign="left" lineHeight="20px" fontWeight="bold" color="rgb(79, 88, 94)">{el.title}</Text>
                             <Text textAlign="left">MRP {el.mrp}</Text>
                         </GridItem>
                        ))}
                       
                       
                       
                       
                    </Grid>

                </Box>
            </Flex>
        </>
    )
}