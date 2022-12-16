import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./products.types"
import axios from "axios"
export const getProducts=(url)=>async(dispatch)=>{
   
    dispatch({type:GET_PRODUCTS_LOADING})
    try {
        let response=await axios.get(url)
        dispatch({type:GET_PRODUCTS_SUCCESS,payload:response.data})
      
        return response.data
    } catch (e) {
        dispatch({type:GET_PRODUCTS_ERROR})
    }
}