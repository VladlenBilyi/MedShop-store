import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../../Store/products/products.action";
import "./Home_Styles/PreviouslyBrowsedItems.css";
const url="https://crimson-indri-sock.cyclic.app/product?limit=5&page=1"
const PreviouslyBrowsedItems = () => {

    const [data,setdata]=useState([]);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts(url)).then((res)=>{
            setdata(res.data)
        })
    },[])
    return (
        <div>
            <p className="Home_PreviouslyBrowsedItems-p">Previously Browsed Items</p>
            <div className="Home_PreviouslyBrowsedItems">
                {data?.map(item=>(
                    
                    <div className="Home_PreviouslyBrowsedItems_Item">
                    <Link to={`/product/${item._id}`}>
                        <div>
                            <img src={item.img1} alt="" />
                        </div>
                    </Link>

                    <div>
                        <p>{item.title}</p>
                        <p>MRP <span>{item.strike}</span></p>
                        <p>₹{item.mrp} <span>{Math.floor(item.strike-item.mrp)} rs.. off</span></p>
                    </div>
                </div>
                ))}
                

                
            </div>
        </div>
    );
}

export { PreviouslyBrowsedItems };
