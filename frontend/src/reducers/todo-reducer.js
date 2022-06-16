import { DELETE_TODO_FAIL, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, SINGLE_TODO_FAIL, SINGLE_TODO_REQUEST, SINGLE_TODO_SUCCESS, TODO_FAIL, TODO_REQUEST, TODO_SINGLE_FAIL, TODO_SINGLE_REQUEST, TODO_SINGLE_SUCCESS, TODO_SUCCESS, UPDATE_TODO_FAIL, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from "../constants/todo-constant";

 
 


export const getAllTodoReducer=(state = {reduxTodo:[]},{type,payload})=>{
    switch (type) {
        case TODO_REQUEST:
            return{reduxTodo:[],isLoading:true};
        case TODO_SUCCESS:
            return{reduxTodo:payload,isLoading:false};
        case TODO_FAIL:
            return{reduxTodo:payload,isLoading:false};    
        default:return state;
    }
}

export const getSingleTodoReducer=(state = {reduxSingleTodo:{}},{type,payload})=>{
    switch (type) {
        case SINGLE_TODO_REQUEST:
            return{reduxSingleTodo:{},isLoading:true};
        case SINGLE_TODO_SUCCESS:
            return{reduxSingleTodo:payload,isLoading:false};
        case SINGLE_TODO_FAIL:
            return{reduxSingleTodo:payload,isLoading:false};    
        default:return state;
    }
}
 
export const deleteTodoReducer=(state = {reduxDeletedTodo:{}},{type,payload})=>{
    switch (type) {
        case DELETE_TODO_REQUEST:
            return{reduxDeletedTodo:{},isLoading:true};
        case DELETE_TODO_SUCCESS:
            return{reduxDeletedTodo:{},isLoading:false};
        case DELETE_TODO_FAIL:
            return{reduxDeletedTodoError:payload,isLoading:false};    
        default:return state;
    }
}
export const updateTodoReducer=(state = {reduxUpdatedTodo:{}},{type,payload})=>{
    switch (type) {
        case UPDATE_TODO_REQUEST:
            return{reduxUpadatedTodo:{},isLoading:true};
        case UPDATE_TODO_SUCCESS:
            return{reduxUpdatedTodo:{},isLoading:false};
        case UPDATE_TODO_FAIL:
            return{reduxUpdatedTodoError:payload,isLoading:false};    
        default:return state;
    }
}

export const getTodoSingleReducer=(state = {reduxTodoSingle:{}},{type,payload})=>{
    switch (type) {
        case TODO_SINGLE_REQUEST:
            return{reduxTodoSingle:{},isLoading:true};
        case TODO_SINGLE_SUCCESS:
            return{reduxTodoSingle:payload,isLoading:false};
        case TODO_SINGLE_FAIL:
            return{reduxTodoSingle:payload,isLoading:false};    
        default:return state;
    }
}