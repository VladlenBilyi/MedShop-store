import { login, logout } from "./type"

export const loginSuccess = (payload)=>{
    return {
        type:login,
        payload
    }
}

export const logoutSuccess = (payload)=>{
    return {
        type:logout,
        payload
    }
}