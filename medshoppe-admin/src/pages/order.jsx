import { Box } from "@chakra-ui/react";
import { useState } from "react";
import OrderPending from "../components/orderpending";
import OrderSuccess from "../components/ordersuccess";

function Order(){
    const [show, setShow] = useState(false);
    const handleShow = (val)=>{
        setShow(val)
    }
   if(!show){
    return <OrderPending show={show} handleShow={handleShow}/>
   }
   else{
     return <OrderSuccess show={show} handleShow={handleShow} />
   }

}


export default Order;