import {createStore,combineReducers,applyMiddleware} from 'redux'
import{composeWithDevTools} from 'redux-devtools-extension'
import thunk from'redux-thunk'
import { userLoginReducer } from './reducers/auth-reducer'
import { deleteTodoReducer, getAllTodoReducer, getSingleTodoReducer, getTodoSingleReducer, updateTodoReducer } from './reducers/todo-reducer'
import { userRegisterReducer } from './reducers/user-reducer'

const rootReducers=combineReducers({
    register:userRegisterReducer,
    user:userLoginReducer,
    todo:getAllTodoReducer,
    todoDetail:getSingleTodoReducer,
    deleteTodo:deleteTodoReducer,
    updateTodo:updateTodoReducer,
    singleTodo:getTodoSingleReducer
})
const userInfoFromLocalStorage=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):undefined

const initial={
    user:{
        userInfo:userInfoFromLocalStorage
    }
}
const store=createStore(rootReducers,initial,composeWithDevTools(applyMiddleware(thunk)))

export default store