import axios from "axios"
 
import { DELETE_TODO_FAIL, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, SINGLE_TODO_FAIL, SINGLE_TODO_REQUEST, SINGLE_TODO_SUCCESS,
     TODO_FAIL, TODO_REQUEST, TODO_SINGLE_FAIL, TODO_SINGLE_REQUEST, TODO_SINGLE_SUCCESS, TODO_SUCCESS, UPDATE_TODO_FAIL, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS,


} from "../constants/todo-constant";

export const getAllTodoAction = ()=>async(dispatch)=>{
     try {
        dispatch({type:TODO_REQUEST})
        
        const {data}=await axios.get(`${process.env.REACT_APP_URL}/api/v1/todo`);
        dispatch({type:TODO_SUCCESS,payload:data.data})
    } catch (error) {
         dispatch({type:TODO_FAIL,payload:error})
         
     }
    

}
export const getSingleTodoAction = (match)=>async(dispatch)=>{
     try {
        dispatch({type:SINGLE_TODO_REQUEST})
        const {data}=await axios.get(`${process.env.REACT_APP_URL}/api/v1/todo/${match.params.id}`);
        dispatch({type:SINGLE_TODO_SUCCESS,payload:data.data})
    } catch (error) {
         dispatch({type:SINGLE_TODO_FAIL,payload:error})
         
     }
    

}
export const getBlogTodoAction = (id)=>async(dispatch)=>{
     try {
        dispatch({type:TODO_SINGLE_REQUEST})
        const {data}=await axios.get(`${process.env.REACT_APP_URL}/api/v1/todo/${id}`);
        dispatch({type:TODO_SINGLE_SUCCESS,payload:data.data})
    } catch (error) {
         dispatch({type:TODO_SINGLE_FAIL,payload:error})
         
     }
    

}
export const deleteTodoAction = (id)=>async(dispatch)=>{
     try {
        dispatch({type:DELETE_TODO_REQUEST})
        const {data}=await axios.delete(`${process.env.REACT_APP_URL}/api/v1/todo/${id}`);
        dispatch({type:DELETE_TODO_SUCCESS,payload:data.data})
    } catch (error) {
         dispatch({type:DELETE_TODO_FAIL,payload:error})
         
     }
    

}
export const updateTodoAction = (id,formData)=>async(dispatch)=>{
     try {
        dispatch({type:UPDATE_TODO_REQUEST})
        const {data}=await axios.put(`${process.env.REACT_APP_URL}/api/v1/todo/${id}`,formData);
        dispatch({type:UPDATE_TODO_SUCCESS,payload:data.data})
    } catch (error) {
         dispatch({type:UPDATE_TODO_FAIL,payload:error})
         
     }
    

}