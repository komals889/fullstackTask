import {
    USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS
} from '../constants/user-constant'

export const userRegisterReducer=(state={userRegister:{}},{type,payload})=>{
    switch (type) {
        case USER_REGISTER_REQUEST:return {isLoading:true};
        case USER_REGISTER_SUCCESS:return {isLoading:false,userRegister:payload};
        case USER_REGISTER_REQUEST:return {isLoading:false,userRegisterError:payload};
    
        default:return state;
    }
}