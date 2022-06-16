import axios from 'axios'
import {
    USER_LOGIN_FAIL,USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGOUT
} from '../constants/auth-constant'

export const userLoginAction=(loginCredentials)=>async(dispatch,getState)=>{
    try {

        dispatch({type:USER_LOGIN_REQUEST})
        const {data}=await axios.post("http://localhost:5000/api/v1/auth",loginCredentials)
        dispatch({type:USER_LOGIN_SUCCESS,payload:{name:data.result,token:data.token,id:data.id}})
        const x=getState().user.userInfo
        localStorage.setItem("user",JSON.stringify(x))
        
    } catch (error) {
        dispatch({type:USER_LOGIN_FAIL,payload:error})
    }

}

export const userLogoutAction=()=>(dispatch)=>{
    dispatch({type:USER_LOGOUT})
    localStorage.removeItem("user")
}