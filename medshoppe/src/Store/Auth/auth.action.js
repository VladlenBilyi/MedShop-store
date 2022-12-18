import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SIGNIN_SUCCESS } from "./auth.types";
import axios from 'axios';
const host = 'https://crimson-indri-sock.cyclic.app';
export const signinAPI = (data) => async (dispatch) => {
   
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${host}/user/signin`, data);
        dispatch({ type: AUTH_SIGNIN_SUCCESS, token: res.data});
        // console.log(res.data.AccessToken);
        localStorage.setItem('MEDSHOPPE',JSON.stringify(res.data));
        //console.log(res)

        return res.data;
    }
    //https://crimson-indri-sock.cyclic.app
    catch (e) {
        dispatch({ type: AUTH_ERROR })
        return e.response.data;
    }
}
export const signupAPI = (data) => async (dispatch) => {
    //console.log(data);
    //dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${host}/user/signup`, data);
        //dispatch({ type: AUTH_SIGNUP_SUCCESS, token: res.data.token, user: res.data.user });
        return res.data;
    }
    catch (e) {
        //dispatch({ type: AUTH_ERROR })
        return e.response.data;
    }
}
export const logoutAPI = () => {
    localStorage.removeItem("MEDSHOPPE")
    return {type:AUTH_LOGOUT}
}
