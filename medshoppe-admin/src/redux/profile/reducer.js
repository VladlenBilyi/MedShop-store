import { login, logout } from "./type";
let authData = JSON.parse(localStorage.getItem("medshoppeadmin"))||{authStatus : false , authToken : ''};
const initState = {
     name:'',
     username : '',
     email:'',
     access_token : authData.authToken,
     status : authData.authStatus
};

export const authReducer = (state = initState, {type, payload}) => {
    switch(type){
        case login: {
            localStorage.setItem("medshoppeadmin", JSON.stringify({
                authStatus : true , authToken : payload.access_token
            }));
            return payload;
        } 
        case logout:{
                localStorage.setItem("medshoppeadmin", JSON.stringify({
                    authStatus : false , authToken : ''
                }));
             return {
                ...state,
                name : '',
                username : '',
                email:'',
                access_token : '',
                status : false
             }
            }
        default: return state;
    }
}