import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,SET_PRODUCTS_CATEGORIES } from "./products.types"

let initialState={
    loading:false,
    error:false,
    data:[],
    categorie:""
}

export const productsReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCTS_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        case GET_PRODUCTS_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        case GET_PRODUCTS_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        }
        case SET_PRODUCTS_CATEGORIES:{
            return {
                ...state,
                categorie:payload
            }
        }
        default:{
            return state
        }
    }
}