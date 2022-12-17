import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SIGNIN_SUCCESS} from "./auth.types";
import axios from 'axios';
const host = 'https://crimson-indri-sock.cyclic.app';
export const signinAPI = (data) => async (dispatch) => {   
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${host}/user/signin`, data);
        if(res.data.userType !=='admin'){
            dispatch({ type: AUTH_ERROR })
            return false;
        }
        else{
        dispatch({ type: AUTH_SIGNIN_SUCCESS, token: res.data});
        localStorage.setItem('MEDSHOPPE2',JSON.stringify(res.data));
        return true;
         }
    }
    catch (e) {
        dispatch({ type: AUTH_ERROR })
        return false;
    }
}
export const signupAPI = (data) => async (dispatch) => {
    try {
        let res = await axios.post(`${host}/user/signup`, data);
        return res.data;
    }
    catch (e) {
        return e.response.data;
    }
}
export const logoutAPI = () => {
    localStorage.removeItem('MEDSHOPPE2');
    return {type:AUTH_LOGOUT}
}







