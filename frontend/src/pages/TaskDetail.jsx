import React,{useState,useEffect}  from 'react'
import{useSelector,useDispatch}from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteTodoAction, getAllTodoAction, updateTodoAction } from '../actions/todo-action'

export default function TaskDetail({match}) {
  let id=match.params.id
const dispatch=useDispatch()
let deleteId
const [first, setfirst] = useState([])
const { reduxTodo,isLoading} = useSelector(state => state.todo)   
    useEffect(()=>{
      dispatch(getAllTodoAction())         
      getRequest()
         
    },[])
    const getRequest=async()=>{
      const data=reduxTodo.filter((item)=> item._id==id)
     console.warn(data);
      setfirst(data)
      console.log(first);
 }
  return (
    <div> 
         <div className="container">
            <div className="row">
          <div className="col-sm-8  offset-sm-2">
          {
                  isLoading ?<div className='spinner spinner-border'></div>
                  :<div className='table-responsive'>
                      <table className="table table-bordered  mt-4 text-center">
                  <thead className='bg-info'>
                      <tr>
                          <th scope='col'>Title</th>
                          <th scope='col'>Short Desc</th>
                          <th scope='col'>Desc</th>
                          <th>Publish</th>
                          <th scope='col'>Action</th>
                      </tr>
                  </thead>
                      <tbody className='bg-dark text-light font-weight-bold w-100'>
                          {
                              first?.map((item=>(
                                  <tr key={item._id}>
                                      <th>{item.title}</th>
                                      <td>{item.shortDesc}</td>
                                      <td>{item.desc}</td>
                                      <td>{item.publish?"completed":"active"}</td>
                                      <td>
                                           
                                          <Link className=" text-warning bi bi-pencil-fill p-2"  to= {`/edit-task/${item._id}`} > </Link>
                                          <i className=" text-danger bi bi-trash btn-sm" 
                                          data-bs-target="#del" data-bs-toggle="modal"
                                          onClick={e=>{deleteId=item._id
                                          } }>  </i>
                                      </td>
                                  </tr>
                              )))
                          }
                      </tbody>
                  </table>
                  </div>
                }
          </div>    
        </div>

      </div>
      {/* Delete Model */}
        <div className="modal fade" id="del">
            <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header bg-warning ">
                    <h5 className="modal-title text-center">Delete Blog</h5>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body bg-dark text-light">
                      <p>Are you sure you want to delete this blog?</p>
                      <div className="btn-group w-100">
                            <div className="btn  btn-success" data-bs-dismiss="modal">No</div>
                            <div className="btn  btn-outline-danger" data-bs-dismiss="modal" onClick={async(e)=>{
                                await dispatch(deleteTodoAction(deleteId))
                                await dispatch(getAllTodoAction())
                            }}>Yes</div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
    </div>
  )
}
