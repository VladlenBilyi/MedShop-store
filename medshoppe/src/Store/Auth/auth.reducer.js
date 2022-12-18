import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SIGNIN_SUCCESS } from "./auth.types";
import jwt from 'jwt-decode';



let MEDSHOPPE=JSON.parse(localStorage.getItem('MEDSHOPPE'))||{
    AccessToken:"",
    RefreshToken:"",
    userType:"",
    username:"",
    email:""    
}
if(MEDSHOPPE.AccessToken!==""){
    
    const Decoded_Email = jwt(MEDSHOPPE.AccessToken) || "";
    
    if(Decoded_Email){
        MEDSHOPPE.email = Decoded_Email.email
    }
}

if(!MEDSHOPPE.AccessToken){
        let refreshData=fetch('https://crimson-indri-sock.cyclic.app/user/signin/verification',{
            method:'POST',
            headers:{access_token:MEDSHOPPE.AccessToken,refresh_token:MEDSHOPPE.RefreshToken}
            
        }).then((e)=>e.json()).then((e)=>MEDSHOPPE.AccessToken=e.AccessToken).catch((error)=>
        MEDSHOPPE.RefreshToken="",
        MEDSHOPPE.AccessToken="",
        MEDSHOPPE.userType="",
        MEDSHOPPE.username="",
        MEDSHOPPE.email=""
        )

    }

let initState = {
    loading: false,
    error: false,
    isAuth: MEDSHOPPE.AccessToken === ''?false:true,
    token: MEDSHOPPE.AccessToken ,
    data: {AccessToken :MEDSHOPPE.AccessToken , RefreshToken :MEDSHOPPE.RefreshToken , username : MEDSHOPPE.username , userType :MEDSHOPPE.userType , email : MEDSHOPPE.email },
    email : MEDSHOPPE.email
}



export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case AUTH_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case AUTH_SIGNIN_SUCCESS: {
            let decoded= jwt(action.token.AccessToken);
            return {
                ...state,
                loading: false,
                error: false,
                token: action.token.AccessToken,
                isAuth: true,
                data: action.token,
                email:decoded.email
            }
        }
        case AUTH_LOGOUT: {
            return {
                ...state,
                loading: false,
                error: false,
                isAuth: false,
                token: "",
                data: "",
                email:""
            }
        }
        default: {
            return state;
        }
    }
}