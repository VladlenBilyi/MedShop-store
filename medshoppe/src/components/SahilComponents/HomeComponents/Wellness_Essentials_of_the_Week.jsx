import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { getProducts } from "../../../Store/products/products.action";
import "./Home_Styles/Wellness_Essentials_of_the_Week.css";
const url="https://crimson-indri-sock.cyclic.app/product?limit=6&page=10"
const Wellness_Essentials_of_the_Week = () => {
    const [data,setdata]=useState([]);
    const dispatch=useDispatch();
    const navegate=useNavigate();
    useEffect(()=>{
        dispatch(getProducts(url)).then((res)=>{
            setdata(res.data)
        })
    },[])
    return (
        <div>
            <p className="Wellness_Essentials_of_the_Week_container-p">Wellness Essentials of the Week</p>
            <p className="Wellness_Essentials_of_the_Week_container-p2">Super charge your immunity with us</p>
            <div className="Wellness_Essentials_of_the_Week_container">
                {data?.map(item=>(
                     <div onClick={()=>navegate(`product/${item._id}`)} className="Wellness_Essentials_of_the_Week_container_Item">
                    <div>
                        <img src={item.img1} alt="" />
                    </div>
                    <div>
                        <p>{item.title}</p>
                        <p>MRP <span>₹{item.strike}</span></p>
                        <p>₹{item.mrp}<span>{" "}{" "}{Math.floor(item.strike-item.mrp)} rs.. off</span></p>
                    </div>
                </div> 
                ))}
            </div>
        </div>
    );
};

export {Wellness_Essentials_of_the_Week};