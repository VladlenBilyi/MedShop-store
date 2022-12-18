import { ADD_DETAILS } from "./checkout.types"

const initState = {
   data:[]
}
export const addressReducer = (state=initState , {type,payload}) =>{

    switch(type){

        case ADD_DETAILS:{
            return {
                ...state,
                data:payload
            }
        }
        default:{
            return state
        }
    }
}