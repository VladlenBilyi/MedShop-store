import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../Store/products/products.action";
import { HomeData } from "../Sahil_data/Sahil_Data";
import { Home_Single_Card } from "./Home_Single_Card";
const url="https://crimson-indri-sock.cyclic.app/product?limit=6&page=7"


const Home_SinglePage_Element = () => {
  const [data,setdata]=useState([]);
  const dispatch=useDispatch();

  useEffect(()=>{
      dispatch(getProducts(url)).then((res)=>{
          // console.log(res)
          setdata(res.data)
      })
  },[])
  return (
      <div data-testid="Home_page_data" style={{ display: "flex"}}>
        <div className="Home_SinglePage_Element_grid">
          { 
          data?.map((elem,index) => 
            
              <div key={index}>
                  <Home_Single_Card {...elem}/  >
              </div>
          
          )}
        </div>
      </div>
    );
}

export {Home_SinglePage_Element};