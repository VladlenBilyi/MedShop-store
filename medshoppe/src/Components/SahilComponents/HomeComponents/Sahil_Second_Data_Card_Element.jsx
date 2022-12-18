import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../Store/products/products.action";
import { Second_Single_Card } from "./Sahil_Second_Single_Card";
const url="https://crimson-indri-sock.cyclic.app/product?limit=12&page=3"
const Second_Data_Card_Element = () => {
  const [data,setdata]=useState([]);
  const dispatch=useDispatch();

  useEffect(()=>{
      dispatch(getProducts(url)).then((res)=>{
          setdata(res.data)
      })
  },[])
  return (
      <div>
        <div className="Sahil_Second_Single_SinglePage_Element_grid">
          { 
          data.map((elem) => {
            return (
              <div key={elem.id}>
                  <Second_Single_Card {...elem}/>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export {Second_Data_Card_Element};