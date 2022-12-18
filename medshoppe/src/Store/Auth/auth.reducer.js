import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SIGNIN_SUCCESS, AUTH_SIGNUP_SUCCESS } from "./auth.types";
import jwt from 'jwt-decode';
let initState = {

    loading: false,
    error: false,
    isAuth: false,
    token: "",
    data: "",
    email:""
}
let MEDSHOPPE=JSON.parse(localStorage.getItem('MEDSHOPPE'))||{
    AccessToken:"",
    RefreshToken:"",
    userType:"",
    username:"",
    email:""

}


if(MEDSHOPPE.AccessToken){
    let verify = jwt(MEDSHOPPE.AccessToken);
    if(verify){
        initState.isAuth=true;
        initState.AccessToken=MEDSHOPPE.AccessToken;
        initState.data=verify;
        initState.email=verify.email;
    }
    else{
        const host = 'https://crimson-indri-sock.cyclic.app';
        let refreshData=fetch('https://crimson-indri-sock.cyclic.app/user/signin/verification',{
            method:'POST',
            headers:{access_token:MEDSHOPPE.AccessToken,refresh_token:MEDSHOPPE.RefreshToken}
            
        }).then((e)=>e.json()).then((e)=>MEDSHOPPE.AccessToken=e.AccessToken).catch((error)=>
        MEDSHOPPE.RefreshToken="",
        initState.isAuth=false,
        initState.AccessToken="",
        initState.data="",
        initState.email=""
        )

    }

}
console.log(initState);
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
            //console.log(decoded);
            return {
                ...state,
                loading: false,
                error: false,
                token: action.token.AccessToken,
                isAuth: true,
                data: action.token.user,
                email:decoded.email
            }
        }
        // case AUTH_SIGNUP_SUCCESS: {
        //     return {
        //         ...state,
        //         loading: false,
        //         error: false,
        //         token: action.token.AccessToken,
        //         isAuth: true,
        //         data: action.token.user
        //     }
        // }
        case AUTH_LOGOUT: {
            return {
                ...state,
                ...initState
            }
        }
        default: {
            return state;
        }
    }
}