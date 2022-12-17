import { Box, Button, Flex, Image, SimpleGrid, Skeleton, Text, useDisclosure, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import {MdEdit} from 'react-icons/md';
import {RiDeleteBin5Line} from 'react-icons/ri';
import '../styles/pagination.css';
import ReactPaginate from "react-paginate";
import { useSearchParams,Link } from "react-router-dom";
import { useSelector } from "react-redux";
function getPageFromUrl(value) {
    if (value <= 0 || value===undefined) {
      value = 1;
    }
    value = Number(value);
  
    return value;
  }
function Product(){
  const {data} = useSelector(store=>store.auth)
  const [searchParams, setSearchParam] = useSearchParams();
  const [loading,setLoading] = useState(false)
  const [data1,setData] = useState([]);
  const toast = useToast()
  const { isOpen,onOpen, onClose } = useDisclosure();
  const value3 = getPageFromUrl(searchParams.get("page"));
  const [page, setPage] = useState(value3);
  const [totalPage,setTotalPage] = useState(6);
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    setPage(currentPage)
    window.scroll({
        top:40,
        behavior:'smooth'
    })
}

const handleQ = async(q)=>{
    setLoading(true)
    setSearchParam({
        page : 1
    })
    let res = await axios.get(`https://crimson-indri-sock.cyclic.app/product/search/prod?q=${q}`).finally(()=>{
        setLoading(false)
    })
    if(res.data.status){
        setData(res.data.data);
        setTotalPage(1)
    }
    else{
      toast({
        title: 'Not Found',
        description: "Product is not found",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position:'top'
      })
    }
   
}


const deleteItem = async(id)=>{
  let res = fetch(`https://crimson-indri-sock.cyclic.app/product/${id}`,{
        method:'DELETE',
        headers:{
          access_token : data.AccessToken
        }
  }).then((e)=>e.json()).then((e)=>{
  if(e.status){
    toast({
      title: 'Deleted Success',
      description: "Product is not found",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
    setLoading(true);
      let res1 = fetch(`https://crimson-indri-sock.cyclic.app/product/admin/prod?limit=20&page=${page}`).then((rs)=>rs.json())
      .then((rs)=>setData(rs.data))
      .finally(()=>{
      setLoading(false)
  })
  setTotalPage(6)
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

  useEffect(()=>{
    setLoading(true)
    async function getData(){
        let res = await axios.get(`https://crimson-indri-sock.cyclic.app/product/admin/prod?limit=20&page=${page}`).finally(()=>{
            setLoading(false)
        })
        setData(res.data.data);
        setTotalPage(6)
    }
    getData();
  },[page])
  useEffect(()=>{
    setSearchParam({
        page:page
    })
  },[page])
    return <Flex w='100%'>
             <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
             <Box w={['100%','100%','100%','80%']} ml={['0px','0px','0px','20%']} mb='60px'>
             <Navbar onOpen={onOpen} handleQ={handleQ} />

             <Box mt='30px' mb='50px'>
              <SimpleGrid w='80%' m='auto' marginTop="40px" columns={['1','2','3','4']} spacing='15px'>
                            {
                              loading?[1,2,3,4,5,6,7,8].map((ele)=>{
                                return <Box key={ele} borderRadius="10px" alignItems="center" >
                                    <Skeleton m='auto' width='100%' height='200px' />
                                </Box>
                              }): data1?.map((ele)=>{
                           return <Box key={ele._id} borderRadius="10px" alignItems="center" boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                            <Box
                             bg='#ffd49f' color='#c07700'
                             backgroundSize='100px 24px'
                             borderTopLeftRadius='4px'
                             p='2px 5px'
                             fontSize='15px'
                             borderRadius="10px 10px 0px 0px"
                             mb='10px'
                             >
                                ₹ {ele.mrp}  ({Math.ceil(ele.quantity)})
                            </Box>
                            <Flex p='7px' flexDirection='column' alignItems='center' justifyContent='center'>
                            <Image h='100px' maxW='100%' src={ele.img1} />
                            <Text noOfLines='1' fontSize='12' fontWeight='500' mt='10px' mb='12px' textOverflow='ellipsis' >{ele.title}</Text>
                            <Flex gap='30px' >
                            <Flex alignItems='center' justifyContent='center' borderRadius='10px' w='40px' p='8px 3px'  color='green'>
                               <Link to={`/product/${ele._id}`}>
                               <MdEdit fontSize='20px' />
                               </Link>
                          </Flex>
                          <Flex alignItems='center' justifyContent='center' borderRadius='10px' w='40px' p='8px 3px'  color='red'>
                               <RiDeleteBin5Line onClick={()=>deleteItem(ele._id)} fontSize='20px' />
                          </Flex>
                            </Flex>
                            </Flex>
                        </Box>    
                                })
                            }
                           
                    </SimpleGrid>
        <Box mb='80px' mt='50px'>
        <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        forcePage={page-1}
        breakLabel={"..."}
        pageCount={totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={0}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
</Box>

             </Box>
             </Box>
           </Flex>
}


export default Product;