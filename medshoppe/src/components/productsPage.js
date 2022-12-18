import { Box, Button, Checkbox, Divider, Flex, Grid, GridItem, Image, Input, InputGroup, InputRightElement, Radio, RadioGroup, Select, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BiRupee } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../Store/products/products.action";
import getUrl from "./productQuery";
import {useSearchParams} from "react-router-dom"

function getPageUrl(val){
    if(val<=0|| val==undefined || val==null){
        val=1;
    }
    val=Number(val)
    return val
}

export const Productspage = () => {
    const [searchParams,setSearchParams]=useSearchParams()
    const {loading,data}=useSelector((store)=>store.products)
    const [products,setProducts]=useState([])
    let page1=getPageUrl(searchParams.get("page"))
    const [page,setPage]=useState(page1)
    let low1=searchParams.get("low")||0
    let high1=searchParams.get("high")||0
    let sort1=searchParams.get("sort")||""
    let value1=searchParams.get("category")||""
    
    // const [category,setCategory]=useState("")
    const [low,setLow]=useState(low1)
    const [high,setHigh]=useState(high1)
    const [sort,setSort]=useState(sort1)
    const [value,setValue]=useState(value1)
    const [value2,setValue2]=useState("")
    const {categorie}=useSelector((store)=>store.products)




    const dispatch=useDispatch()
    console.log(categorie)
    useEffect(()=>{
        let [a,b]=value2.split(":")
        if(a=="h"){
           setHigh(+b)
           setLow(0)
        }
        else if(a=="l"){
            setLow(+b)
            setHigh(0)
        }
        let url=getUrl(page,value,low,high,sort)
        dispatch(getProducts(url)).then((res)=>
         setProducts(res.data)
        )
        console.log(sort,value,url)
    },[page,value,low,high,sort,value2])
    
    useEffect(()=>{
        let paramsObject={
            page,
            limit:20
           }
        if(value){
          paramsObject.category=value
        }
        if(low){
            paramsObject.low=low
        }
        if(high){
            paramsObject.high=high
        }
        if(sort){
            paramsObject.sort=sort
        }
        setSearchParams(paramsObject)
    },[page,value,low,high,sort,value2])


    return (
        <>
            <Flex paddingLeft='100px' gap="50px" paddingRight="100px" paddingTop="40px" paddingBottom="40px" >
                <Box w="350px">
                    <Text fontWeight="bold" color="rgb(79, 88, 94)" fontSize="30px" fontFamily="sans-serif">Filter</Text>
                    <Text marginTop="30px" fontWeight="semibold" fontSize="20px" color="rgb(79, 88, 94)">Category</Text>
                    <RadioGroup onChange={setValue} value={value}>
                    <Radio value='Personal Care'  paddingTop="15px" paddingLeft="20px">Personal Care</Radio>
                    <Radio value='Skin Care'   paddingTop="15px" paddingLeft="20px">Skin Care</Radio>
                    <Radio value='Beauty'  paddingTop="15px" paddingLeft="20px">Beauty</Radio>
                    <Radio value='Mother and Baby Care'  paddingTop="15px" paddingLeft="20px">Mother and Baby Care</Radio>
                    <Radio value='Health Food and Drinks'  paddingTop="15px" paddingLeft="20px">Health Food and Drinks</Radio>
                    <Radio value='Home Care'  paddingTop="15px" paddingLeft="20px">Home Care</Radio>
                    <Radio value='Health Food and Drinks'  paddingTop="15px" paddingLeft="20px">Fitness & Supplements</Radio>
                    <Radio value='Covid Essentials'  paddingTop="15px" paddingLeft="20px">Covid Essentials</Radio>
                    <Radio value='Ayurvedic Care'  paddingTop="15px" paddingLeft="20px">Ayurvedic Care</Radio>
                    <Radio value='All Categories'  paddingTop="15px" paddingLeft="20px">All Categories</Radio>
                    <Radio value='Skin Care'  paddingTop="15px" paddingLeft="20px">Skin Creams & Hair Removal</Radio>
                    </RadioGroup>
                     
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
                    <RadioGroup onChange={setValue2} value={value2}>
                    <Radio value="l:99" paddingTop="15px" paddingLeft="20px">Below 99</Radio>
                    <Radio value="l:199" paddingTop="15px" paddingLeft="20px">Below 199</Radio>
                    <Radio value="l:299" paddingTop="15px" paddingLeft="20px">Below 299</Radio>
                    <Radio value="l:399" paddingTop="15px" paddingLeft="20px">Below 399</Radio>
                    <Radio value="h:399" paddingTop="15px" paddingLeft="20px">Above 399</Radio>
                    </RadioGroup>
                </Box>
                <Box w="100%">
                    <Flex  gap="100px">
                        <Text fontWeight="bold" color="rgb(79, 88, 94)" fontSize="30px" fontFamily="sans-serif">Mega Clearance Sale</Text>
                        <Flex  alignItems="center">
                            <Text textAlign="center" w="100px">Sort By:</Text>
                            <Select onChange={(event)=>setSort(event.target.value)} border="2px" w="200px" >
                               
                                <option  value="asc">Price low to high</option>
                                <option value="desc">Price high to low</option>
                            </Select>
                        </Flex>

                    </Flex>
                    <Grid marginTop="40px" templateColumns='repeat(3, 1fr)' gap={6}>
                        {products?.map((el)=>(
                            
                             <GridItem key={el._id} h="300px" borderRadius="10px" alignItems="center"  padding="15px" paddingBottom='10px' border="1px solid gray" w='100%'>
                             <Image m='auto' h="100px" maxW="100%" src={el.img1}/>
                             <Text marginTop="20px" whiteSpace="nowrap" w="200px" overflow="hidden" textOverflow="ellipsis" textAlign="left" fontWeight="bold" color="rgb(79, 88, 94)">{el.title}</Text>
                             <Flex marginTop="8px" alignItems="center" >

<BiRupee fontSize="20px" />
<Text fontWeight="medium" marginRight="20px" fontSize="20px">{el.mrp}</Text>

<Flex  alignItems="center" color="white" borderRadius="10px" bg="rgb(249,140,142)"  >
    <BiRupee fontSize="15px" />
    <Text w="55px" >{Math.floor(el.strike-el.mrp)} off</Text>
</Flex>
</Flex>
                             {/* <Text textAlign="left">MRP {el.mrp}</Text> */}
                         </GridItem>
                        ))}
                       
                       
                       
                       
                    </Grid>

                </Box>
            </Flex>
        </>
    )
}