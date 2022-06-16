import {
    USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS
} from '../constants/user-constant'
import axios from 'axios'

export const userRegisterAction=(userRegisterCredential)=>async(dispatch)=>{
    try {
        dispatch({type:USER_REGISTER_REQUEST})

        const {data}=await axios.post("http://localhost:5000/api/v1",userRegisterCredential)
        dispatch({type:USER_REGISTER_SUCCESS,payload:data.result})
        
    } catch (error) {
        dispatch({type:USER_REGISTER_FAIL,payload:error})
    }
}