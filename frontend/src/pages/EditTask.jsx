import React,{useState,useEffect} from 'react'
import axios from 'axios'
import{useSelector,useDispatch}from 'react-redux'
import { useParams,useHistory } from 'react-router-dom'
import { getAllTodoAction, updateTodoAction } from '../actions/todo-action'

export default function EditTask({history}) {
    let id=useParams().id
    const [edit, setedit] = useState(
        {
            title:"",
            shortDesc:"",
            desc:"",
            publish:""
        }
    )
const[updateId,setupdateId]=useState()

const dispatch=useDispatch()
const { reduxTodo,isLoading} = useSelector(state => state.todo)  
    const handleUpadateBlog=async(e)=>{
        e.preventDefault()
        console.log(edit);
        await dispatch(updateTodoAction(updateId,edit))
         history.push("/task-detail")
    }
    const handleUpdate = ()=>{
        setupdateId(id)
        const res=reduxTodo.filter(x=>x._id==id)
        console.log(res);
        setedit({
            title:res[0]?.title,
            shortDesc:res[0]?.shortDesc,
            desc:res[0]?.desc,
            publish:res[0]?.publish
        })
    }
    useEffect(()=>{
        handleUpdate()
    },[])
  return (
    <div className='container-fluid'> 
        <div className=" row" >
            <div className="col-sm-8 offset-sm-2">
                <div className="card mt-3">
                    <div className="card-header bg-warning text-light">
                    <h5 className="" id="staticBackdropLabel">Update Here</h5>
                     
                </div>
                <div className="card-body bg-dark text-light">
                    <form onSubmit={handleUpadateBlog}>
                                <input type="text" value={edit.title}  onChange={(e)=>{
                                    setedit({...edit,title:e.target.value})
                                }} className="form-control" /><br />
                                <input type="text"  value={edit.shortDesc} onChange={(e)=>{
                                    setedit({...edit,shortDesc:e.target.value})
                                }} className="form-control" /><br />
                                <textarea type="text"  value={edit.desc} onChange={(e)=>{
                                    setedit({...edit,desc:e.target.value})
                                }} className="form-control" /><br />
                                <select  value={edit.publish}  onChange={(e)=>{
                                    setedit({...edit,publish:e.target.value})
                                }} className='form-select'>
                                    <option value="">Select any one</option>
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                                </select><br />
                                <div className='btn-group w-100'>
                                    <div className="btn btn-success" onClick={handleUpadateBlog} data-bs-dismiss="modal">Update Blog</div><br /> 
                                     
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
