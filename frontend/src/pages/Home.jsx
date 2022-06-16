import React,{useState,useEffect} from 'react'
import axios from 'axios'
import{useSelector,useDispatch}from 'react-redux'
import { deleteTodoAction, getAllTodoAction, updateTodoAction } from '../actions/todo-action'

export default function Home() {
    const dispatch=useDispatch()
    const [title, settitle] = useState("")
    const [todos, settodos] = useState([])
    const {reduxTodo} = useSelector(state=>state.todo)
    useEffect(()=>{
      dispatch(getAllTodoAction())
    },[])
    const getUser=async(e)=>{
        e.preventDefault()
        console.log(title);
         const data= reduxTodo.filter(item=>item.title==title)
         console.log(data)
         settodos(data)
      } 
return<div className='container-fluid'>
            <div className="row mt-4">
                <div className="col-sm-6 offset-sm-3">
                    <form onSubmit={getUser}>
                            <div className='d-flex '>
                                <input type="text" onChange={e=>settitle(e.target.value)} required className="form-control" placeholder="What are you looking for?"/>
                                <button type="submit" className="btn btn-primary">
                                <i class="bi bi-search"></i>
                                </button> 
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row mt-2">
              {
               todos?.map((item,index)=>(
                  <div className="col-sm-6 col-md-6 col-lg-3 offset-sm-3" >
                    <div className="card" key={index}>
                      {/* <div className="card-header bg-dark text-warning "><h5 className='card-title'>Title: {item.data.title}</h5></div> */}
                    <div className="card-body">
                       
                      <ul className="list-group bg-dark text-warning list-group-flush">
                        <li className="list-group-item"> <h5>Title:</h5>{item.title}  </li>
                        <li className="list-group-item"> <h5>Publish:</h5>{item.publish?"completed":"active"} </li>
                         
                      </ul>
                    </div>
                 </div><br />
              </div>
               ))
              }
              </div> 
            </div>
}
