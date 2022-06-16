import React,{useState,useEffect} from 'react' 
import {useSelector,useDispatch}from 'react-redux'
import { getAllTodoAction } from '../actions/todo-action'
import TodoCard from '../components/TodoCard'

export default function Task({match}) {
    let id=match.params.id
     
    const dispatch=useDispatch()
    const {reduxTodo,isLoading}=useSelector(state=>state.todo)
    const [first, setfirst] = useState([])
    useEffect(()=>{
        dispatch(getAllTodoAction())
    },[])
    useEffect(() => {
        const getRequest=async()=>{
             const data=reduxTodo.filter((item)=> item.userId==id)
            console.warn(data);
             setfirst(data)
             console.log(first);
        }
        getRequest()
     }, [ id])
  return (
    <div className='container'>
            <div className="row">
                {
                     isLoading ? <div className='spinner spinner-border'></div>:
                     first?.map(item=>(
                        <div className="col-sm-8 offset-sm-2" key={item._id}>
                            <TodoCard singleTodo={item}/>
                        </div>
                        ))
                }
                 
            </div>
        </div>
  )
}
