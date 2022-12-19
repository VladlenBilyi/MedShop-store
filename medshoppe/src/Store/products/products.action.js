import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,SET_PRODUCTS_CATEGORIES } from "./products.types"
import axios from "axios"
// import { Alert } from "react-bootstrap"
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

export const AddCategories=(category)=>{
    return{type:SET_PRODUCTS_CATEGORIES,payload:category}
}