import { Box, Button, Checkbox, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, Image, Input, InputGroup, InputLeftAddon, InputRightElement, Radio, RadioGroup, Select, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiRupee } from "react-icons/bi"
import {BiFilterAlt} from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../Store/products/products.action";
import getUrl from "./productQuery";
import { Link, useSearchParams } from "react-router-dom"

function getPageUrl(val) {
    if (val <= 0 || val == undefined || val == null) {
        val = 1;
    }
    val = Number(val)
    return val
}

export const Productspage = () => {
    const {categorie}=useSelector((store)=>store.products)
    const [searchParams, setSearchParams] = useSearchParams()
    // const { loading, data } = useSelector((store) => store.products)
    const [products, setProducts] = useState([])
    let page1 = getPageUrl(searchParams.get("page"))
    const [page, setPage] = useState(page1)
    let low1 = searchParams.get("low") || 0
    let high1 = searchParams.get("high") || 0
    let sort1 = searchParams.get("sort") || ""
    let value1 = searchParams.get("category") || categorie
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    // const [category,setCategory]=useState("")

    const [low,setLow]=useState(low1)
    const [high,setHigh]=useState(high1)
    const [sort,setSort]=useState(sort1)
    const [value,setValue]=useState(value1)
    const [value2,setValue2]=useState("")




    const dispatch=useDispatch()
    console.log(categorie)
    useEffect(()=>{
        let [a,b]=value2.split(":")
        if(a=="h"){
           setHigh(+b)
           setLow(0)
        }
        else if (a == "l") {
            setLow(+b)
            setHigh(0)
        }
        let url = getUrl(page, value, low, high, sort)
        dispatch(getProducts(url)).then((res) =>
            setProducts(res.data)
        )
       // console.log(sort, value, url)
    }, [page, value, low, high, sort, value2])
  

    useEffect(() => {
        let paramsObject = {
            page,
            limit: 20
        }
        if (value) {
            paramsObject.category = value
        }
        if (low) {
            paramsObject.low = low
        }
        if (high) {
            paramsObject.high = high
        }
        if (sort) {
            paramsObject.sort = sort
        }
        setSearchParams(paramsObject)
    }, [page, value, low, high, sort, value2])

   

    return (
        <>
           <Flex alignItems="center" padding="20px" justifyContent="space-between">
           <Flex mt={["100px","50px","100px","100px"]} m={"auto"} onClick={onOpen} display={["block", "block", "flex", "none"]} gap="20px" alignItems="center" fontWeight="bold" color="rgb(79, 88, 94)" fontSize={["20px", "20px", "30px", "30px"]} fontFamily="sans-serif"><BiFilterAlt fontSize="25px" color="#29e59c" /></Flex>
                <SimpleGrid mt={["50px","50px","50px","50px"]} m="auto" columns={[1, 1, 2, 2]} gap={["20px", "20px", "100px", "800px"]}>
                    <Text fontWeight="bold" display={["none", "none", "none", "block"]} color="rgb(79, 88, 94)" fontSize={["20px", "20px", "30px", "30px"]} fontFamily="sans-serif">Mega Clearance Sale</Text>
                    <Flex alignItems="center">
                        <InputGroup>
                            <InputLeftAddon children='Sort By:' />
                            <Select onChange={(event) => setSort(event.target.value)} border="2px" w="200px" >
 
                                <option value="asc">Price low to high</option>
                                <option value="desc">Price high to low</option>
                            </Select>
                        </InputGroup>
 
 
 
                    </Flex>
 
                </SimpleGrid>
           </Flex>
            <Flex w="85%" m="auto"  gap={["20px","20px","50px","50px"]}  paddingTop="40px" paddingBottom="40px" >
                <Box w={["10px","10px","10px","350px"]}>
                
               
                    <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Filters</DrawerHeader>
      
                <DrawerBody>
                <Text marginTop={["10px","30px"]} fontWeight="semibold" fontSize={["15px","15px","20px","20px"]} color="rgb(79, 88, 94)">Category</Text>
                    <RadioGroup onChange={setValue} value={value}>
                        <Radio value='Personal Care' paddingTop={["10px","15px"]} paddingLeft="20px">Personal Care</Radio>
                        <Radio value='Skin Care' paddingTop={["10px","15px"]} paddingLeft="20px">Skin Care</Radio>
                        <Radio value='Beauty' paddingTop={["10px","15px"]} paddingLeft="20px">Beauty</Radio>
                        <Radio value='Mother and Baby Care' paddingTop={["10px","15px"]} paddingLeft="20px">Mother and Baby Care</Radio>
                        <Radio value='Health Food and Drinks' paddingTop={["10px","15px"]} paddingLeft="20px">Health Food and Drinks</Radio>
                        <Radio value='Home Care' paddingTop={["10px","15px"]} paddingLeft="20px">Home Care</Radio>
                        <Radio value='Health Food and Drinks' paddingTop={["10px","15px"]} paddingLeft="20px">Fitness & Supplements</Radio>
                        <Radio value='Covid Essentials' paddingTop={["10px","15px"]} paddingLeft="20px">Covid Essentials</Radio>
                        <Radio value='Ayurvedic Care' paddingTop={["10px","15px"]} paddingLeft="20px">Ayurvedic Care</Radio>
                        <Radio value='All Categories' paddingTop={["10px","15px"]} paddingLeft="20px">All Categories</Radio>
                        <Radio value='Skin Care' paddingTop={["10px","15px"]} paddingLeft="20px">Skin Creams & Hair Removal</Radio>
                    </RadioGroup>

                    <Divider marginBottom="20px" marginTop="20px" orientation='horizontal' />
                   
                    <Text marginBottom="15px" marginTop="30px" fontWeight="semibold" fontSize="20px" color="rgb(79, 88, 94)">Price</Text>
                    <RadioGroup onChange={setValue2} value={value2}>
                        <Radio value="l:99" paddingTop={["10px","15px"]} paddingLeft="20px">Below 99</Radio>
                        <Radio value="l:199" paddingTop={["10px","15px"]} paddingLeft="20px">Below 199</Radio>
                        <Radio value="l:299" paddingTop={["10px","15px"]} paddingLeft="20px">Below 299</Radio>
                        <Radio value="l:399" paddingTop={["10px","15px"]} paddingLeft="20px">Below 399</Radio>
                        <Radio value="h:399" paddingTop={["10px","15px"]} paddingLeft="20px">Above 399</Radio>
                    </RadioGroup>
                   
                </DrawerBody>
      
                
              </DrawerContent>
            </Drawer>
            <Box display={["none","none","none","block"]}>
            <Text marginTop={["10px","30px"]} fontWeight="semibold" fontSize={["15px","15px","20px","20px"]} color="rgb(79, 88, 94)">Category</Text>
                    <RadioGroup onChange={setValue} value={value}>
                        <Radio value='Personal Care' paddingTop={["10px","15px"]} paddingLeft="20px">Personal Care</Radio>
                        <Radio value='Skin Care' paddingTop={["10px","15px"]} paddingLeft="20px">Skin Care</Radio>
                        <Radio value='Beauty' paddingTop={["10px","15px"]} paddingLeft="20px">Beauty</Radio>
                        <Radio value='Mother and Baby Care' paddingTop={["10px","15px"]} paddingLeft="20px">Mother and Baby Care</Radio>
                        <Radio value='Health Food and Drinks' paddingTop={["10px","15px"]} paddingLeft="20px">Health Food and Drinks</Radio>
                        <Radio value='Home Care' paddingTop={["10px","15px"]} paddingLeft="20px">Home Care</Radio>
                        <Radio value='Health Food and Drinks' paddingTop={["10px","15px"]} paddingLeft="20px">Fitness & Supplements</Radio>
                        <Radio value='Covid Essentials' paddingTop={["10px","15px"]} paddingLeft="20px">Covid Essentials</Radio>
                        <Radio value='Ayurvedic Care' paddingTop={["10px","15px"]} paddingLeft="20px">Ayurvedic Care</Radio>
                        <Radio value='All Categories' paddingTop={["10px","15px"]} paddingLeft="20px">All Categories</Radio>
                        <Radio value='Skin Care' paddingTop={["10px","15px"]} paddingLeft="20px">Skin Creams & Hair Removal</Radio>
                    </RadioGroup>

                    <Divider marginBottom="20px" marginTop="20px" orientation='horizontal' />
                   
                    <Text marginBottom="15px" marginTop="30px" fontWeight="semibold" fontSize="20px" color="rgb(79, 88, 94)">Price</Text>
                    <RadioGroup onChange={setValue2} value={value2}>
                        <Radio value="l:99" paddingTop={["10px","15px"]} paddingLeft="20px">Below 99</Radio>
                        <Radio value="l:199" paddingTop={["10px","15px"]} paddingLeft="20px">Below 199</Radio>
                        <Radio value="l:299" paddingTop={["10px","15px"]} paddingLeft="20px">Below 299</Radio>
                        <Radio value="l:399" paddingTop={["10px","15px"]} paddingLeft="20px">Below 399</Radio>
                        <Radio value="h:399" paddingTop={["10px","15px"]} paddingLeft="20px">Above 399</Radio>
                    </RadioGroup>
            </Box>
            </Box>    
               
                <Box w="100%">
                   
                    <SimpleGrid w="100%" marginBottom="40px" marginTop="40px" columns={[1,2,3,3]} gap={6}>
                        {products?.map((el) => (
                            <Link key={el._id} to={`/product/${el._id}`}>
                                <GridItem key={el._id} h="220px" borderRadius="10px" alignItems="center" padding="15px" paddingBottom='10px' border="1px solid gray" w='100%'>
                                    <Image m='auto' h="100px" maxW="100%" src={el.img1} />
                                    <Text marginTop="20px" whiteSpace="nowrap" w={["160px","160px","200px","200px"]} overflow="hidden" textOverflow="ellipsis" textAlign="left" fontWeight="bold" color="rgb(79, 88, 94)">{el.title}</Text>
                                    <Flex marginTop="8px" alignItems="center" >

                                        <BiRupee fontSize="20px" />
                                        <Text fontWeight="medium" marginRight="20px" fontSize="20px">{el.mrp}</Text>

                                        <Flex alignItems="center" color="white" borderRadius="10px" bg="rgb(249,140,142)"  >
                                            <BiRupee fontSize="15px" />
                                            <Text w="55px" >{Math.floor(el.strike - el.mrp)} off</Text>
                                        </Flex>
                                    </Flex>
                                    {/* <Text textAlign="left">MRP {el.mrp}</Text> */}
                                </GridItem>
                            </Link>
                        ))}




                    </SimpleGrid>
                    <Flex m="auto" w="200px" gap="10px">
                        <Button disabled={page == 1} onClick={() => setPage(page - 1)}>{"<"} Prev</Button>
                        <Button _hover="none" fontSize="20px" color="white" bg="teal">{page}</Button>
                        <Button onClick={() => setPage(page + 1)} disabled={page===6}>Next {">"}</Button>
                    </Flex>

                </Box>
            </Flex>
        </>
    )
}